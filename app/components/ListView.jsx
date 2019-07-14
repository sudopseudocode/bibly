import React from 'react';
import PropTypes from 'prop-types';

const ListView = props => {
  const { data } = props;

  return (
    <div>
      {data.map(book => (
        <span key={book}>{book}</span>
      ))}
    </div>
  );
};

ListView.propTypes = {
  data: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default ListView;
