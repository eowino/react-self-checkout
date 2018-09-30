import React from 'react';
import { AppBar, Body } from '../components/view';

export class CheckoutSecurePay extends React.PureComponent {
  render() {
    return (
      <React.Fragment>
        <AppBar title={this.props.title} />
        <Body>
          <div>Checkout Secure Pay</div>
        </Body>
      </React.Fragment>
    );
  }
}

CheckoutSecurePay.defaultProps = {
  title: 'Checkout - Secure Pay'
};
