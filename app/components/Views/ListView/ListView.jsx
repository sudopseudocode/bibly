/* eslint react/jsx-props-no-spreading: off */
import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { useTable, useSortBy } from 'react-table';
import {
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  TableSortLabel,
} from '@material-ui/core';
import BookCover from '../GridView/BookCover';

const useStyles = makeStyles({
  bookCover: {
    display: 'flex',
    justifyContent: 'center',
  },
});

const ListView = (props) => {
  const { data } = props;
  const classes = useStyles();
  const BookCell = ({ cell: { value }, row: { original: { title } } }) => (
    <div className={classes.bookCover}>
      <BookCover
        bookCover={value}
        fileFormat="epub"
        title={title}
        mini
      />
    </div>
  );
  BookCell.propTypes = {
    cell: PropTypes.shape({
      value: PropTypes.string,
    }).isRequired,
    row: PropTypes.shape({
      original: PropTypes.shape({
        title: PropTypes.string,
      }).isRequired,
    }).isRequired,
  };
  const columns = useMemo(
    () => [
      {
        Header: 'Cover',
        accessor: 'bookCover',
        Cell: BookCell,
        disableSorting: true,
      },
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
  } = useTable({
    data: useMemo(() => data, []),
    columns,
  }, useSortBy);

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
