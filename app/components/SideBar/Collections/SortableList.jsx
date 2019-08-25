import React from 'react';
import { SortableContainer, SortableElement } from 'react-sortable-hoc';
import CollectionButton from './CollectionButton';

const SortableItem = SortableElement(({ value }) => {
  const { label, onRename, onDelete } = value;

  return (
    <CollectionButton
      label={label}
      onRename={onRename}
      onDelete={onDelete}
    />
  );
});

const SortableList = SortableContainer(({ items }) => (
  <div>
    {items.map((value, index) => (
      <SortableItem
        key={value.id}
        index={index}
        value={value}
      />
    ))}
  </div>
));

export default SortableList;
