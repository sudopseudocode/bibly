import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { remote } from 'electron';
import path from 'path';
import fs from 'fs';
import { makeStyles } from '@material-ui/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import FolderOpenIcon from 'mdi-material-ui/FolderOpen';

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    alignItems: 'flex-start',
  },
  libraryPath: {
    flexGrow: 1,
  },
  folderButton: {
    minWidth: 0,
    padding: theme.spacing(2, 2),
    borderRadius: theme.spacing(0, 1, 1, 0),
    backgroundColor: theme.palette.primary.dark,
  },
  useLibrary: {
    textTransform: 'none',
    margin: theme.spacing(0, 2),
    padding: theme.spacing(2, 2),
  },
}));

const { dialog } = remote;

const LocalLibrary = (props) => {
  const { onClose } = props;
  const classes = useStyles();
  const [libraryPath, setLibraryPath] = useState(
    localStorage.getItem('libraryPath')
    || path.resolve(process.env.HOME, 'Bibly Library'),
  );
  const [pathError, setPathError] = useState(null);
  // Update error every time libraryPath changes
  useEffect(() => {
    fs.lstat(libraryPath, (err, fileStats) => {
      if (err) {
        setPathError('Invalid Directory');
      } else if (!fileStats.isDirectory()) {
        setPathError('Path is not a directory');
      } else {
        setPathError(null);
      }
    });
  }, [libraryPath]);

  return (
    <div className={classes.container}>
      <TextField
        value={libraryPath}
        onChange={(event) => {
          setLibraryPath(event.target.value);
        }}
        className={classes.libraryPath}
        variant="outlined"
        color="primary"
        label="Library Path"
        error={!!pathError}
        helperText={pathError}
      />

      <Button
        variant="contained"
        color="primary"
        className={classes.folderButton}
        onClick={() => {
          const selection = dialog.showOpenDialog({
            properties: ['openDirectory'],
          });
          if (selection) {
            const [filePath] = selection;
            setLibraryPath(filePath);
            localStorage.setItem('libraryPath', filePath);
            if (typeof onClose === 'function') onClose();
          }
        }}
      >
        <FolderOpenIcon />
      </Button>

      <Button
        variant="outlined"
        color="primary"
        className={classes.useLibrary}
        disabled={!!pathError}
        onClick={() => {
          if (pathError) return;
          localStorage.setItem('libraryPath', libraryPath);
          if (typeof onClose === 'function') onClose();
        }}
      >
        Use Library
      </Button>
    </div>

  );
};

LocalLibrary.propTypes = {
  onClose: PropTypes.func,
};
LocalLibrary.defaultProps = {
  onClose: null,
};

export default LocalLibrary;
