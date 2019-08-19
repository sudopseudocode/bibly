import React from 'react';
import PropTypes from 'prop-types';
import SearchControls from './SearchControls';
import ViewControls from './ViewControls';

const Header = (props) => {
  const { topHeight } = props;

  return (
    <React.Fragment>
      <SearchControls topHeight={topHeight} />
      <ViewControls />
    </React.Fragment>
  );
};

Header.propTypes = {
  topHeight: PropTypes.number.isRequired,
};

export default Header;
