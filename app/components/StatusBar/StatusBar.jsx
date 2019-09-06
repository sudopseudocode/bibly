import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { LinearProgress } from '@material-ui/core';
import Status from './Status';
import DataContext from '../../contexts/DataContext';

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: '#FAF3FF',
    borderTop: '1px solid #F2E0FF',
    display: 'flex',
    alignItems: 'center',
    height: ({ height }) => height,
    position: 'sticky',
    bottom: 0,
    padding: theme.spacing(0, 2),
  },
  updateBar: {
    marginTop: theme.spacing(0.5),
    height: theme.spacing(1),
  },
}));

const StatusBar = (props) => {
  const { data, height } = props;
  const { loading, updateProgress } = useContext(DataContext);
  const classes = useStyles({ height });

  return (
    <div className={classes.container}>
      {updateProgress === null
        ? (
          <Status
            isLoading={loading}
            message={loading
              ? 'Loading Library...'
              : `Total Books: ${data.length}`}
          />
        )
        : (
          <div className={classes.updating}>
            <Status message="Updating Library" />
            <LinearProgress
              classes={{ root: classes.updateBar }}
              variant="determinate"
              value={updateProgress}
            />
          </div>
        )}
    </div>
  );
};

StatusBar.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.object,
  ).isRequired,
  height: PropTypes.number.isRequired,
};

export default StatusBar;
