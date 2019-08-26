import React, { useState, useEffect, useContext } from 'react';
import { makeStyles } from '@material-ui/styles';
import ViewContext from '../contexts/ViewContext';
import WelcomeDialog from './Views/WelcomeDialog';
import ListView from './Views/ListView/ListView';
import GridView from './Views/GridView/GridView';
import SettingsView from './Views/Settings/SettingsView';
import Header from './Header/Header';
import SideBar from './SideBar/SideBar';
import StatusBar from './StatusBar';
import getAssets from '../utils/getAssets';

const topHeight = 80;
const bottomHeight = 50;
const drawerWidth = 150;

const useStyles = makeStyles({
  container: {
    marginLeft: drawerWidth,
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flexGrow: 1,
  },
});

const View = () => {
  const { view, viewSettings } = useContext(ViewContext);
  const [showWelcome, setWelcome] = useState(false);
  const [allAssets, setAssets] = useState({
    epub: [],
    mobi: [],
    pdf: [],
  });
  const classes = useStyles();
  const libraryPath = localStorage.getItem('libraryPath');

  // This is run whenever libraryPath changes
  useEffect(() => {
    if (libraryPath) {
      getAssets(libraryPath).then((bookFiles) => {
        setAssets(bookFiles);
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
    <>
      <WelcomeDialog
        open={showWelcome}
        onClose={() => setWelcome(false)}
      />

      <SideBar
        drawerWidth={drawerWidth}
        topHeight={topHeight}
        bottomHeight={bottomHeight}
      />

      <div className={classes.container}>
        <Header topHeight={topHeight} />

        <div className={classes.content}>
          {renderView()}
        </div>

        <StatusBar
          data={data}
          height={bottomHeight}
        />
      </div>
    </>
  );
};

export default View;
