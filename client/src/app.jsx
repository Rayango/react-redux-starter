import React from 'react';
import ReactDOM from'react-dom';
require('./css/app.css');

function Hello(props) {
  return <h1> hello </h1>;
}

ReactDOM.render(<Hello />, document.getElementById('app'));