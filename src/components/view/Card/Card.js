import React from 'react';
import { css } from '../../../misc';

export class Card extends React.PureComponent {
  get getDialogClass() {
    return 'card--dialog';
  }

  render() {
    const { className, isDialog, children } = this.props;
    return (
      <div className={css('card', isDialog && this.getDialogClass, className)}>
        {children}
      </div>
    );
  }
}
