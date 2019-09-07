/* eslint react/jsx-props-no-spreading: off */
import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { useTable, useSortBy } from 'react-table';
import {
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  TableSortLabel,
} from '@material-ui/core';

const ListView = (props) => {
  const { data } = props;
  const columns = useMemo(
    () => [
      {
        Header: 'Title',
        accessor: 'title',
      },
      {
        Header: 'Author',
        accessor: 'author',
      },
      {
        Header: 'Genre',
        accessor: 'genre',
      },
      {
        Header: 'Publisher',
        accessor: 'publisher',
      },
    ],
    []
  );
  const {
    getTableProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({ data, columns }, useSortBy);

  return (
    <div>
      <Table {...getTableProps()}>
        <TableHead>
          {headerGroups.map(headerGroup => (
            <TableRow
              {...headerGroup.getHeaderGroupProps()}
              hover
            >
              {headerGroup.headers.map(column => (
                <TableCell {...column.getHeaderProps(column.getSortByToggleProps())}>
                  <TableSortLabel
                    active={column.isSorted}
                    direction={column.isSortedDesc ? 'desc' : 'asc'}
                  >
                    {column.render('Header')}
                  </TableSortLabel>
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableHead>

        <TableBody>
          {rows.map((row) => (
            prepareRow(row) || (
              <TableRow {...row.getRowProps()} hover>
                {row.cells.map(cell => (
                  <TableCell {...cell.getCellProps()}>
                    {cell.render('Cell')}
                  </TableCell>
                ))}
              </TableRow>
            )
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

ListView.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
      publisher: PropTypes.string,
      identifier: PropTypes.string,
      description: PropTypes.string,
    }),
  ).isRequired,
};

export default ListView;
