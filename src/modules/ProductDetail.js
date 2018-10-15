import React from 'react';
import { AppBar, Body } from '../components/view';

export class ProductDetail extends React.PureComponent {
  render() {
    return (
      <React.Fragment>
        <AppBar title={this.props.title} />
        <Body>
          <div>Product Detail</div>
        </Body>
      </React.Fragment>
    );
  }
}

ProductDetail.defaultProps = {
  title: 'Product Detail'
};
