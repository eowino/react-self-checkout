import React from 'react';
import { Button, Icon } from '..';

export class BottomNav extends React.PureComponent {
  render() {
    return (
      <footer className="bar bottom-nav">
        <Button onClick={this.props.onClick}>
          <Icon>shopping_cart</Icon>
          <span>Cart</span>
        </Button>
        <Button onClick={this.props.onClick}>
          <Icon>camera_alt</Icon>
          <span>Scan</span>
        </Button>
        <Button onClick={this.props.onClick}>
          <Icon>person</Icon>
          <span>Profile</span>
        </Button>
      </footer>
    );
  }
}
