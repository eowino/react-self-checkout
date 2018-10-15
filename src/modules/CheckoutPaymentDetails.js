import React from 'react';
import { AppBar, Body } from '../components/view';
import {
  FormGroup,
  Label,
  Input,
  Checkbox,
  Dropdown,
  Button
} from '../components/controls';
import { expiryMonths, expiryYear } from '../data/expiry-data';

export class CheckoutPaymentDetails extends React.PureComponent {
  render() {
    const { expiryMonths, expiryYear } = this.props;

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
          <div className="space-between">
            <FormGroup>
              <Dropdown
                options={expiryMonths}
                label="Expiry Month"
                name="expiryMonth"
              />
            </FormGroup>
            <FormGroup>
              <Dropdown
                options={expiryYear}
                label="Expiry Year"
                name="expiryYear"
              />
            </FormGroup>
          </div>
          <FormGroup half>
            <Label>CVV / Security Number</Label>
            <Input />
          </FormGroup>
          <FormGroup>
            <Checkbox label={'Enable auto checkout for your future payments'} />
          </FormGroup>
          <FormGroup>
            <Checkbox
              label={'Save payment details for your future purchases'}
            />
          </FormGroup>
          <Button primary fullWidth raised>
            Continue
          </Button>
        </Body>
      </React.Fragment>
    );
  }
}

CheckoutPaymentDetails.defaultProps = {
  title: 'Checkout - Payment Details',
  label: 'Card Number',
  expiryMonths,
  expiryYear
};
