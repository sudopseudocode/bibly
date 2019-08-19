import React, { useState, useEffect, useContext } from 'react';
import ViewContext from '../contexts/ViewContext';
import ListView from './Views/ListView';
import GridView from './Views/GridView';
import SettingsView from './Views/Settings/SettingsView';
import getAssets from '../utils/getAssets';

const View = () => {
  const { view, viewSettings } = useContext(ViewContext);
  const [allAssets, setAssets] = useState({
    epub: [],
    mobi: [],
    pdf: [],
  });
  useEffect(() => {
    const libraryPath = localStorage.getItem('libraryPath');
    getAssets(libraryPath)
      .then((newAssets) => {
        if (newAssets) {
          setAssets(newAssets);
        }
      }).catch(err => console.error(err));
  }, []);
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
