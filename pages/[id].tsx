import { GetStaticProps } from "next";
import { QueryClient, dehydrate, useQuery } from "react-query";
import Episode from "@/components/Character/Episodes";
import SingleCharacter from "@/components/Character/SingleCharacter";
import { getCharacter } from "@/graphql/query";

import { Box, Grid } from "@mui/material";

export interface LocationProp {
  name: string;
  dimension: string;
}

export interface EpisodeProp {
  name: string;
  air_date: string;
  episode: string;
}

export interface CharacterProp {
  name: string;
  gender: string;
  image: string;
  location: LocationProp;
  episode: EpisodeProp[];
}

const CharacterPage = ({ id }: { id: string }) => {
  const { data } = useQuery("character", () => getCharacter(id));
  const character: CharacterProp = data.data.character;

  return (
    <Grid container>
      <Grid item xs={6}>
        <Box sx={{ pt: "25px" }}>
          <SingleCharacter character={character} />
        </Box>
      </Grid>
      <Grid item xs={6}>
        <Box sx={{ bgcolor: "white", mt: "41px", height: "90%" }}></Box>
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
  await queryClient.prefetchQuery("character", () =>
    getCharacter(charId as string)
  );

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
      { params: { id: "1" } },
      { params: { id: "2" } },
      { params: { id: "3" } },
      { params: { id: "4" } },
      { params: { id: "5" } },
      { params: { id: "7" } },
    ],
    fallback: false,
  };
};

export default CharacterPage;
