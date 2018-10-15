import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import {
  CheckoutPaymentDetails,
  Cart,
  ProductScan,
  CheckoutSecurePay,
  PurchaseConfirmation,
  Scanner,
  ProductDetail
} from './modules';

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="phone-shell">
          <Switch>
            <Route exact path="/" component={Cart} />
            <Route path="/product-scan" component={ProductScan} />
            <Route path="/scan" component={Scanner} />
            <Route path="/pay" component={CheckoutSecurePay} />
            <Route path="/confirmation" component={PurchaseConfirmation} />
            <Route path="/payment-details" component={CheckoutPaymentDetails} />
            <Route path="/product" component={ProductDetail} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
