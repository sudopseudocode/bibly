import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Typography } from '@material-ui/core';
import LocalLibrary from './LocalLibrary';
import SyncSettings from './SyncSettings';

const useStyles = makeStyles((theme) => ({
  container: {
    margin: theme.spacing(4),
    display: 'grid',
  },
  library: {
    display: 'flex',
    alignItems: 'center',
  },
  libraryPath: {
    flexGrow: 1,
    marginRight: theme.spacing(1),
  },
  sync: {
    marginTop: theme.spacing(2),
  },
}));

/**
 * At this point, all settings are stored in localStorage
 * -----------------
 *  Keys used: libraryPath
 */
const General = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <LocalLibrary />

      <div className={classes.sync}>
        <Typography variant="h6">Sync</Typography>
        <SyncSettings />
      </div>
    </div>
  );
};

export default General;
