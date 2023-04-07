import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';

export interface TableHeadProps {
  name: string;
}

export interface TableBodyProps {
  accessor: string;
  label?: string;
  altValue?: (value: any) => any;
}

interface Props<T> {
  tableHeadRows: TableHeadProps[];
  tableBodyRows: TableBodyProps[];
  values?: T[];
}

export const RickTable = <T,>({
  tableHeadRows,
  tableBodyRows,
  values,
}: Props<T>) => {
  return (
    <TableContainer component={Paper}>
      <Table
        sx={(theme) => ({
          minWidth: 650,
          bgcolor: theme.palette.primary.main,
        })}
        aria-label='simple table'
      >
        <TableHead>
          <TableRow>
            {tableHeadRows.map((row) => (
              <TableCell
                key={row.name}
                sx={{ fontSize: '1.263rem', fontWeight: 700, color: 'white' }}
              >
                {row.name}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {values?.map((value, i) => (
            <TableRow
              key={i}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              {tableBodyRows.map((row, i) => (
                <TableCell
                  key={i}
                  component='th'
                  scope='row'
                  sx={{ fontSize: '1.064rem', color: 'white' }}
                >
                  {row.altValue
                    ? row.altValue(value)
                    : value[row.accessor as keyof T] || '-'}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
