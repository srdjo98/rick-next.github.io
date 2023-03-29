import { Characters } from '@/components/Character/Characters';
import { filterCharacters } from '@/graphql/query';
import { Box } from '@mui/material';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useQuery } from 'react-query';

const FilterCharactersPage = () => {
  const [gender, setGender] = useState<string>('');
  const [status, setStatus] = useState<string>('');
  const router = useRouter();

  useEffect(() => {
    if (router.isReady) {
      setGender(router.query.slug?.[0]!);
      setStatus(router.query.slug?.[1]!);
    }
  }, [router.isReady]);

  const { isLoading, data } = useQuery(['filterCharacters', gender, status], () =>
    filterCharacters({ gender, status }),
  );

  if (isLoading) {
    return <p>...Loading</p>;
  }

  const filteredCharacters = data.data.characters.results.slice(0, 6);

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
      }}
    >
      <Characters characters={filteredCharacters} />
    </Box>
  );
};

export default FilterCharactersPage;
