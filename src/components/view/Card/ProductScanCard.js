import React from 'react';
import { Card, CardBody, CardFooter } from './Card';
import { css } from '../../../misc';
import { StarRating, Icon } from '../index';
import { Button } from '../../controls';
import { Link } from 'react-router-dom';

export class ProductScanCard extends React.PureComponent {
  get image() {
    const product = this.props.product;
    let styles = null;

    if (product && product.image) {
      styles = {
        backgroundImage: `url('${product.thumbnail ||
          product.image}')`
      };
    }
    return styles;
  }

  render() {
    const { price, discount, color, totalStars, rating, product } = this.props;

    const { productName, productBrand } = product || {};

    return (
      <Card isDialog className="card--product-scan">
        <CardBody>
          <div className="card__product-info">
            <div className="card__image" style={this.image} />
            <div className="card__details">
              {productName ? (
                <p>{productName}</p>
              ) : (
                <p className="placeholder" />
              )}
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
              {productBrand && (
                <p>
                  <span className="bold">Brand: </span>
                  {productBrand}
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
          <Link to="/scan" className="btn btn--flat btn--icon">
            <Icon>close</Icon> Cancel
          </Link>
          <Button className="btn--flat btn--icon">
            <Icon>shopping_cart</Icon> Add to Cart
          </Button>
        </CardFooter>
      </Card>
    );
  }
}

ProductScanCard.defaultProps = {
  price: '60.00',
  discount: '75.00',
  // color: 'Navy',
  rating: 4.5,
  totalStars: 5
};
