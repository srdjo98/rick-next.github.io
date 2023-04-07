import { Characters } from '@/components/Character/Characters';
import { SelectInput } from '@/components/UI/SelectInput';
import { getCharacters } from '@/graphql/query';
import { genders, status } from '@/utils';
import { Box, Button, Typography } from '@mui/material';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import { QueryClient, dehydrate, useQuery } from 'react-query';

export interface CharactersProps {
  id: number;
  name: string;
  status: string;
  species: string;
  image?: string;
}

export default function Home() {
  const { data, isLoading } = useQuery('characters', getCharacters);
  const { control, handleSubmit } = useForm();
  const router = useRouter();

  if (isLoading) {
    return <p>Loading...</p>;
  }

  const characters: CharactersProps[] = data.data.characters.results.filter(
    (c: CharactersProps) => c.species !== 'Alien' && c.id <= 7,
  );

  const onSubmit = (data: { gender?: string; status?: string }) => {
    router.push(`/${data.gender}/${data.status}`);
  };

  return (
    <Box>
      <Typography variant='h5' sx={{ pb: '0.6rem' }}>
        Filter By
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <SelectInput
          name='gender'
          defaultValue='male'
          menuItems={genders}
          control={control}
        />
        <SelectInput
          name='status'
          defaultValue='dead'
          menuItems={status}
          control={control}
        />
        <Button
          sx={(theme) => ({ bgcolor: theme.palette.primary.main })}
          variant='contained'
          type='submit'
        >
          Filter
        </Button>
      </form>
      <Typography variant='h4' sx={{ pt: '0.625rem', pb: '0.125rem' }}>
        Featured Characters
      </Typography>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
        }}
      >
        <Characters characters={characters} />
      </Box>
    </Box>
  );
}

export const getStaticProps = async () => {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery('characters', getCharacters);

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};
