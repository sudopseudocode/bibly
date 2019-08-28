import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
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
}));

const StatusBar = (props) => {
  const { data, height } = props;
  const { loading, updating } = useContext(DataContext);
  const classes = useStyles({ height });

  return (
    <div className={classes.container}>
      <Status
        isLoading={loading}
        message={loading
          ? 'Loading Library...'
          : `Total Books: ${data.length}`}
      />

      {updating && (
        <Status
          isLoading={updating}
          message="Updating Library"
        />
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
