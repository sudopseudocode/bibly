import React, { useState } from 'react';
import PropTypes from 'prop-types';

const ViewContext = React.createContext();
const { Provider } = ViewContext;

export const ViewProvider = (props) => {
  const { children } = props;
  const [state, setState] = useState({
    view: 'grid',
    collection: '',
    viewSettings: false,
  });

  return (
    <Provider
      value={{
        ...state,
        dispatch: (newState) => setState({ ...state, ...newState }),
      }}
    >
      {children}
    </Provider>
  );
};

ViewProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]).isRequired,
};

export default ViewContext;
