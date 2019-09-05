import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import Book from './Book';

const useStyles = makeStyles((theme) => ({
  container: {
    margin: theme.spacing(0, 2),
    display: 'flex',
    flexWrap: 'wrap',
  },
}));

const GridView = (props) => {
  const { data } = props;
  const classes = useStyles();

  return (
    <div className={classes.container}>
      {data.map((book) => (
        <Book
          key={book.id}
          title={book.title}
          author={book.author}
          fileFormat="epub"
          bookCover={book.bookCover}
        />
      ))}
    </div>
  );
};

GridView.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
      epubFile: PropTypes.string.isRequired,
      bookCover: PropTypes.string,
    }),
  ).isRequired,
};

export default GridView;
