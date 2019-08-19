import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import Header from './Header/Header';
import SideBar from './SideBar/SideBar';
import View from './View';
import { ViewProvider } from '../contexts/ViewContext';
import { DataProvider } from '../contexts/DataContext';

const drawerWidth = 150;

const useStyles = makeStyles({
  content: {
    marginLeft: drawerWidth,
  },
});

const MainWindow = (props) => {
  const { data } = props;
  const classes = useStyles();

  return (
    <ViewProvider>
      <DataProvider>
        <SideBar drawerWidth={drawerWidth} />

        <div className={classes.content}>
          <Header />

          <View data={data} />
        </div>
      </DataProvider>
    </ViewProvider>
  );
};

MainWindow.propTypes = {
  data: PropTypes.arrayOf(PropTypes.string),
};
MainWindow.defaultProps = {
  data: [],
};

export default MainWindow;
