import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import initLibrary from '../utils/initLibrary';
import db from './db';

const DataContext = React.createContext();
const { Provider } = DataContext;

export const DataProvider = (props) => {
  const { children } = props;
  // State used in the Provider
  const [state, setWholeState] = useState({
    libraryPath: localStorage.getItem('libraryPath'),
    loading: false,
    updating: false,
    books: [],
  });
  const setState = (newState) => {
    setWholeState({ ...state, ...newState });
    // Sync state changes with localStorage
    if (newState.libraryPath) {
      localStorage.setItem('libraryPath', newState.libraryPath);
      // Reset DB
      db.table('books').clear();
    }
  };

  // Reinit Library whenever libraryPath changes
  const { libraryPath } = state;
  useEffect(() => {
    if (libraryPath) {
      // Init Library
      initLibrary(libraryPath, setState);
    }
  }, [libraryPath]);

  return (
    <Provider
      value={{
        ...state,
        dispatch: setState,
      }}
    >
      {children}
    </Provider>
  );
};

DataProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]).isRequired,
};

export default DataContext;
