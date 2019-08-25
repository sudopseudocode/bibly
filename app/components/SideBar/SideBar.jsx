import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { Drawer } from '@material-ui/core';
import SettingsButton from './SettingsButton';
import Collections from './Collections/Collections';

const bottomSize = 50;
const useStyles = makeStyles(theme => ({
  drawerPaper: {
    width: ({ drawerWidth }) => drawerWidth,
  },
  top: {
    position: 'absolute',
    top: 0,
    height: ({ topHeight }) => topHeight,
    width: '100%',
    backgroundColor: theme.palette.primary.main,
    borderBottom: `1px solid ${theme.palette.common.gray}`,
    zIndex: 1,
  },
  brand: {
    display: 'flex',
    justifyContent: 'center',
    margin: theme.spacing(1, 0, 2, 0),
    fontFamily: 'Libre Caslon Display',
    fontSize: 35,
    fontStyle: 'normal',
    fontWeight: 'normal',
    color: theme.palette.primary.contrastText,
  },
  middle: {
    position: 'absolute',
    top: ({ topHeight }) => topHeight,
    bottom: bottomSize,
    width: '100%',
    overflow: 'auto',
    backgroundImage: `linear-gradient(${theme.palette.primary.main}, ${theme.palette.primary.dark})`,
    zIndex: 1,
  },
  bottom: {
    position: 'absolute',
    bottom: 0,
    height: bottomSize,
    width: '100%',
    backgroundColor: theme.palette.primary.dark,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    borderTop: `1px solid ${theme.palette.common.gray}`,
  },
}));

const SideBar = (props) => {
  const { drawerWidth, topHeight } = props;
  const classes = useStyles({ drawerWidth, topHeight });

  return (
    <Drawer
      anchor="left"
      variant="permanent"
      classes={{ paper: classes.drawerPaper }}
    >
      <div className={classes.top}>
        <h1 className={classes.brand}>Bibly</h1>
      </div>

      <div className={classes.middle}>
        <Collections />
      </div>

      <div className={classes.bottom}>
        <SettingsButton />
      </div>
    </Drawer>
  );
};

SideBar.propTypes = {
  drawerWidth: PropTypes.number.isRequired,
  topHeight: PropTypes.number.isRequired,
};

export default SideBar;
