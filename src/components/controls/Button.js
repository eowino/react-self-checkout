import React from 'react';
import { css } from '../../misc';

export class Button extends React.PureComponent {
  render() {
    const {
      children,
      className,
      noDefault,
      primary,
      fullWidth,
      raised,
      flat,
      ...rest
    } = this.props;
    return (
      <button
        {...rest}
        type="button"
        className={css(
          'btn',
          noDefault ? 'btn--remove-default' : '',
          primary ? 'btn--primary' : '',
          fullWidth ? 'btn--full' : '',
          raised ? 'btn--raised' : '',
          flat ? 'btn--flat' : '',
          className
        )}
      >
        {children}
      </button>
    );
  }
}
