import React from 'react';
import { AppBar, BottomNav, ProductScanCard, Body } from '../components/view';
import { getProduct, fetchImage } from '../misc';

export class ProductScan extends React.Component {
  state = {
    product: null,
  };

  componentDidMount() {
    const barcode =
      this.props.location.state && this.props.location.state.barcode;
    if (barcode) {
      getProduct(barcode).then(product => {
        if (product) {
          this.setState({ product }, () => {
            fetchImage(product.productBrand || product.productName).then(
              image => {
                this.setState({
                  product: {
                    ...this.state.product,
                    ...image,
                  }
                });
              }
            );
          });
        }
      });
    }
  }

  render() {
    return (
      <React.Fragment>
        <AppBar title={this.props.title} />
        <Body nav>
          <ProductScanCard product={this.state.product} />
        </Body>
        <div className="bottom-area">
          <BottomNav />
        </div>
      </React.Fragment>
    );
  }
}

ProductScan.defaultProps = {
  title: 'Product Scan'
};
