import React from 'react';
import { AppBar, Body } from '../components/view';

export class CheckoutPaymentDetails extends React.PureComponent {
  render() {
    return (
      <React.Fragment>
        <AppBar title={this.props.title} />
        <Body>
          <div>Checkout Payment Details</div>
        </Body>
      </React.Fragment>
    );
  }
}

CheckoutPaymentDetails.defaultProps = {
  title: 'Checkout - Payment Details'
};
