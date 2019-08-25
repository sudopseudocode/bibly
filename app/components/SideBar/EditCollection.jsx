import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import {
  Popover,
  TextField,
  Fab,
} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  menu: {
    marginTop: theme.spacing(1),
    padding: theme.spacing(2),
    display: 'flex',
    alignItems: 'center',
  },
  text: {
    flexGrow: 1,
  },
  addButton: {
    marginLeft: theme.spacing(2),
    textTransform: 'none',
    width: 70,
    height: 35,
  },
}));

const RenamePopover = (props) => {
  const {
    anchorEl,
    onClose,
    onSubmit,
    label,
  } = props;
  const [collection, setCollection] = useState('');
  const classes = useStyles();

  return (
    <Popover
      open={!!anchorEl}
      anchorEl={anchorEl}
      onClose={onClose}
      onContextMenu={(event) => {
        event.preventDefault();
        onClose();
      }}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'center',
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'center',
      }}
      classes={{ paper: classes.menu }}
    >
      <form
        onSubmit={(event) => {
          event.preventDefault();
          if (!collection) return;
          onSubmit(collection);
          setCollection('');
          onClose();
        }}
      >
        <TextField
          autoFocus
          value={collection}
          placeholder="Collection Name"
          onChange={event => setCollection(event.target.value)}
          className={classes.text}
        />
        <Fab
          color="primary"
          variant="extended"
          className={classes.addButton}
          type="submit"
        >
          {label}
        </Fab>
      </form>
    </Popover>
  );
};

RenamePopover.propTypes = {
  onClose: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  anchorEl: PropTypes.shape({
    current: PropTypes.element,
  }),
  label: PropTypes.string,
};
RenamePopover.defaultProps = {
  anchorEl: null,
  label: 'Submit',
};

export default RenamePopover;
