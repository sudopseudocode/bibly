import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/styles';
import Button from '@material-ui/core/Button';
import SettingsIcon from '@material-ui/icons/Settings';
import ViewContext from '../../contexts/ViewContext';

const useStyles = makeStyles(theme => ({
  icon: {
    marginRight: theme.spacing(0.5),
  },
  button: {
    display: 'flex',
    color: theme.palette.primary.contrastText,
    textTransform: 'none',
    marginBottom: theme.spacing(2),
  },
}));

const SettingsButton = () => {
  const classes = useStyles();
  const { dispatch } = useContext(ViewContext);

  return (
    <Button
      className={classes.button}
      onClick={() => dispatch({ viewSettings: true })}
    >
      <SettingsIcon className={classes.icon} />
      Settings
    </Button>
  );
};

export default SettingsButton;
