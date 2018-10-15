import React from 'react';
import { Button } from '../controls/Button';
import { NavLink } from 'react-router-dom';

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
          {payDisabled ? (
            <Button
              className="btn--raised btn--white pay-bar__btn"
              disabled={payDisabled}
            >
              Pay
            </Button>
          ) : (
            <NavLink
              to={"/payment-details"}
              className="btn btn--raised btn--white pay-bar__btn"
            >
              Pay
            </NavLink>
          )}
        </div>
      </div>
    );
  }
}
