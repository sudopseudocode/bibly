import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
  console.log('Test');

  return (
    <div>
      <h1>Hello world</h1>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('#app'));
