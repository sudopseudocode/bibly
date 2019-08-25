import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import {
  Button,
  Fab,
  Popover,
  TextField,
} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  button: {
    borderRadius: 10,
    padding: theme.spacing(1),
    fontSize: 12,
    fontWeight: 'bold',
    margin: theme.spacing(1, 0),
    width: 110,
    textTransform: 'none',
    border: `1px solid ${theme.palette.common.lighterGray}`,
    color: theme.palette.common.lighterGray,
    // Prevents text from breaking to new line
    display: 'block',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
  },
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

const NewCollection = (props) => {
  const { onSubmit } = props;
  const classes = useStyles();
  const [collection, setCollection] = useState('');
  const [anchorEl, setAnchorEl] = useState(null);
  const handleClose = () => setAnchorEl(null);
  const handleAdd = () => {
    if (!collection) return;
    onSubmit(collection);
    setCollection('');
    handleClose();
  };

  return (
    <React.Fragment>
      <Button
        className={classes.button}
        onClick={event => setAnchorEl(event.currentTarget)}
      >
        New Collection
      </Button>

      <Popover
        open={!!anchorEl}
        anchorEl={anchorEl}
        onClose={handleClose}
        onContextMenu={(event) => {
          event.preventDefault();
          handleClose();
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
            handleAdd();
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
            onClick={handleAdd}
          >
          Add
          </Fab>
        </form>
      </Popover>
    </React.Fragment>
  );
};

NewCollection.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default NewCollection;
