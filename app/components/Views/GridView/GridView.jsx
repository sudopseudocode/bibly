import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import Book from './Book';

const useStyles = makeStyles(theme => ({
  container: {
    margin: theme.spacing(0, 2),
    display: 'flex',
  },
}));

const GridView = (props) => {
  const { data } = props;
  const classes = useStyles();

  return (
    <div className={classes.container}>
      {data.map((book) => {
        const fileName = book.split('/').pop();
        const extension = fileName.split('.').pop();
        const title = fileName.split('.').shift().split('-').shift();
        const author = fileName.split('.').shift().split('-').pop();

        return (
          <Book
            key={book}
            title={title}
            author={author}
            fileFormat={extension}
          />
        );
      })}
    </div>
  );
};

GridView.propTypes = {
  data: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default GridView;
