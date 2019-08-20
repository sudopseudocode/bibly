import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import SearchControls from './SearchControls';
import ViewControls from './ViewControls';

const useStyles = makeStyles(theme => ({
  container: {
    position: 'sticky',
    top: 0,
    backgroundColor: theme.palette.background.default,
  },
}));

const Header = (props) => {
  const { topHeight } = props;
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <SearchControls topHeight={topHeight} />
      <ViewControls />
    </div>
  );
};

Header.propTypes = {
  topHeight: PropTypes.number.isRequired,
};

export default Header;
