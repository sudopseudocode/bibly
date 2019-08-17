import React from 'react';
import { makeStyles } from '@material-ui/styles';
import SearchControls from './SearchControls';
import ViewControls from './ViewControls';

const useStyles = makeStyles(theme => ({
  container: {
    margin: theme.spacing(1, 5, 3, 5),
  },
}));

const Header = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <SearchControls />
      <ViewControls />
    </div>
  );
};

export default Header;
