import React from 'react';
import { ThemeProvider } from '@material-ui/styles';
import { CssBaseline } from '@material-ui/core';
import { ViewProvider } from './contexts/ViewContext';
import { DataProvider } from './contexts/DataContext';
import View from './components/View';
import './global.css';
import theme from './theme';


export default () => (
  <ThemeProvider theme={theme}>
    <ViewProvider>
      <DataProvider>
        <CssBaseline />

        <View />
      </DataProvider>
    </ViewProvider>
  </ThemeProvider>
);
