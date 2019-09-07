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
  defaultWidth: 200,
});

const GridView = (props) => {
  const { data } = props;
  const booksPerRow = 4;
  const cellRenderer = ({ key, style, columnIndex, rowIndex, parent }) => {
    const startIndex = rowIndex * booksPerRow;
    const book = data[startIndex + columnIndex];
    if (!book) return null;

    return (
      <CellMeasurer
        cache={cache}
        key={key}
        overscanRowCount={10}
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
    <AutoSizer>
      {({ height, width }) => (
        <Grid
          style={{ overflow: 'auto' }}
          cellRenderer={cellRenderer}
          columnCount={booksPerRow}
          columnWidth={cache.columnWidth}
          rowCount={Math.ceil(data.length / booksPerRow)}
          rowHeight={cache.rowHeight}
          height={height}
          width={width}
        />
      )}
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
