import React, { Component } from 'react';
import { AppBar, BottomNav, PayBar, EmptyCart } from './components/view/index';

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="phone-shell">
          <AppBar />
          <EmptyCart />
          <div className="bottom-area">
            <PayBar />
            <BottomNav />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
