import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import Button from '@material-ui/core/Button';
import ViewContext from '../../contexts/ViewContext';

const useStyles = makeStyles(theme => ({
  button: {
    border: `1px solid ${theme.palette.primary.contrastText}`,
    borderRadius: 5,
    color: theme.palette.primary.contrastText,
    margin: theme.spacing(2, 0),
    width: 80,
    height: 80,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textTransform: 'none',
  },
}));

const CollectionButton = (props) => {
  const { collection } = props;
  const classes = useStyles();
  const { dispatch } = useContext(ViewContext);

  return (
    <Button
      className={classes.button}
      onClick={() => dispatch({ collection })}
    >
      {collection}
    </Button>
  );
};

CollectionButton.propTypes = {
  collection: PropTypes.string.isRequired,
};

export default CollectionButton;
