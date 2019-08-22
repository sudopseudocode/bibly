import React from 'react';
import { makeStyles, ThemeProvider } from '@material-ui/styles';
import { CssBaseline } from '@material-ui/core';
import { ViewProvider } from './contexts/ViewContext';
import { DataProvider } from './contexts/DataContext';
import Header from './components/Header/Header';
import SideBar from './components/SideBar/SideBar';
import View from './components/View';
import './global.css';
import theme from './theme';

const topHeight = 80;
const drawerWidth = 150;

const useStyles = makeStyles({
  content: {
    marginLeft: drawerWidth,
  },
});

export default () => {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <ViewProvider>
        <DataProvider>
          <CssBaseline />
          <SideBar
            drawerWidth={drawerWidth}
            topHeight={topHeight}
          />

          <div className={classes.content}>
            <Header topHeight={topHeight} />
            <View />
          </div>
        </DataProvider>
      </ViewProvider>
    </ThemeProvider>
  );
};
