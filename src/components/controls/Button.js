import React from 'react';
import { css } from '../../misc'

export class Button extends React.PureComponent {
  render () {
    const { children, className, noDefault, ...rest } = this.props;
    return (
        <button {...rest} 
          type="button" 
          className={css(
            'btn', 
            noDefault ? 'btn--remove-default' : '',
            className)}>
            {children}
        </button>
    );
  };
}
