import React, { useState } from 'react';
import { makeStyles } from '@material-ui/styles';
import generateId from 'uuid/v4';
import CollectionButton from './CollectionButton';
import NewCollection from './NewCollection';

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginTop: theme.spacing(4),
  },
}));

const Collections = () => {
  const classes = useStyles();
  // Read localStorage and initialize
  let initCollections;
  try {
    initCollections = JSON.parse(localStorage.getItem('collections'));
  } catch (err) {
    initCollections = {};
  }
  const [collections, setCollections] = useState(initCollections);

  return (
    <div className={classes.container}>
      {Object.values(collections).map(({ id, label }) => (
        <CollectionButton
          key={id}
          label={label}
          onRename={(newLabel) => {
            const newCollections = {
              ...collections,
              [id]: {
                id,
                label: newLabel,
              },
            };
            setCollections(newCollections);
            localStorage.setItem(
              'collections',
              JSON.stringify(newCollections),
            );
          }}
          onDelete={() => {
            const newCollections = { ...collections };
            delete newCollections[id];
            setCollections(newCollections);
            localStorage.setItem(
              'collections',
              JSON.stringify(newCollections),
            );
          }}
        />
      ))}
      <NewCollection
        onSubmit={(newCollection) => {
          const id = generateId();
          const newCollections = {
            ...collections,
            [id]: {
              id,
              label: newCollection,
            },
          };
          setCollections(newCollections);
          localStorage.setItem(
            'collections',
            JSON.stringify(newCollections),
          );
        }}
      />
    </div>
  );
};

Collections.propTypes = {

};

export default Collections;
