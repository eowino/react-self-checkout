import React from 'react';
import { Card, CardBody } from './Card';

export class OrderSummaryCard extends React.PureComponent {
  render() {
    const { subtotal, discount } = this.props;

    return (
      <Card className="card--order-summary">
        <CardBody>
            <h2 className="card__heading uppercase">Order Summary</h2>
            <div className="flex-between">
                <p>Subtotal</p>
                <p>£{subtotal}</p>
            </div>
            <div className="flex-between">
                <p>Discount</p>
                <p>£{discount}</p>
            </div>
            <div className="flex-between">
                <p><strong>Total</strong></p>
                <p><strong>£{(subtotal - discount).toFixed(2)}</strong></p>
            </div>
        </CardBody>
      </Card>
    );
  }
}

OrderSummaryCard.defaultProps = {
  subtotal: '60.00',
  discount: '3.00',
};
