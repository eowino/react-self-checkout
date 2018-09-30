// @ts-check
import React from 'react';
import {
  AppBar,
  Body,
  ProductCartCard,
  OrderSummary
} from '../components/view';
import { Button, SocialButton } from '../components/controls';

export class PurchaseConfirmation extends React.PureComponent {
  render() {
    const { hasOptions } = this.props;
    return (
      <React.Fragment>
        <AppBar title={this.props.title} />
        <Body>
          <div className="mg-b-30">
            <ProductCartCard hasOptions={hasOptions} />
            <ProductCartCard hasOptions={hasOptions} />
          </div>
          <OrderSummary className="order-summary--confirmation mg-b-30"/>
          <p className="clear-both mg-b-10">Share what you bought with your friends!</p>
          <SocialButton facebook className="mg-b-30"/>
          <Button raised fullWidth className="btn--white">Continue Shopping</Button>
        </Body>
      </React.Fragment>
    );
  }
}

PurchaseConfirmation.defaultProps = {
  title: 'Purchase Confirmation',
  hasOptions: false,
  products: []
};
