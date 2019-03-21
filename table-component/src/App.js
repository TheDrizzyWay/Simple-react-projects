import React, { Component } from 'react';
import Table from './containers/Table';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hello React</h1>
        <Table />
      </div>
    );
  }
}

export default App;
