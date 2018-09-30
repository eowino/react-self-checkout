import React from 'react';
import { Card, CardBody } from './Card';
import { OrderSummary } from '..';

export class OrderSummaryCard extends React.PureComponent {
  render() {
    return (
      <Card className="card--order-summary">
        <CardBody>
            <h2 className="card__heading uppercase">Order Summary</h2>
            <OrderSummary />
        </CardBody>
      </Card>
    );
  }
}
