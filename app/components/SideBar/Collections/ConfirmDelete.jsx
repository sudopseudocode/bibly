import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import {
  Dialog,
  IconButton,
  Button,
} from '@material-ui/core';
import Close from 'mdi-material-ui/Close';

const useStyles = makeStyles(theme => ({
  content: {
    margin: theme.spacing(4),
  },
  closeButton: {
    position: 'absolute',
    top: 0,
    right: 0,
  },
  message: {
    fontFamily: 'Libre Meslo Display',
    fontSize: 18,
    textAlign: 'center',
  },
  buttonGroup: {
    display: 'flex',
    justifyContent: 'center',
    margin: theme.spacing(6, 0, 0, 0),

    '& button': {
      textTransform: 'none',
      margin: theme.spacing(0, 2),
    },
  },
  deleteButton: {
    backgroundColor: theme.palette.primary.dark,
    color: theme.palette.primary.contrastText,

    '&:hover': {
      backgroundColor: theme.palette.primary.main,
    },
  },
  collectionName: {
    fontWeight: 'bold',
  },
}));

const ConfirmDelete = (props) => {
  const {
    open,
    onClose,
    onDelete,
    collectionName,
  } = props;
  const classes = useStyles();

  return (
    <Dialog
      open={open}
      onClose={onClose}
      fullWidth
      maxWidth="sm"
    >
      <IconButton
        onClick={onClose}
        className={classes.closeButton}
      >
        <Close />
      </IconButton>

      <div className={classes.content}>
        <p className={classes.message}>
          Are you sure you want to delete the collection called
          &quot;
          <span className={classes.collectionName}>
            {collectionName}
          </span>
          &quot;?
        </p>

        <div className={classes.buttonGroup}>
          <Button
            variant="outlined"
            color="primary"
            onClick={onClose}
          >
          Cancel
          </Button>
          <Button
            variant="outlined"
            color="primary"
            onClick={onDelete}
            className={classes.deleteButton}
          >
          Delete
          </Button>
        </div>
      </div>
    </Dialog>
  );
};

ConfirmDelete.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  collectionName: PropTypes.string.isRequired,
};

export default ConfirmDelete;
