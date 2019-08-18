import React, { useState } from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import General from './General';
import Theme from './Theme';

// const useStyles = makeStyles(theme => ({
//   container: {
//     margin: theme.spacing(0, 4),
//   },
// }));

const SettingsView = () => {
  const [step, setStep] = useState(0);

  let CurrentView = null;
  switch (step) {
    case 0:
      CurrentView = General;
      break;
    case 1:
      break;
    case 2:
      CurrentView = Theme;
      break;
    default:
      CurrentView = General;
  }

  return (
    <React.Fragment>
      <Tabs
        value={step}
        indicatorColor="primary"
        textColor="primary"
        onChange={(event, newStep) => setStep(newStep)}
      >
        <Tab label="General" />
        <Tab label="Conversion" disabled />
        <Tab label="Theme" />
      </Tabs>

      <CurrentView />
    </React.Fragment>
  );
};

export default SettingsView;
