import {
  RickTable,
  TableBodyProps,
  TableHeadProps,
} from '@/components/Table/Table';
import { getLocations } from '@/graphql/query';
import { usePagination } from '@/hooks/usePagination';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { Box, Button } from '@mui/material';
import { GetServerSideProps } from 'next';
import { useMemo } from 'react';
import { QueryClient, dehydrate, useQuery } from 'react-query';
import { LocationProps } from '../[id]';

const LocationsPage = () => {
  const { goTo, page } = usePagination();
  const { data, isLoading } = useQuery(['locations', page], () =>
    getLocations(page),
  );

  if (isLoading) {
    <p>Loading...</p>;
  }

  const locations: LocationProps[] = useMemo(
    () => data?.data?.locations.results,
    [data],
  );

  const tableRows: TableHeadProps[] = [
    { name: 'Location Name' },
    { name: 'Dimension' },
  ];

  const tableBodyRows: TableBodyProps[] = [
    {
      accessor: 'name',
    },
    {
      accessor: 'dimension',
      altValue: ({ dimension }: LocationProps) =>
        dimension !== 'unknown' && dimension ? dimension : '-',
    },
  ];

  return (
    <div>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'flex-end',
          pb: '0.5rem',
          gap: '10px',
        }}
      >
        <Button variant='contained' onClick={goTo.prev}>
          <NavigateBeforeIcon />
        </Button>

        <Button
          variant='contained'
          onClick={() => locations?.length === 20 && goTo.next()}
        >
          <NavigateNextIcon />
        </Button>
      </Box>
      <RickTable
        tableHeadRows={tableRows}
        tableBodyRows={tableBodyRows}
        values={locations}
      />
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery('locations', () => getLocations());

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};

export default LocationsPage;
