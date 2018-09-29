import React from 'react';
import { css } from '../../../misc';

export class CardFooter extends React.PureComponent {
  render() {
    return <div className="card__footer">{this.props.children}</div>;
  }
}

export class CardBody extends React.PureComponent {
  render() {
    return <div className="card__body">{this.props.children}</div>;
  }
}

export class Card extends React.PureComponent {
  get getDialogClass() {
    return 'card--dialog';
  }

  render() {
    const { className, isDialog, children, ...rest } = this.props;
    return (
      <div
        {...rest}
        className={css('card', isDialog && this.getDialogClass, className)}
      >
        {children}
      </div>
    );
  }
}
