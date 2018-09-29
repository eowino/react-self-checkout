import React from 'react';
import { AppBar, BottomNav, ProductScanCard, Body } from '../components/view';

export class ProductScan extends React.PureComponent {
  render() {
    return (
      <React.Fragment>
        <AppBar title={this.props.title} />
        <Body>
          <ProductScanCard />
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
