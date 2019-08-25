import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { Button } from '@material-ui/core';
import ViewContext from '../../contexts/ViewContext';
import ContextMenu from '../ContextMenu';

const useStyles = makeStyles(theme => ({
  button: {
    borderRadius: 10,
    padding: theme.spacing(1),
    fontSize: 12,
    fontWeight: 'bold',
    margin: theme.spacing(1, 0),
    width: 110,
    textTransform: 'none',
    backgroundColor: theme.palette.common.lighterGray,
    color: theme.palette.primary.dark,
    // Prevents text from breaking to new line
    display: 'block',
    whiteSpace: 'nowrap',
    overflow: 'hidden',

    '&:hover': {
      backgroundColor: theme.palette.common.lighterGray,
    },
  },
}));

const CollectionButton = (props) => {
  const { label } = props;
  const { dispatch } = useContext(ViewContext);
  const classes = useStyles();
  const formatLabel = label.length > 15
    ? `${label.slice(0, 15)}...`
    : label;
  const handleClick = () => dispatch({ collection: label });
  const [left, setLeft] = useState(0);
  const [top, setTop] = useState(0);
  const [open, setOpen] = useState(false);

  return (
    <React.Fragment>
      <Button
        className={classes.button}
        onClick={handleClick}
        onContextMenu={(event) => {
          event.preventDefault();
          setLeft(event.clientX);
          setTop(event.clientY);
          setOpen(true);
        }}
      >
        {formatLabel}
      </Button>

      <ContextMenu
        open={open}
        left={left}
        top={top}
        onClose={() => setOpen(false)}
        menuItems={[
          {
            label: 'Rename',
            onClick: () => {},
          },
          {
            label: 'Delete',
            onClick: () => {},
          },
        ]}
      />
    </React.Fragment>
  );
};

CollectionButton.propTypes = {
  label: PropTypes.string.isRequired,
};

export default CollectionButton;
