import { getLocations } from '@/graphql/query';
import { GetServerSideProps } from 'next';
import { QueryClient, dehydrate, useQuery } from 'react-query';
import { LocationProps } from '../[id]';
import { useMemo } from 'react';
import { Box } from '@mui/material';

const LocationsPage = () => {
  const { data, isLoading } = useQuery('locations', getLocations);

  if (isLoading) {
    <p>Loading...</p>;
  }

  const locations: LocationProps[] = useMemo(() => data.data.locations.results, [data]);

  return (
    <div>
      {locations.map((l) => (
        <Box key={l.id}>
          <h1>{l.name}</h1>
        </Box>
      ))}
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery('locations', getLocations);

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};

export default LocationsPage;
