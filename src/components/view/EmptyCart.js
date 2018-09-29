import React from 'react';
import { Icon } from '../view';

export class EmptyCart extends React.PureComponent {
  render() {
    return (
      <div className="empty-cart">
        <Icon>shopping_cart</Icon>
        <p className="mg-b-100 text-grey">Items added to your cart will appear here</p>
        <p className="text-brand-secondary">
          Select the Scan button below to start shopping
        </p>
      </div>
    );
  }
}
