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
              Filename
            </TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {data.map(book => (
            <TableRow
              key={book}
              hover
            >
              <TableCell>
                {book.split('/').pop()}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

ListView.propTypes = {
  data: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default ListView;
