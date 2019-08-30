import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import {
  Menu,
  MenuItem,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  menuItem: {
    '&:hover': {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.primary.contrastText,
      transition: `color ${theme.transitions.duration.short}ms, background-color ${theme.transitions.duration.short}ms`,
    },
  },
}));

const ContextMenu = (props) => {
  const {
    menuItems,
    open,
    left,
    top,
    onClose,
  } = props;
  const classes = useStyles();

  return (
    <Menu
      open={open}
      onClose={onClose}
      onContextMenu={(event) => {
        event.preventDefault();
        onClose();
      }}
      anchorReference="anchorPosition"
      anchorPosition={{ top, left }}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'left',
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'left',
      }}
      MenuListProps={{ disablePadding: true }}
    >
      {menuItems.map((item) => (
        <MenuItem
          key={item.label}
          onClick={() => {
            onClose();
            if (item.onClick) item.onClick();
          }}
          className={classes.menuItem}
        >
          {item.label}
        </MenuItem>
      ))}
    </Menu>
  );
};

ContextMenu.propTypes = {
  open: PropTypes.bool.isRequired,
  left: PropTypes.number.isRequired,
  top: PropTypes.number.isRequired,
  onClose: PropTypes.func.isRequired,
  menuItems: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      onClick: PropTypes.func,
    }),
  ),
};
ContextMenu.defaultProps = {
  menuItems: [],
};

export default ContextMenu;
