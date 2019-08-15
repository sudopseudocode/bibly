import React from 'react';
import { makeStyles } from '@material-ui/styles';
import Toolbar from '@material-ui/core/Toolbar';

const useStyles = makeStyles(theme => ({
  container: {
    backgroundColor: theme.palette.background.default,
    position: 'sticky',
    top: 0,
  },
  searchBar: {
    flex: 1,
  },
  sortBy: {

  },
}));

const Header = () => {
  const classes = useStyles();

  return (
    <Toolbar className={classes.container}>
      <div className={classes.searchBar}>
        Search
      </div>

      <div className={classes.sortBy}>
        Sort by
      </div>
    </Toolbar>
  );
};

export default Header;
