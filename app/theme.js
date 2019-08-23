import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    common: {
      lighterGray: '#F9F9F9',
      lightGray: '#E1E1E1',
      gray: '#C1C1C1',
      darkGray: '#969696',
    },
    primary: {
      light: '#A57BDC',
      main: '#7D0BD6',
      dark: '#4614B0',
    },
    typography: {
      fontFamily: '"Roboto", sans-serif',
      h1: {
        fontFamily: '"Libre Caslon Display", serif',
        fontStyle: 'normal',
        fontWeight: 'normal',
      },
      h2: {
        fontFamily: '"Libre Caslon Display", serif',
        fontStyle: 'normal',
        fontWeight: 'normal',
      },
      h3: {
        fontFamily: '"Libre Caslon Display", serif',
        fontStyle: 'normal',
        fontWeight: 'normal',
      },
      h4: {
        fontFamily: '"Libre Caslon Display", serif',
        fontStyle: 'normal',
        fontWeight: 'normal',
      },
      h5: {
        fontFamily: '"Libre Caslon Display", serif',
        fontStyle: 'normal',
        fontWeight: 'normal',
      },
      h6: {
        fontFamily: '"Libre Caslon Display", serif',
        fontStyle: 'normal',
        fontWeight: 'normal',
      },
    },
  },
});

export default theme;
