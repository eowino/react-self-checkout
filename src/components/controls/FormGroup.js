import React from 'react';
import { css } from '../../misc';

export class FormGroup extends React.PureComponent {
  render() {
    const { children, half } = this.props;
    return (
      <div className={css('form-group', half && 'form-group--half')}>
        {children}
      </div>
    );
  }
}
