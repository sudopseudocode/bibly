import React, { useState, useEffect, useContext } from 'react';
import ViewContext from '../contexts/ViewContext';
import ListView from './Views/ListView';
import GridView from './Views/GridView';
import SettingsView from './Views/Settings/SettingsView';
import initLibrary from '../utils/initLibrary';

const View = () => {
  const { view, viewSettings } = useContext(ViewContext);
  const [allAssets, setAssets] = useState({
    epub: [],
    mobi: [],
    pdf: [],
  });
  const libraryPath = localStorage.getItem('libraryPath');
  useEffect(() => {
    initLibrary(libraryPath).then((books) => {
      setAssets(books);
    });
  }, [libraryPath]);
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
