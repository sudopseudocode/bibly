import React, { useState, useEffect } from 'react';
import ListView from './ListView';
import getAssets from '../utils/getAssets';
import Header from './Header';
import getMetadata from '../utils/getMetadata';

const MainWindow = () => {
  const [allAssets, updateAssets] = useState({
    epub: [],
    mobi: [],
    pdf: [],
  });
  useEffect(() => {
    getAssets()
      .then(newAssets => updateAssets(newAssets))
      .catch(err => console.error(err));
  }, []);
  const { epub } = allAssets;
  getMetadata(epub[0]);

  return (
    <React.Fragment>
      <Header />

      <ListView
        books={epub || []}
      />
    </React.Fragment>
  );
};

export default MainWindow;
