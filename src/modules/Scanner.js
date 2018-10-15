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

  parseResult(result) {
    let barcode = 'Error';
    if (typeof result === 'object') {
      barcode = result.text;
    } else if (typeof result === 'string') {
      try {
        const res = JSON.parse(result);
        barcode = res.text;
      } catch (err) {
      } finally {
        return barcode;
      }
    }
  }

  setBarcode = result => {
    this.setState(
      {
        barcode: this.parseResult(result)
      },
      () => {
        getProduct(this.state.barcode).then(product => {
          this.setState({
            title: product.productName,
            brand: product.brand
          });
        });
      }
    );
  };

  render() {
    const { title, barcode } = this.state;
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
              <strong>Barcode is: {barcode}</strong>
            </p>
            {title &&
              title.length > 0 && (
                <p>
                  <strong>Barcode is: {title}</strong>
                </p>
              )}
          </div>
        </Body>
      </React.Fragment>
    );
  }
}

// consider adding a back button to this view
