import React, { useContext, useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/styles';
import ListView from './Views/ListView/ListView';
import GridView from './Views/GridView/GridView';
import SettingsView from './Views/Settings/SettingsView';
import Header from './Header/Header';
import SideBar from './SideBar/SideBar';
import WelcomeDialog from './WelcomeDialog';
import StatusBar from './StatusBar/StatusBar';
import ViewContext from '../contexts/ViewContext';
import DataContext from '../contexts/DataContext';

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
  const { libraryPath, books: data } = useContext(DataContext);
  const [showWelcome, setWelcome] = useState(false);
  const classes = useStyles();

  // Open Welcome if libraryPath was never set
  useEffect(() => {
    if (!libraryPath) {
      // Show welcome screen to set libraryPath
      setWelcome(true);
    }
  }, [libraryPath]);

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
