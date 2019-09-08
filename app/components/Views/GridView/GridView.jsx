import React from 'react';
import PropTypes from 'prop-types';
import {
  AutoSizer,
  CellMeasurerCache,
  CellMeasurer,
  Grid,
} from 'react-virtualized';
import GridItem from './GridItem';

const cache = new CellMeasurerCache({
  defaultHeight: 280,
  fixedWidth: true,
});

const GridView = (props) => {
  const { data } = props;

  const autoSizerChildren = ({ width, height }) => {
    const booksPerRow = width < 230 ? 1 : Math.floor(width / 230);
    const cellRenderer = ({ key, style, columnIndex, rowIndex, parent }) => {
      const startIndex = rowIndex * booksPerRow;
      const book = data[startIndex + columnIndex];
      if (!book) return null;

      return (
        <CellMeasurer
          cache={cache}
          key={key}
          parent={parent}
          rowIndex={rowIndex}
          columnIndex={columnIndex}
        >
          <div style={style}>
            <GridItem
              key={book.id}
              title={book.title}
              author={book.author}
              fileFormat="epub"
              bookCover={book.bookCover}
            />
          </div>
        </CellMeasurer>
      );
    };
    cellRenderer.propTypes = {
      key: PropTypes.string.isRequired,
      style: PropTypes.shape({}).isRequired,
      columnIndex: PropTypes.number.isRequired,
      rowIndex: PropTypes.number.isRequired,
      parent: PropTypes.element.isRequired,
    };

    return (
      <Grid
        style={{ overflow: 'auto' }}
        cellRenderer={cellRenderer}
        columnCount={booksPerRow}
        // We know this from width + margin in GridItem.jsx
        columnWidth={width / booksPerRow}
        rowCount={Math.ceil(data.length / booksPerRow)}
        rowHeight={cache.rowHeight}
        height={height}
        width={width}
      />
    );
  };
  autoSizerChildren.propTypes = {
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
  };

  return (
    <AutoSizer>
      {autoSizerChildren}
    </AutoSizer>
  );
};

GridView.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
      epubFile: PropTypes.string.isRequired,
      bookCover: PropTypes.string,
    }),
  ).isRequired,
};

export default GridView;
