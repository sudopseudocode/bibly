import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/styles';
import ListView from './Views/ListView/ListView';
import GridView from './Views/GridView/GridView';
import SettingsView from './Views/Settings/SettingsView';
import Header from './Header/Header';
import SideBar from './SideBar/SideBar';
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
  const { books: data } = useContext(DataContext);
  const classes = useStyles();

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
