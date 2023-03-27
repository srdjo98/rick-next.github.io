import Characters from "@/components/Character/Characters";
import { getCharacters } from "@/graphql/query";
import { Box, Typography } from "@mui/material";

import { QueryClient, dehydrate, useQuery } from "react-query";

export interface CharactersProp {
  id: number;
  name: string;
  status: string;
  species: string;
  image?: string;
}

export default function Home() {
  const { data, isLoading } = useQuery("characters", getCharacters);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  const characters: CharactersProp[] = data.data.characters.results.filter(
    (char: CharactersProp) => char.species !== "Alien" && char.id <= 7
  );

  return (
    <Box>
      <Typography variant="h4" sx={{ pt: "0.625rem", pb: "0.125rem" }}>
        Featured Characters
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
        }}
      >
        <Characters characters={characters} />
      </Box>
    </Box>
  );
}

export const getStaticProps = async () => {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery("characters", getCharacters);

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};
