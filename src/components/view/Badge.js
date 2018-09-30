import React from 'react';
import { css } from '../../misc';

export class Badge extends React.PureComponent {
  render() {
    const { count, className, ...rest } = this.props;
    return (
      <span
        {...rest}
        className={css('badge', className)}
        aria-label={`${count} items in cart`}
      >{count}</span>
    );
  }
}
