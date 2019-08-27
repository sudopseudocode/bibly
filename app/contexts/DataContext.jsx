import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import initLibrary from '../utils/initLibrary';

const DataContext = React.createContext();

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
    }
  };

  // Update libraryPath state on localStorage change
  // This only works when changed from another window/tab
  useEffect(() => {
    const updateLibraryPath = () => {
      setState({ libraryPath: localStorage.getItem('libraryPath') });
    };
    window.addEventListener('storage', updateLibraryPath);

    // Clean up side effects
    return () => window.removeEventListener('storage', updateLibraryPath);
  }, []);

  // Reinit Library whenever libraryPath changes
  const { libraryPath } = state;
  useEffect(() => {
    if (libraryPath) {
      // Init Library
      initLibrary(libraryPath, setState);
    }
  }, [libraryPath]);

  return (
    <DataContext.Provider
      value={{
        ...state,
        dispatch: setState,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

DataProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]).isRequired,
};

export default DataContext;
