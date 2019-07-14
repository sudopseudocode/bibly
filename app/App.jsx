import React from 'react';
import { makeStyles } from '@material-ui/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Library from './components/Library';

const useStyles = makeStyles({
  container: {
    width: '100%',
    minHeight: '100vh'
  }
});

export default () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <CssBaseline />
      <Library />
    </div>
  );
};
