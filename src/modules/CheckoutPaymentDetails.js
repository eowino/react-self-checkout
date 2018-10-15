import React from 'react';
import { AppBar, Body } from '../components/view';
import { FormGroup, Label, Input, Checkbox } from '../components/controls';

export class CheckoutPaymentDetails extends React.PureComponent {
  render() {
    const { label } = this.props;
    
    return (
      <React.Fragment>
        <AppBar title={this.props.title} />
        <Body>
          <FormGroup>
            <Label>Card Number</Label>
            <Input />
          </FormGroup>
          <FormGroup>
            <Label>Card Holder's Name</Label>
            <Input />
          </FormGroup>
          <FormGroup half>
            <Label>CVV / Security Number</Label>
            <Input />
          </FormGroup>
          <FormGroup>
            <Checkbox label={"Enable auto checkout for your future payments"} />
          </FormGroup>
          <FormGroup>
            <Checkbox label={"Save payment details for your future purchases"} />
          </FormGroup>
        </Body>
      </React.Fragment>
    );
  }
}

CheckoutPaymentDetails.defaultProps = {
  title: 'Checkout - Payment Details',
  label:  'Card Number'
};
