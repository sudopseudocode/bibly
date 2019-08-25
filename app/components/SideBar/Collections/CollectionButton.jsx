import React, { useState, useRef, useContext } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { Button } from '@material-ui/core';
import ViewContext from '../../../contexts/ViewContext';
import ContextMenu from '../../ContextMenu';
import EditCollection from './EditCollection';
import ConfirmDelete from './ConfirmDelete';

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
  const { label, onRename, onDelete } = props;
  const { dispatch } = useContext(ViewContext);
  const classes = useStyles();
  const formatLabel = label.length > 15
    ? `${label.slice(0, 15)}...`
    : label;
  const handleClick = () => dispatch({ collection: label });
  const [left, setLeft] = useState(0);
  const [top, setTop] = useState(0);
  const anchorEl = useRef(null);
  const [context, setContext] = useState(false);
  const [rename, setRename] = useState(false);
  const [confirmDelete, setDelete] = useState(false);

  return (
    <React.Fragment>
      <Button
        className={classes.button}
        ref={anchorEl}
        onClick={handleClick}
        onContextMenu={(event) => {
          event.preventDefault();
          setLeft(event.clientX);
          setTop(event.clientY);
          setContext(true);
        }}
      >
        {formatLabel}
      </Button>

      <ContextMenu
        open={context}
        left={left}
        top={top}
        onClose={() => setContext(false)}
        menuItems={[
          {
            label: 'Rename',
            onClick: () => setRename(true),
          },
          {
            label: 'Delete',
            onClick: () => setDelete(true),
          },
        ]}
      />

      <EditCollection
        open={rename}
        presetValue={label}
        anchorEl={anchorEl.current}
        onClose={() => setRename(false)}
        onSubmit={onRename}
        label="Rename"
      />

      <ConfirmDelete
        open={confirmDelete}
        onClose={() => setDelete(false)}
        onDelete={onDelete}
        collectionName={label}
      />
    </React.Fragment>
  );
};

CollectionButton.propTypes = {
  label: PropTypes.string.isRequired,
  onRename: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default CollectionButton;
