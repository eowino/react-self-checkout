import React from 'react';
import { Body } from '../components/view';
import { getInputDevices } from '../misc';

export class Scanner extends React.Component {
  state = {
    barcode: ''
  };

  componentDidMount() {
    getInputDevices(this.setBarcode, 'video');
  }

  setBarcode = result => {
    const barcode = result && result.text ? result.text : result;
    this.setState({
      barcode
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
          </div>
        </Body>
      </React.Fragment>
    );
  }
}

// consider adding a back button to this view