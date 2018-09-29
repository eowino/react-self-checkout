import React from 'react';
import { Button } from '../controls/Button';

export class PayBar extends React.PureComponent {
  render() {
    const { payDisabled, price } = this.props;

    return (
      <div className="bar pay-bar">
        <div>
          <p className="pay-bar__total-price">Total Price</p>
          <p className="pay-bar__price">£{price}</p>
        </div>
        <div className="align-center">
          <Button className="btn-raised btn-white pay-bar__btn" disabled={payDisabled}>Pay</Button>
        </div>
      </div>
    );
  }
}
