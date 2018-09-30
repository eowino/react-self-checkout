import React from 'react';
import { Card, CardBody } from './Card';
import { Button } from '../../controls';
import { Icon } from '../Icon';

export class ProductCartCard extends React.PureComponent {
  render() {
    const { price, productTitle, discount, quantity, hasOptions } = this.props;

    return (
      <Card className="card--product-cart">
        <CardBody>
          <div className="card__product-info">
            <div className="card__image" />
            <div className="card__details">
              <p>{productTitle}</p>
              <p className="card__price">
                <strong>£{price}</strong>
              </p>
              {discount && (
                <p>
                  <span className="strike-through">was {discount}</span>
                </p>
              )}
              <p>Qty: {quantity}</p>
            </div>
            {hasOptions && (
              <Button noDefault className="card--product-cart__options">
                <Icon>more_vert</Icon>
              </Button>
            )}
          </div>
        </CardBody>
      </Card>
    );
  }
}

ProductCartCard.defaultProps = {
  productTitle: 'Paddington Tailored Fit Suit Jacket',
  price: '60.00',
  discount: '75.00',
  quantity: 1,
  imgUrl: '',
  hasOptions: true
};
