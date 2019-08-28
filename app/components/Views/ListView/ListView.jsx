import React from 'react';
import PropTypes from 'prop-types';
// import { makeStyles } from '@material-ui/styles';
import {
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
} from '@material-ui/core';

// const useStyles = makeStyles(theme => ({
//   container: {
//   },
// }));

const ListView = (props) => {
  const { data } = props;
  // const classes = useStyles();

  return (
    <div>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>
              Title
            </TableCell>
            <TableCell>
              Author
            </TableCell>
            <TableCell>
              Publisher
            </TableCell>
            <TableCell>
              Format
            </TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {data.map((book) => (
            <TableRow
              key={book.id}
              hover
            >
              <TableCell>
                {book.title}
              </TableCell>
              <TableCell>
                {book.author}
              </TableCell>
              <TableCell>
                {book.publisher}
              </TableCell>
              <TableCell>
                epub
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

ListView.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
      publisher: PropTypes.string,
      identifier: PropTypes.string,
      description: PropTypes.string,
    }),
  ).isRequired,
};

export default ListView;
