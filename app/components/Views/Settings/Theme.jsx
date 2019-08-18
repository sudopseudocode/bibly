import React from 'react';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
  container: {
    margin: theme.spacing(0, 2),
  },
}));

const Theme = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      Theme page!
    </div>
  );
};

export default Theme;
