import { GetStaticProps } from 'next';
import { QueryClient, dehydrate, useQuery } from 'react-query';
import Episode from '@/components/Episodes/Episodes';
import { SingleCharacter } from '@/components/Character/SingleCharacter';
import { getCharacter } from '@/graphql/query';
import { Box, Grid } from '@mui/material';

export interface LocationProps {
  id: string;
  name: string;
  dimension: string;
}

export interface EpisodeProps {
  name: string;
  air_date: string;
  episode: string;
}

export interface CharacterProps {
  name: string;
  gender: string;
  image: string;
  location: LocationProps;
  episode: EpisodeProps[];
}

const CharacterPage = ({ id }: { id: string }) => {
  const { data } = useQuery('character', () => getCharacter(id));
  const character: CharacterProps = data.data.character;

  return (
    <Grid container>
      <Grid item xs={6}>
        <Box sx={{ pt: '1.563rem' }}>
          <SingleCharacter character={character} />
        </Box>
      </Grid>
      <Grid item xs={6}>
        <Box sx={{ bgcolor: "white", mt: "2.563rem", height: "90%" }}></Box>
      </Grid>
      <Grid item xs={12}>
        <Episode episodes={character.episode} />
      </Grid>
    </Grid>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { params } = context;
  const charId = params?.id;

  const queryClient = new QueryClient();
  await queryClient.prefetchQuery('character', () => getCharacter(charId as string));

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
      id: charId,
    },
  };
};

export const getStaticPaths = async () => {
  return {
    paths: [
      { params: { id: '1' } },
      { params: { id: '2' } },
      { params: { id: '3' } },
      { params: { id: '4' } },
      { params: { id: '5' } },
      { params: { id: '7' } },
    ],
    fallback: true,
  };
};

export default CharacterPage;
