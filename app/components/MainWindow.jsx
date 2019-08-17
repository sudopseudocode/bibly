import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import ListView from './ListView';
import Header from './Header/Header';
import SideBar from './SideBar';

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
    <React.Fragment>
      <SideBar drawerWidth={drawerWidth} />

      <div className={classes.content}>
        <Header />

        <ListView
          books={data}
        />
      </div>
    </React.Fragment>
  );
};

MainWindow.propTypes = {
  data: PropTypes.arrayOf(PropTypes.string),
};
MainWindow.defaultProps = {
  data: [],
};

export default MainWindow;
