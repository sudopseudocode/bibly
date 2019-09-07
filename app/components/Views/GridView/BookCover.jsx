import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';

const paddingBottom = '140%';
const useStyles = makeStyles(theme => ({
  placeholder: {
    position: 'relative',
    width: '100%',
    paddingBottom,
    backgroundColor: theme.palette.primary.light,
    fontFamily: 'Libre Meslo Display',
    fontSize: 50,
    fontWeight: 'normal',
    fontStyle: 'normal',
    color: theme.palette.primary.contrastText,
  },
  fileFormat: {
    position: 'absolute',
    width: '100%',
    top: 0,
    bottom: 0,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  bookCover: {
    width: '100%',
    paddingBottom,
    backgroundImage: ({ bookCover }) => `url(data:image/jpeg;base64,${bookCover})`,
    backgroundSize: 'contain',
    backgroundPosition: 'bottom left',
    backgroundRepeat: 'no-repeat',
  },
}));

const BookCover = (props) => {
  const { bookCover, title, fileFormat } = props;
  const classes = useStyles({ bookCover });

  if (bookCover) {
    return (
      <div
        className={classes.bookCover}
        alt={`${title} Book Cover`}
      />
    );
  }
  return (
    <div className={classes.placeholder}>
      <div className={classes.fileFormat}>
        {fileFormat}
      </div>
    </div>
  );
};

BookCover.propTypes = {
  bookCover: PropTypes.string,
  title: PropTypes.string.isRequired,
  fileFormat: PropTypes.string.isRequired,
};
BookCover.defaultProps = {
  bookCover: null,
};

export default BookCover;

