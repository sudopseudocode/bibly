import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import WelcomeDialog from '../components/WelcomeDialog';
import getAssets from '../utils/getAssets';
import getMetadata from '../utils/getMetadata';
import db from './db';

const DataContext = React.createContext();

export const DataProvider = (props) => {
  const { children } = props;
  const [showWelcome, setWelcome] = useState(false);
  const [state, setState] = useState({
    loading: false,
    books: [],
  });
  const [filePaths, setPaths] = useState([]);
  // TODO track libraryPath changes with onStorage event?
  const libraryPath = localStorage.getItem('libraryPath');

  // Update filePaths whenever libraryPath changes
  useEffect(() => {
    if (libraryPath) {
      // Get all available epub files
      getAssets(libraryPath).then((bookFiles) => {
        setPaths(bookFiles.epub);
      });
    } else {
      // Show welcome screen to set libraryPath
      setWelcome(true);
    }
  }, [libraryPath]);

  // Compare filePaths whenever they change
  useEffect(() => {
    db.table('books').toArray().then((books) => {
      // Init state
      setState({ books });

      const booksToAdd = filePaths.filter((filePath) => {
        const foundMatch = books.some(book => (
          book.epubFile === filePath
        ));
        return !foundMatch;
      });

      const metadataToAdd = booksToAdd.map(filePath => getMetadata(filePath));
      return Promise.all(metadataToAdd);
    }).then((metadataToAdd) => {
      const recordsToAdd = metadataToAdd.map(record => db.table('books').add(record));
      return Promise.all(recordsToAdd);
    })
      .then(() => {
        db.table('books').toArray().then((books) => {
          setState({ books });
        });
      });
  }, [filePaths]);

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
