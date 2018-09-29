import React, { Component } from 'react';
import { AppBar, BottomNav } from './components/view/index'; 

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="phone-shell">
          <AppBar />
          <BottomNav />
        </div>
      </div>
    );
  }
}

export default App;
