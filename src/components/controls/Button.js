import React from 'react';
import { css } from '../../misc'

export class Button extends React.PureComponent {
  render () {
    const { children, className, ...rest } = this.props;
    return (
        <button {...rest} type="button" className={css('btn', className)}>
            {children}
        </button>
    );
  };
}
