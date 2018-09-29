import React from 'react';
import { AppBar, BottomNav } from '../components/view';

export class ProductScan extends React.PureComponent {
  render() {
    return (
      <React.Fragment>
        <AppBar title={this.props.title} />
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
