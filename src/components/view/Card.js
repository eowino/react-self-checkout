import React from 'react';
import { css } from '../../misc'

export class Card extends React.PureComponent {
  render () {
    const { className, ...rest } = this.props;
    return (
        <div className={css('card', className)}>
            content here
        </div>
    );
  };
}
