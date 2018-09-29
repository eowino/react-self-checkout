import React, { Component } from 'react';
import { ProductScan } from './modules';

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="phone-shell">
          {/* <Cart /> */}
          <ProductScan />
        </div>
      </div>
    );
  }
}

export default App;
