import React from 'react';
import { Button, Icon, Badge } from '..';
import { css } from '../../misc';

export class BottomNav extends React.PureComponent {
  get activeClass() {
    return 'bottom-nav__btn--active';
  }

  get btnStyles() {
    return 'bottom-nav__btn btn--remove-default';
  }

  get badgeClassName() {
    const { productCount } = this.props;
    let className = 'bottom-nav__badge ';
    
    if (productCount > 99) {
      className = className + 'bottom-nav__badge--triple-digit';
    } else if (productCount > 9) {
      className = className + 'bottom-nav__badge--double-digit';
    }

    return className;
  }

  render() {
    const { productCount } = this.props;

    return (
      <footer className="bar bottom-nav">
        <Button
          onClick={this.props.onClick}
          className={css(this.btnStyles, this.activeClass)}
        >
          {productCount && (
            <Badge count={productCount} className={this.badgeClassName}/>
          )}
          <Icon>shopping_cart</Icon>
          <span>Cart</span>
        </Button>
        <Button onClick={this.props.onClick} className={css(this.btnStyles)}>
          <Icon>camera_alt</Icon>
          <span>Scan</span>
        </Button>
        <Button onClick={this.props.onClick} className={css(this.btnStyles)}>
          <Icon>person</Icon>
          <span>Profile</span>
        </Button>
      </footer>
    );
  }
}

BottomNav.defaultProps = {
  productCount: 2
};
