import React, { useState } from 'react';
import PropTypes from 'prop-types';

const ViewContext = React.createContext();

export const ViewProvider = (props) => {
  const { children } = props;
  const [state, setState] = useState({
    view: 'grid',
    collection: '',
    viewSettings: false,
  });

  return (
    <ViewContext.Provider
      value={{
        ...state,
        dispatch: newState => setState({ ...state, ...newState }),
      }}
    >
      {children}
    </ViewContext.Provider>
  );
};

ViewProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]).isRequired,
};

export default ViewContext;
