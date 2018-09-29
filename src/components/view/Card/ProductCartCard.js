import React from 'react';
import { Card, CardBody } from './Card';

export class ProductCartCard extends React.PureComponent {
  render() {
    const {
      price,
      productTitle,
      discount,
      quantity
    } = this.props;

    return (
      <Card className="card--product-cart">
        <CardBody>
          <div className="card__product-info">
            <div className="card__image" />
            <div className="card__details">
              <p>{productTitle}</p>
              <p className="card__price"></p>
            </div>
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
  color: 'Navy',
  rating: 4.5,
  totalStars: 5,
  imgUrl: ''
};
