import React, { useState, useEffect } from 'react';
import ListView from './ListView';
import getAssets from '../utils/getAssets';

const Library = () => {
  const [allAssets, updateAssets] = useState([]);
  useEffect(() => {
    getAssets()
      .then(newAssets => updateAssets(newAssets))
      .catch(err => console.error(err));
  }, []);
  const epubs = allAssets.filter(book => /epub$/.test(book));

  return (
    <div>
      <h1>Hi</h1>
      <ListView data={epubs} />
    </div>
  );
};

export default Library;
