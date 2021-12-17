import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import { render } from '@testing-library/react';
import Routes from './Routes';

class App extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <Routes />
    );
  }
}

export default App;
