import React, { Component } from 'react';
import { 
  // ProductScan, 
  // Cart,
  // CheckoutSecurePay,
  PurchaseConfirmation 
} from './modules';

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="phone-shell">
          {/* <Cart /> */}
          {/* <ProductScan /> */}
          {/* <CheckoutSecurePay /> */}
          <PurchaseConfirmation />
        </div>
      </div>
    );
  }
}

export default App;
