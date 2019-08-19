import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Dexie from 'dexie';

const db = new Dexie('bibly_local');
db.version(1).stores({
  books: '++id, title, *author, *collections, *tags',
});

const DataContext = React.createContext();

export const Provider = (props) => {
  const { children } = props;
  const [state, setState] = useState({
    settings: {},
    books: [],
  });

  return (
    <DataContext.Provider
      value={{
        ...state,
        dispatch: newState => setState({ ...state, ...newState }),
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

Provider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]).isRequired,
};

export default DataContext;
