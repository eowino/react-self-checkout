import React from 'react';
import { css } from '../../misc';

export class Icon extends React.PureComponent {
  render() {
    const { show, label, children, className, ...rest } = this.props;
    return (
      <span
        {...rest}
        className={css('icon material-icons', className)}
        aria-hidden={show && label ? null : 'true'}
        aria-label={label}
      >{children}</span>
    );
  }
}
