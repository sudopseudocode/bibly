import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import {
  AutoSizer,
  CellMeasurerCache,
  CellMeasurer,
	List,
} from 'react-virtualized';
import GridItem from './GridItem';

const useStyles = makeStyles({
  row: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-end',
  },
});

const cache = new CellMeasurerCache({
  defaultHeight: 200,
  fixedWidth: true
});

const GridView = (props) => {
  const { data } = props;
  const classes = useStyles();
  const booksPerRow = 4;
  const rowRenderer = ({ key, style, index, parent }) => {
    const startIndex = index * booksPerRow;
    const books = data.slice(
      startIndex,
      (startIndex) + booksPerRow,
    );
    return (
      <CellMeasurer
        cache={cache}
        columnIndex={0}
        key={key}
        overscanRowCount={10}
        parent={parent}
        rowIndex={index}
      >
        <div key={key} style={style} className={classes.row}>
          {books.map(book => (
            <GridItem
              key={book.id}
              title={book.title}
              author={book.author}
              fileFormat="epub"
              bookCover={book.bookCover}
            />
          ))}
        </div>
      </CellMeasurer>
    );
  };
  rowRenderer.propTypes = {
    key: PropTypes.string.isRequired,
    style: PropTypes.shape({}).isRequired,
    index: PropTypes.number.isRequired,
    parent: PropTypes.element.isRequired,
  };

  return (
    <AutoSizer>
      {({ height, width }) => {
          return (
            <List
              style={{ overflow: 'auto' }}
              height={height}
              width={width}
              rowCount={data.length / booksPerRow}
              rowHeight={cache.rowHeight}
              rowRenderer={rowRenderer}
            />
          );
        }}
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
