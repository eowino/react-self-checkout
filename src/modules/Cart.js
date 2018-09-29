import React from 'react';
import { AppBar, BottomNav, PayBar, EmptyCart } from '../components/view';

export class Cart extends React.PureComponent {
  get appTitle() {
    return 'Cart';
  }

  render() {
    return (
      <React.Fragment>
        <AppBar title={this.appTitle} />
        <EmptyCart />
        <div className="bottom-area">
          <PayBar />
          <BottomNav />
        </div>
      </React.Fragment>
    );
  }
}
