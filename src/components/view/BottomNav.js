import React from 'react';
import { Button, Icon } from '..';
import { css } from '../../misc'

export class BottomNav extends React.PureComponent {
  get activeClass() {
    return 'bottom-nav__btn--active'
  }
  
  get buttonStyles() {
    return 'bottom-nav__btn btn--remove-default'
  }
  
  render() {
    return (
      <footer className="bar bottom-nav">
        <Button 
            onClick={this.props.onClick} 
            className={css(this.buttonStyles, this.activeClass)}>
          <Icon>shopping_cart</Icon>
          <span>Cart</span>
        </Button>
        <Button 
            onClick={this.props.onClick} 
            className={css(this.buttonStyles)}>
          <Icon>camera_alt</Icon>
          <span>Scan</span>
        </Button>
        <Button 
            onClick={this.props.onClick} 
            className={css(this.buttonStyles)}>
          <Icon>person</Icon>
          <span>Profile</span>
        </Button>
      </footer>
    );
  }
}
