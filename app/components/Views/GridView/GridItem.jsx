import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import BookCover from './BookCover';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    width: 200,
    margin: 15,
  },
  title: {
    fontWeight: 'bold',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    margin: theme.spacing(1, 0, 0, 0),
  },
  author: {
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    color: 'gray',
    margin: theme.spacing(0.5, 0, 0, 0),
  },
}));

const GridItem = (props) => {
  const {
    title,
    author,
    fileFormat,
    bookCover,
  } = props;
  const classes = useStyles(props);

  return (
    <div className={classes.container}>
      <BookCover
        bookCover={bookCover}
        title={title}
        fileFormat={fileFormat}
      />

      <p className={classes.title}>
        {title}
      </p>
      <p className={classes.author}>
        {author}
      </p>
    </div>
  );
};

GridItem.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  fileFormat: PropTypes.string.isRequired,
  bookCover: PropTypes.string,
};
GridItem.defaultProps = {
  bookCover: null,
};

export default GridItem;
