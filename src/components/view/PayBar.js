import React from 'react';
import { Button } from '../controls/Button';

export class PayBar extends React.PureComponent {
  render() {
    return (
      <div className="bar pay-bar">
        <div>
          <p className="pay-bar__total-price">Total Price</p>
          <p className="pay-bar__price">£0</p>
        </div>
        <div className="align-center">
          <Button className="btn-raised btn-white" disabled>Pay</Button>
        </div>
      </div>
    );
  }
}
