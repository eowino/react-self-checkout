import React from 'react';
import { Body, Icon } from '../components/view';
import { getInputDevices, getBarcodeFromResult } from '../misc';
import { Link } from 'react-router-dom';

export class Scanner extends React.Component {
  state = {
    barcode: '',
  };

  componentDidMount() {
    getInputDevices(this.setBarcode, 'video');
  }

  setBarcode = result => {
    this.setState(
      {
        barcode: getBarcodeFromResult(result)
      },
      () => {
        this.props.history.push('product-scan', this.state);
      }
    );
  }

  render() {
    return (
      <React.Fragment>
        <Link to="/" className="back-link align-center"><Icon>arrow_back</Icon>Back</Link>
        <Body className="overlay">
          <div className="overlay__video">
            <div className="overlay__center-line" />
            <video id="video" height="100%" width="100%" />
          </div>
          <p className="position-page-bottom overlay__text">Scan a barcode</p>
        </Body>
      </React.Fragment>
    );
  }
}

// consider adding a back button to this view
