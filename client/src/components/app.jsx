import React from 'react';
import ReactDOM from'react-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { toggleText } from '../actions/appActions.js';

require('../css/app.css');

class App extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.toggleText(this.props.text);
  }

  render() {
    return (
      <div className="App">
        <h1> Starter </h1>
        <button onClick={this.handleClick}> Click Me </button>
        <span> {this.props.text ? 'toggled' : 'default'} </span>
      </div>  
    );
  }
}

const mapStateToProps = (state) => ({
  text: state.appReducer.text
});

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ toggleText }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(App);