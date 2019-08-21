import React, { useState, useEffect, useContext } from 'react';
import ViewContext from '../contexts/ViewContext';
import WelcomeDialog from './Views/WelcomeDialog';
import ListView from './Views/ListView';
import GridView from './Views/GridView';
import SettingsView from './Views/Settings/SettingsView';
import initLibrary from '../utils/initLibrary';

const View = () => {
  const { view, viewSettings } = useContext(ViewContext);
  const [showWelcome, setWelcome] = useState(false);
  const [allAssets, setAssets] = useState({
    epub: [],
    mobi: [],
    pdf: [],
  });
  const libraryPath = localStorage.getItem('libraryPath');

  // This is run whenever libraryPath changes
  useEffect(() => {
    if (libraryPath) {
      initLibrary(libraryPath).then((books) => {
        setAssets(books);
      });
    } else {
      // Show welcome screen
      setWelcome(true);
    }
  }, [libraryPath]);

  // Just a placeholder, since we only support epub anyways
  const { epub: data } = allAssets;

  // Chooses which component to render
  const renderView = () => {
    if (viewSettings) {
      return <SettingsView />;
    }
    if (view === 'list') {
      return <ListView data={data} />;
    }
    return <GridView data={data} />;
  };

  return (
    <React.Fragment>
      <WelcomeDialog
        open={showWelcome}
        onClose={() => setWelcome(false)}
      />
;

      {renderView()}
    </React.Fragment>
  );
};

export default View;
