import React from 'react';
import { Body } from '../components/view';
import { getInputDevices } from '../misc';
import { getProduct } from '../misc/product-api';
export class Scanner extends React.Component {
  state = {
    barcode: '',
    title: '',
    brand: ''
  };

  componentDidMount() {
    getInputDevices(this.setBarcode, 'video');
  }

  setBarcode = result => {
    const barcode = result && result.text ? result.text : result;
    this.setState({
      barcode
    }, () => {
      getProduct(this.state.barcode).then(product => {
        this.setState({
          title: product.productName,
          brand: product.brand,
        })
      });
    })
  };

  render() {
    return (
      <React.Fragment>
        <Body className="overlay">
          <div className="overlay__video">
            <div className="overlay__center-line" />
            <video id="video" height="100%" width="100%" />
          </div>
          <div className="position-page-bottom overlay__text">
            <p>Scan a barcode</p>
            <p>
              <strong>Barcode is: {this.state.barcode}</strong>
            </p>
            { this.state.title && this.state.title.length > 0 && <p>
              <strong>Barcode is: {this.state.title}</strong>
            </p>}
          </div>
        </Body>
      </React.Fragment>
    );
  }
}

// consider adding a back button to this view