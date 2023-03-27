import { getLocations } from "@/graphql/query";
import { GetServerSideProps } from "next";
import { QueryClient, dehydrate, useQuery } from "react-query";
import { LocationProp } from "../[id]";
import { useMemo } from "react";

const LocationsPage = () => {
  const { data, isLoading } = useQuery("locations", getLocations);

  if (isLoading) {
    <p>Loading...</p>;
  }

  const locations: LocationProp[] = useMemo(
    () => data.data.locations.results,
    [data]
  );

  return (
    <div>
      {locations.map((l) => (
        <div>
          <h1>{l.name}</h1>
        </div>
      ))}
    </div>
  );
};

export const getServerSideProps = async () => {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery("locations", getLocations);

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};

export default LocationsPage;
