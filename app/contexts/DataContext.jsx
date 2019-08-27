import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import WelcomeDialog from '../components/WelcomeDialog';
import initLibrary from '../utils/initLibrary';

const DataContext = React.createContext();

export const DataProvider = (props) => {
  const { children } = props;
  const [showWelcome, setWelcome] = useState(false);
  const [state, setWholeState] = useState({
    loading: false,
    updating: false,
    books: [],
  });
  const setState = newState => setWholeState({ ...state, ...newState });
  // TODO track libraryPath changes with onStorage event?
  const libraryPath = localStorage.getItem('libraryPath');

  // Update filePaths whenever libraryPath changes
  // Compare filePaths whenever they change
  useEffect(() => {
    if (libraryPath) {
      // Init Library
      initLibrary(libraryPath, setState);
    } else {
      // Show welcome screen to set libraryPath
      setWelcome(true);
    }
  }, [libraryPath]);

  return (
    <DataContext.Provider
      value={{
        ...state,
        dispatch: setState,
      }}
    >
      <WelcomeDialog
        open={showWelcome}
        onClose={() => setWelcome(false)}
      />

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
