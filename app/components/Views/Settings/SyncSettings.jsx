import React from 'react';
import { makeStyles } from '@material-ui/styles';
import GoogleDriveIcon from 'mdi-material-ui/GoogleDrive';
import DropboxIcon from 'mdi-material-ui/Dropbox';
import AmazonIcon from 'mdi-material-ui/Amazon';
import {
  Button,
  Tooltip,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    justifyContent: 'center',
    margin: theme.spacing(2),
  },
  button: {
    margin: theme.spacing(0, 2),
    padding: 0,
    minWidth: 0,
    width: 50,
    height: 50,
  },
}));

const syncServices = [
  {
    label: 'Dropbox',
    Icon: DropboxIcon,
    onClick: () => {},
  },
  {
    label: 'Google Drive',
    Icon: GoogleDriveIcon,
    onClick: () => {},
  },
  {
    label: 'Amazon S3',
    Icon: AmazonIcon,
    onClick: () => {},
  },
];

const SyncButtons = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      {syncServices.map(({ label, onClick, Icon }) => (
        <Tooltip
          title={label}
          key={label}
        >
          <Button
            variant="outlined"
            color="primary"
            className={classes.button}
            onClick={onClick}
          >
            <Icon />
          </Button>
        </Tooltip>
      ))}
    </div>
  );
};

export default SyncButtons;
