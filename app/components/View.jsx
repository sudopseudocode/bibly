import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import ViewContext from '../contexts/ViewContext';
import ListView from './Views/ListView';
import GridView from './Views/GridView';
import SettingsView from './Views/Settings/SettingsView';

const View = (props) => {
  const { data } = props;
  const { view, viewSettings } = useContext(ViewContext);

  if (viewSettings) {
    return <SettingsView />;
  }
  if (view === 'list') {
    return <ListView data={data} />;
  }
  return <GridView data={data} />;
};

View.propTypes = {
  data: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default View;
