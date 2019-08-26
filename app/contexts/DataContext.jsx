import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Dexie from 'dexie';
import WelcomeDialog from '../components/WelcomeDialog';
import getAssets from '../utils/getAssets';

const db = new Dexie('bibly_local');
db.version(1).stores({
  books: '++id, title, *author, *collections, *tags',
});

const DataContext = React.createContext();

export const DataProvider = (props) => {
  const { children } = props;
  const [showWelcome, setWelcome] = useState(false);
  const [state, setState] = useState({
    loading: false,
    books: [],
  });
  const libraryPath = localStorage.getItem('libraryPath');

  // This is run whenever libraryPath changes
  useEffect(() => {
    if (libraryPath) {
      // Get all available epub files
      getAssets(libraryPath).then((bookFiles) => {
        setState({ ...state, books: bookFiles.epub });
      });
      // TODO compare to DB and update as needed
    } else {
      // Show welcome screen to set libraryPath
      setWelcome(true);
    }
  }, [libraryPath]);

  return (
    <DataContext.Provider
      value={{
        ...state,
        dispatch: newState => setState({ ...state, ...newState }),
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
