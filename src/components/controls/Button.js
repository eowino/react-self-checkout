import React from 'react';
import { css } from '../../misc'

export class Button extends React.PureComponent {
  render () {
    const { children, className } = this.props;
    return (
        <button type="button" className={css('btn', className)}>
            {children}
        </button>
    );
  };
}
