import React from 'react';
import { makeStyles } from '@material-ui/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import SettingsIcon from '@material-ui/icons/Settings';
import LibraryIcon from '@material-ui/icons/LibraryBooks';

const useStyles = makeStyles({
  iconGroup: {
    flex: 1,
  },
});

const Header = () => {
  const classes = useStyles();
  const menuButtons = [
    {
      label: 'Library',
      icon: <LibraryIcon />,
      onClick: () => {},
    },
    {
      label: 'Settings',
      icon: <SettingsIcon />,
      onClick: () => {},
    },
  ];

  return (
    <AppBar
      color="default"
      position="sticky"
    >
      <Toolbar>
        <div className={classes.iconGroup}>
          {menuButtons.map(menuItem => (
            <Tooltip title={menuItem.label} key={`menuButton-${menuItem.label}`}>
              <IconButton color="default">
                {menuItem.icon}
              </IconButton>
            </Tooltip>
          ))}
        </div>

        <div />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
