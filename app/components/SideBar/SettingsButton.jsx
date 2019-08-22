import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/styles';
import { Button } from '@material-ui/core';
import SettingsIcon from 'mdi-material-ui/Settings';
import ViewContext from '../../contexts/ViewContext';

const useStyles = makeStyles(theme => ({
  icon: {
    marginRight: theme.spacing(0.5),
  },
  button: {
    color: theme.palette.primary.contrastText,
    textTransform: 'none',
    width: '100%',
    height: '100%',
  },
}));

const SettingsButton = () => {
  const classes = useStyles();
  const { dispatch, viewSettings } = useContext(ViewContext);

  return (
    <Button
      className={classes.button}
      onClick={() => dispatch({ viewSettings: !viewSettings })}
    >
      <SettingsIcon className={classes.icon} />
      Settings
    </Button>
  );
};

export default SettingsButton;
