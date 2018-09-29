import React from 'react';
import {
  AppBar,
  BottomNav,
  PayBar,
  EmptyCart,
  CartWithProducts
} from '../components/view';

export class Cart extends React.PureComponent {
  render() {
    return (
      <React.Fragment>
        <AppBar title={this.props.title} />
        {this.props.products.length < 1 ? <EmptyCart /> : <CartWithProducts />}
        <div className="bottom-area">
          <PayBar
            payDisabled={this.props.isPayDisabled}
            price={this.props.price}
          />
          <BottomNav />
        </div>
      </React.Fragment>
    );
  }
}

Cart.defaultProps = {
  title: 'Cart',
  isPayDisabled: true,
  price: 0,
  products: [{}]
};
