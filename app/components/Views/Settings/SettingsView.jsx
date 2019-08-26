import React, { useState } from 'react';
import { makeStyles } from '@material-ui/styles';
import {
  Tabs,
  Tab,
} from '@material-ui/core';
import General from './General';

const useStyles = makeStyles(theme => ({
  tab: {
    textTransform: 'none',
    padding: theme.spacing(0, 6),
  },
}));

const views = [
  { label: 'General', Component: General },
  { label: 'Conversion' },
  { label: 'Extras' },
];

const SettingsView = () => {
  const [step, setStep] = useState(0);
  const CurrentView = views[step].Component;
  const classes = useStyles();

  return (
    <React.Fragment>
      <Tabs
        value={step}
        indicatorColor="primary"
        textColor="primary"
        onChange={(event, newStep) => setStep(newStep)}
      >
        {views.map(({ label, Component }) => (
          <Tab
            key={label}
            className={classes.tab}
            label={label}
            disabled={!Component}
          />
        ))}
      </Tabs>

      <CurrentView />
    </React.Fragment>
  );
};

export default SettingsView;
