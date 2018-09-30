import React from 'react';
import { AppBar, Body, OrderSummaryCard } from '../components/view';
import { Button } from '../components';

export class CheckoutSecurePay extends React.PureComponent {
  render() {
    return (
      <React.Fragment>
        <AppBar title={this.props.title} />
        <Body>
          <OrderSummaryCard />
          <p className="uppercase text-right">
            Payment Card: **** **** **** {this.props.cardLastThree}
          </p>
          <Button primary fullWidth raised className="position-page-bottom">
            Secure Pay
          </Button>
        </Body>
      </React.Fragment>
    );
  }
}

CheckoutSecurePay.defaultProps = {
  title: 'Checkout - Secure Pay',
  cardLastThree: 1234
};
