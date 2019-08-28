import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    width: 220,
    margin: theme.spacing(2),
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
  placeholder: {
    height: 300,
    backgroundColor: theme.palette.primary.light,
    fontFamily: 'Libre Meslo Display',
    fontSize: 50,
    fontWeight: 'normal',
    fontStyle: 'normal',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: theme.palette.primary.contrastText,
  },
}));

const Book = (props) => {
  const {
    title,
    author,
    fileFormat,
    bookCover,
  } = props;
  const classes = useStyles();

  return (
    <div className={classes.container}>
      {bookCover
        ? null
        : (
          <div className={classes.placeholder}>
            {fileFormat}
          </div>
        )}

      <p className={classes.title}>
        {title}
      </p>
      <p className={classes.author}>
        {author}
      </p>
    </div>
  );
};

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  fileFormat: PropTypes.string.isRequired,
  bookCover: PropTypes.string,
};
Book.defaultProps = {
  bookCover: null,
};

export default Book;
