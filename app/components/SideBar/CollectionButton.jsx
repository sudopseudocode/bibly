import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { Button } from '@material-ui/core';
import ViewContext from '../../contexts/ViewContext';

const useStyles = makeStyles(theme => ({
  button: {
    borderRadius: 10,
    padding: theme.spacing(1),
    fontSize: 12,
    fontWeight: 'bold',
    margin: theme.spacing(1, 0),
    width: 110,
    textTransform: 'none',
    // Styles for Collection vs. New Collection
    backgroundColor: isAddButton => (isAddButton
      ? null
      : '#F9F9F9'),
    border: isAddButton => (isAddButton
      ? '1px solid #F9F9F9'
      : null),
    color: isAddButton => (isAddButton
      ? '#F9F9F9'
      : theme.palette.primary.dark),
    // Prevents text from breaking to new line
    display: 'block',
    whiteSpace: 'nowrap',
    overflow: 'hidden',

    '&:hover': {
      backgroundColor: isAddButton => (isAddButton
        ? null
        : '#F9F9F9'),
    },
  },
}));

const CollectionButton = (props) => {
  const { label, isAddButton } = props;
  const { dispatch } = useContext(ViewContext);
  const classes = useStyles(isAddButton);
  const handleClick = isAddButton
    ? () => {}
    : () => dispatch({ collection: label });
  const formatLabel = label.length > 15
    ? `${label.slice(0, 15)}...`
    : label;

  return (
    <Button
      className={classes.button}
      onClick={handleClick}
    >
      {formatLabel}
    </Button>
  );
};

CollectionButton.propTypes = {
  label: PropTypes.string.isRequired,
  isAddButton: PropTypes.bool,
};
CollectionButton.defaultProps = {
  isAddButton: false,
};

export default CollectionButton;
