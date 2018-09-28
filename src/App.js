import React, { Component } from 'react';
import AppBar from './components/AppBar/AppBar';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="phone-shell">
          <AppBar />
        </div>
      </div>
    );
  }
}

export default App;
