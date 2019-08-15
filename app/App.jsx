import React from 'react';
import { makeStyles } from '@material-ui/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import ThemeProvider from '@material-ui/styles/ThemeProvider';
import MainWindow from './components/MainWindow';
import theme from './theme';

const useStyles = makeStyles({
  container: {
    width: '100%',
    minHeight: '100vh',
  },
});

export default () => {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <div className={classes.container}>
        <CssBaseline />
        <MainWindow />
      </div>
    </ThemeProvider>
  );
};
