import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { Button } from '@material-ui/core';
import EditPopover from './EditCollection';

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
}));

const NewCollection = (props) => {
  const { onSubmit } = props;
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);

  return (
    <React.Fragment>
      <Button
        className={classes.button}
        onClick={event => setAnchorEl(event.currentTarget)}
      >
        New Collection
      </Button>

      <EditPopover
        open={!!anchorEl}
        anchorEl={anchorEl}
        onClose={() => setAnchorEl(null)}
        onSubmit={onSubmit}
        label="Add"
        resetSubmit
      />
    </React.Fragment>
  );
};

NewCollection.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default NewCollection;
