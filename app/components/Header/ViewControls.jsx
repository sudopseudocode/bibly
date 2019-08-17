import React, { useState } from 'react';
import { makeStyles } from '@material-ui/styles';
import clsx from 'clsx';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  button: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 50,
    padding: theme.spacing(1),
    transition: `border-color ${theme.transitions.duration.short}, background-color ${theme.transitions.duration.short}`,
  },
  activeView: {
    transition: `border-color ${theme.transitions.duration.short}, background-color ${theme.transitions.duration.short}`,
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    borderColor: theme.palette.primary.dark,

    '& path, rect': {
      transition: `fill ${theme.transitions.duration.short}`,
      fill: theme.palette.primary.contrastText,
    },
    '&:hover': {
      backgroundColor: theme.palette.primary.light,
    },
  },
}));

const ViewControls = () => {
  const classes = useStyles();
  const [view, setView] = useState('grid');

  return (
    <div className={classes.container}>
      <ButtonGroup size="small">
        <Button
          className={clsx(classes.button, view === 'grid' && classes.activeView)}
          onClick={() => setView('grid')}
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="8" height="8" fill="#C1C1C1" />
            <rect x="12" width="8" height="8" fill="#C1C1C1" />
            <rect y="12" width="8" height="8" fill="#C1C1C1" />
            <rect x="12" y="12" width="8" height="8" fill="#C1C1C1" />
          </svg>
        </Button>
        <Button
          className={clsx(classes.button, view === 'list' && classes.activeView)}
          onClick={() => setView('list')}
        >
          <svg width="29" height="22" viewBox="0 0 29 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.7875 5.04916H27.1875C28.2025 5.04916 29 4.25571 29 3.24588C29 2.23604 28.2025 1.4426 27.1875 1.4426H9.7875C8.77251 1.4426 7.97501 2.23604 7.97501 3.24588C7.97501 4.25571 8.77251 5.04916 9.7875 5.04916Z" fill="#C1C1C1" />
            <path d="M2.9 14.0656C4.50162 14.0656 5.8 12.7738 5.8 11.1804C5.8 9.58688 4.50162 8.2951 2.9 8.2951C1.29837 8.2951 0 9.58688 0 11.1804C0 12.7738 1.29837 14.0656 2.9 14.0656Z" fill="#C1C1C1" />
            <path d="M2.9 5.7705C4.50162 5.7705 5.8 4.47873 5.8 2.88525C5.8 1.29177 4.50162 0 2.9 0C1.29837 0 0 1.29177 0 2.88525C0 4.47873 1.29837 5.7705 2.9 5.7705Z" fill="#C1C1C1" />
            <path d="M27.1875 9.37704H9.7875C8.77251 9.37704 7.97501 10.1705 7.97501 11.1803C7.97501 12.1902 8.77251 12.9836 9.7875 12.9836H27.1875C28.2025 12.9836 29 12.1902 29 11.1803C29 10.1705 28.2025 9.37704 27.1875 9.37704Z" fill="#C1C1C1" />
            <path d="M2.9 22C4.50162 22 5.8 20.7083 5.8 19.1148C5.8 17.5213 4.50162 16.2295 2.9 16.2295C1.29837 16.2295 0 17.5213 0 19.1148C0 20.7083 1.29837 22 2.9 22Z" fill="#C1C1C1" />
            <path d="M27.1875 17.3115H9.7875C8.77251 17.3115 7.97501 18.1049 7.97501 19.1148C7.97501 20.1246 8.77251 20.9181 9.7875 20.9181H27.1875C28.2025 20.9181 29 20.1246 29 19.1148C29 18.1049 28.2025 17.3115 27.1875 17.3115Z" fill="#C1C1C1" />
          </svg>

        </Button>
      </ButtonGroup>
    </div>
  );
};

export default ViewControls;
