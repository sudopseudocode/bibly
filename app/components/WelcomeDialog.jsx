import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import { Dialog } from '@material-ui/core';
import SyncSettings from './Views/Settings/SyncSettings';
import LocalLibrary from './Views/Settings/LocalLibrary';

const useStyles = makeStyles((theme) => ({
  title: {
    marginTop: theme.spacing(4),
    fontFamily: 'Libre Caslon Display',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 30,
    display: 'flex',
    justifyContent: 'center',
  },
  content: {
    margin: theme.spacing(0, 4, 4, 4),
  },
  paragraph: {
    textAlign: 'center',
  },
  subtitle: {
    // Inherit the rest from title class
    fontSize: 20,
  },
  or: {
    display: 'flex',
    alignItems: 'center',
    color: theme.palette.common.lightGray,
    marginTop: theme.spacing(4),

    '& hr': {
      flexGrow: 1,
      height: 1,
      backgroundColor: theme.palette.common.lightGray,
      border: 'none',
      margin: theme.spacing(0, -4),
    },
    '& span': {
      margin: theme.spacing(0, 6),
      fontWeight: 'bold',
      fontSize: 16,
    },
  },
}));

const WelcomeDialog = (props) => {
  const { open, onClose } = props;
  const classes = useStyles();

  return (
    <Dialog
      open={open}
      fullWidth
      maxWidth="sm"
      // No onClose because user must enter valid library first
    >
      <h2 className={classes.title}>
        Welcome to Bibly!
      </h2>
      <div className={classes.content}>
        <p className={classes.paragraph}>
          Choose a path on your computer where you want to import &amp;
          save your book files or choose to sync your library using Dropbox,
          Google Drive, or Amazon S3.
        </p>

        <h3 className={clsx(classes.title, classes.subtitle)}>
          Use Local Library
        </h3>
        <LocalLibrary
          onClose={onClose}
        />

        <div className={classes.or}>
          <hr />
          <span>or</span>
          <hr />
        </div>

        <h3 className={clsx(classes.title, classes.subtitle)}>
          Sync Library to Cloud
        </h3>
        <SyncSettings />
      </div>
    </Dialog>
  );
};

WelcomeDialog.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default WelcomeDialog;
