import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/styles';
import clsx from 'clsx';
import {
  ButtonGroup,
  Button,
} from '@material-ui/core';
import GridIcon from 'mdi-material-ui/ViewGrid';
import ListIcon from 'mdi-material-ui/FormatListBulleted';
import ViewContext from '../../contexts/ViewContext';

const useStyles = makeStyles((theme) => ({
  container: {
    padding: theme.spacing(2, 4),
  },
  button: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 50,
    transition: `border-color ${theme.transitions.duration.short}ms, background-color ${theme.transitions.duration.short}ms`,

    '& path, rect': {
      transition: `fill ${theme.transitions.duration.short}ms`,
      fill: theme.palette.common.darkGray,
    },
  },
  activeView: {
    transition: `border-color ${theme.transitions.duration.short}ms, background-color ${theme.transitions.duration.short}ms`,
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    borderColor: theme.palette.primary.dark,

    '& path, rect': {
      transition: `fill ${theme.transitions.duration.short}ms`,
      fill: theme.palette.primary.contrastText,
    },
    '&:hover': {
      backgroundColor: theme.palette.primary.dark,
    },
  },
  settingsButton: {
    textTransform: 'none',
  },
}));

const ViewControls = () => {
  const classes = useStyles();
  const { dispatch, view, viewSettings } = useContext(ViewContext);

  // If in settings, we don't want to show a regular view
  if (viewSettings) {
    return (
      <div className={classes.container}>
        <Button
          variant="contained"
          color="primary"
          className={classes.settingsButton}
          onClick={() => dispatch({ viewSettings: false })}
        >
          Go Back
        </Button>
      </div>
    );
  }

  return (
    <div className={classes.container}>
      <ButtonGroup size="small">
        <Button
          className={clsx(classes.button, view === 'grid' && classes.activeView)}
          onClick={() => dispatch({ view: 'grid' })}
        >
          <GridIcon />
        </Button>
        <Button
          className={clsx(classes.button, view === 'list' && classes.activeView)}
          onClick={() => dispatch({ view: 'list' })}
        >
          <ListIcon />
        </Button>
      </ButtonGroup>
    </div>
  );
};

export default ViewControls;
