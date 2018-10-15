import React from 'react';
import { css } from '../../misc';

export class Label extends React.PureComponent {
  render () {
    const { children, className, notFormGroup, ...rest } = this.props;
    return (
        <label 
          {...rest}
          className={css(className, notFormGroup ? '' : 'form-group__label')}>
          {children}
        </label>
    );
  };
}
