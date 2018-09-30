import React from 'react';
import { AppBar, Body } from '../components/view';

export class OrderConfirmation extends React.PureComponent {
  render() {
    return (
      <React.Fragment>
        <AppBar title={this.props.title} />
        <Body>
          <div>Order Confirmation</div>
        </Body>
      </React.Fragment>
    );
  }
}

OrderConfirmation.defaultProps = {
  title: 'Order Confirmation'
};
