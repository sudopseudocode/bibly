import React, { useState, useEffect } from 'react';
import { makeStyles, ThemeProvider } from '@material-ui/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import MainWindow from './components/MainWindow';
import getAssets from './utils/getAssets';
// import getMetadata from './utils/getMetadata';
import theme from './theme';

const useStyles = makeStyles({
  container: {
    width: '100%',
    minHeight: '100vh',
  },
});

export default () => {
  const classes = useStyles();
  const [allAssets, updateAssets] = useState({
    epub: [],
    mobi: [],
    pdf: [],
  });
  useEffect(() => {
    getAssets()
      .then(newAssets => updateAssets(newAssets))
      .catch(err => console.error(err));
  }, []);
  const { epub } = allAssets;
  // getMetadata(epub[0]);

  return (
    <ThemeProvider theme={theme}>
      <div className={classes.container}>
        <CssBaseline />
        <MainWindow data={epub} />
      </div>
    </ThemeProvider>
  );
};
