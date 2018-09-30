import React from 'react';
import { css } from '../../misc';

export class OrderSummary extends React.PureComponent {
  render() {
    const { subtotal, discount, className } = this.props;

    return (
      <div className={css('order-summary', className)}>
        <div className="flex-between">
          <p>Subtotal</p>
          <p>£{subtotal}</p>
        </div>
        <div className="flex-between">
          <p>Discount</p>
          <p>£{discount}</p>
        </div>
        <div className="flex-between">
          <p>
            <strong>Total</strong>
          </p>
          <p>
            <strong>£{(subtotal - discount).toFixed(2)}</strong>
          </p>
        </div>
      </div>
    );
  }
}

OrderSummary.defaultProps = {
  subtotal: '60.00',
  discount: '3.00'
};
