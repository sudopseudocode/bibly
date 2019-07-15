import React from 'react';
import PropTypes from 'prop-types';

const ListView = (props) => {
  const { books } = props;

  return (
    <div>
      {books.map(book => (
        <span key={book}>{book}</span>
      ))}
    </div>
  );
};

ListView.propTypes = {
  books: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default ListView;
