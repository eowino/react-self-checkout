import React from 'react';
import { Body } from '../components/view';
// import { getBarcordeFromImage } from '../misc';

export class Scanner extends React.Component {
  state = {
    barcode: ''
  };

  setBarcode = result => {
    this.setState({
      barcode: JSON.stringify(result)
    });
  };

  render() {
    return (
      <React.Fragment>
        <Body className="overlay">
          <div className="overlay__video">
            <div className="overlay__center-line" />
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
