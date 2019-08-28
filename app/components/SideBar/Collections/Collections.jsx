import React, { useState } from 'react';
import { makeStyles } from '@material-ui/styles';
import generateId from 'uuid/v4';
import NewCollection from './NewCollection';
import SortableList from './SortableList';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginTop: theme.spacing(4),
  },
  sortable: {
    zIndex: theme.zIndex.drawer + 1,
  },
}));

const Collections = () => {
  const classes = useStyles();
  // Read localStorage and initialize
  let initCollections;
  let initOrder;
  try {
    initCollections = JSON.parse(localStorage.getItem('collections'));
    initOrder = JSON.parse(localStorage.getItem('collectionOrder'));
  } catch (err) {
    initCollections = {};
  }
  if (!Array.isArray(initOrder)) {
    initOrder = Object.keys(initCollections || {});
  }
  const [collections, setCollections] = useState(initCollections);
  const [collectionOrder, setOrder] = useState(initOrder);
  const sortableItems = collectionOrder.map((id) => ({
    ...collections[id],
    onRename: (newLabel) => {
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
    },
    onDelete: () => {
      const newCollections = { ...collections };
      delete newCollections[id];
      const newOrder = collectionOrder.filter((current) => current !== id);
      setOrder(newOrder);
      setCollections(newCollections);
      localStorage.setItem(
        'collections',
        JSON.stringify(newCollections),
      );
      localStorage.setItem(
        'collectionOrder',
        JSON.stringify(newOrder),
      );
    },
  }));

  return (
    <div className={classes.container}>
      <SortableList
        items={sortableItems}
        helperClass={classes.sortable}
        onSortEnd={({ oldIndex, newIndex }) => {
          const newOrder = [...collectionOrder];
          const temp = newOrder[newIndex];
          newOrder[newIndex] = collectionOrder[oldIndex];
          newOrder[oldIndex] = temp;
          setOrder(newOrder);
          localStorage.setItem('collectionOrder', JSON.stringify(newOrder));
        }}
      />

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
          const newOrder = [...collectionOrder, id];
          setOrder(newOrder);
          setCollections(newCollections);
          localStorage.setItem(
            'collections',
            JSON.stringify(newCollections),
          );
          localStorage.setItem(
            'collectionOrder',
            JSON.stringify(newOrder),
          );
        }}
      />
    </div>
  );
};

export default Collections;
