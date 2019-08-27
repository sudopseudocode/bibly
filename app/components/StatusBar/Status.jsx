import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { CircularProgress } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  container: {
    margin: theme.spacing(0, 2),
    display: 'flex',
    alignItems: 'center',
  },
  loading: {
    marginRight: theme.spacing(2),
  },
}));

const Status = (props) => {
  const { isLoading, message } = props;
  const classes = useStyles();

  return (
    <div className={classes.container}>
      {isLoading && (
        <CircularProgress
          className={classes.loading}
          color="primary"
          size={30}
          thickness={7}
        />
      )}
      <span className={classes.statusMessage}>
        {message}
      </span>
    </div>
  );
};

Status.propTypes = {
  message: PropTypes.string.isRequired,
  isLoading: PropTypes.bool,
};
Status.defaultProps = {
  isLoading: false,
};

export default Status;
