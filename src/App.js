import React, { Component } from 'react';
import { 
  // ProductScan, 
  // Cart,
  // CheckoutSecurePay,
  // PurchaseConfirmation,
  // Scanner,
  CheckoutPaymentDetails
} from './modules';

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="phone-shell">
          {/* <ProductScan /> */}
          {/* <Cart /> */}
          {/* <CheckoutSecurePay /> */}
          {/* <PurchaseConfirmation /> */}
          {/* <Scanner /> */}
          <CheckoutPaymentDetails />
        </div>
      </div>
    );
  }
}

export default App;
