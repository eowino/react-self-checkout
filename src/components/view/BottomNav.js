import React from 'react';
import { Button, Icon } from '..';

export class BottomNav extends React.PureComponent {
  get buttonStyles() {
    return 'bottom-nav__btn btn--remove-default'
  }
  
  render() {
    return (
      <footer className="bar bottom-nav">
        <Button onClick={this.props.onClick} className={this.buttonStyles}>
          <Icon>shopping_cart</Icon>
          <span>Cart</span>
        </Button>
        <Button onClick={this.props.onClick} className={this.buttonStyles}>
          <Icon>camera_alt</Icon>
          <span>Scan</span>
        </Button>
        <Button onClick={this.props.onClick} className={this.buttonStyles}>
          <Icon>person</Icon>
          <span>Profile</span>
        </Button>
      </footer>
    );
  }
}
