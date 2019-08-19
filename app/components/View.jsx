import React, { useState, useEffect, useContext } from 'react';
import ViewContext from '../contexts/ViewContext';
import ListView from './Views/ListView';
import GridView from './Views/GridView';
import SettingsView from './Views/Settings/SettingsView';
import getAssets from '../utils/getAssets';
import getMetadata from '../utils/getMetadata';

const View = () => {
  const { view, viewSettings } = useContext(ViewContext);
  const [allAssets, setAssets] = useState({
    epub: [],
    mobi: [],
    pdf: [],
  });
  const libraryPath = localStorage.getItem('libraryPath');
  useEffect(() => (
    // Self-invoking function to use async inside useEffect hook
    async () => {
      const bookFiles = await getAssets(libraryPath);
      if (bookFiles) {
        setAssets(bookFiles);
        // Just to keep track of efficiency
        // This is pretty slow with a lot of files...
        const startTime = Date.now();
        const allMetadata = await Promise.all(
          bookFiles.epub.map(book => getMetadata(book)),
        );
        const totalTime = Date.now() - startTime;
        console.log(totalTime, allMetadata);
      }
    }
  )(),
  [libraryPath]);
  const { epub: data } = allAssets;

  if (viewSettings) {
    return <SettingsView />;
  }
  if (view === 'list') {
    return <ListView data={data} />;
  }
  return <GridView data={data} />;
};

export default View;
