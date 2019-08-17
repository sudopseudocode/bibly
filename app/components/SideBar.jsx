import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import Drawer from '@material-ui/core/Drawer';
import CollectionButton from './CollectionButton';
import SettingsButton from './SettingsButton';

const useStyles = makeStyles(theme => ({
  drawerPaper: {
    backgroundImage: `linear-gradient(${theme.palette.primary.light}, ${theme.palette.primary.dark})`,
    width: drawerWidth => drawerWidth,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  brand: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: theme.spacing(1),
    fontFamily: 'Libre Caslon Display',
    fontSize: 35,
    fontStyle: 'normal',
    fontWeight: 'normal',
    color: theme.palette.primary.contrastText,
  },
  collections: {
    flexGrow: 1,
  },
}));

const SideBar = (props) => {
  const { drawerWidth } = props;
  const classes = useStyles(drawerWidth);

  return (
    <Drawer
      anchor="left"
      variant="permanent"
      classes={{ paper: classes.drawerPaper }}
    >
      <h1 className={classes.brand}>Bibly</h1>

      <div className={classes.collections}>
        <CollectionButton collection="Sometin" />
        <CollectionButton collection="Sometin" />
        <CollectionButton collection="Sometin" />
        <CollectionButton collection="Sometin" />
      </div>

      <SettingsButton />
    </Drawer>
  );
};

SideBar.propTypes = {
  drawerWidth: PropTypes.number.isRequired,
};

export default SideBar;
