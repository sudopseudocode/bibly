import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import Drawer from '@material-ui/core/Drawer';
import ListView from './ListView';
import Header from './Header';

const drawerWidth = 150;

const useStyles = makeStyles(theme => ({
  drawerPaper: {
    backgroundImage: `linear-gradient(${theme.palette.primary.light}, ${theme.palette.primary.dark})`,
    width: drawerWidth,
  },
  content: {
    marginLeft: drawerWidth,
  },
}));

const MainWindow = (props) => {
  const { data } = props;
  const classes = useStyles();

  return (
    <React.Fragment>
      <Drawer
        anchor="left"
        variant="permanent"
        classes={{ paper: classes.drawerPaper }}
      >
        Hello
      </Drawer>

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
  data: PropTypes.arrayOf(PropTypes.object),
};
MainWindow.defaultProps = {
  data: [],
};

export default MainWindow;
