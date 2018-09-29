import React from 'react';
import { Card, CardBody, CardFooter } from './Card';
import { css } from '../../../misc';
import { StarRating, Icon } from '../index';
import { Button } from '../../controls';

export class ProductScanCard extends React.PureComponent {
  render() {
    const {
      price,
      productTitle,
      discount,
      color,
      totalStars,
      rating
    } = this.props;

    return (
      <Card isDialog className="card--product-scan">
        <CardBody>
          <div className="card__product-info">
            <div className="card__image" />
            <div className="card__details">
              <p>{productTitle}</p>
              <p className="card__price">
                <strong className={css(discount && 'mg-r-10')}>£{price}</strong>
                {discount && (
                  <span className="strike-through">was {discount}</span>
                )}
              </p>
              {color && (
                <p>
                  <span className="bold">Color: </span>
                  {color}
                </p>
              )}
              {!isNaN(rating) && (
                <p>
                  <StarRating total={totalStars} rating={rating} />
                </p>
              )}
            </div>
          </div>
          <div className="text-right">
            <Button className="btn--flat">View Product</Button>
          </div>
        </CardBody>
        <CardFooter>
          <Button className="btn--flat btn--icon">
            <Icon>close</Icon> Cancel
          </Button>
          <Button className="btn--flat btn--icon">
            <Icon>shopping_cart</Icon> Add to Cart
          </Button>
        </CardFooter>
      </Card>
    );
  }
}

ProductScanCard.defaultProps = {
  productTitle: 'Paddington Tailored Fit Suit Jacket',
  price: '60.00',
  discount: '75.00',
  color: 'Navy',
  rating: 4.5,
  totalStars: 5,
  imgUrl: ''
};
