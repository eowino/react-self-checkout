import React from 'react';
import { AppBar, BottomNav } from '../components/view';

export class ProductScan extends React.PureComponent {
  get appTitle() {
    return 'Product Scan';
  }

  render() {
    return (
      <React.Fragment>
        <AppBar title={this.appTitle} />
        <div className="bottom-area">
          <BottomNav />
        </div>
      </React.Fragment>
    );
  }
}
