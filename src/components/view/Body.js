import React from 'react';
import { css } from '../../misc';

export class Body extends React.PureComponent {
  render() {
    const { payBarNav, nav, className } = this.props;
    return (
      <div
        className={css(
          'wrapper',
          className,
          payBarNav ? 'wrapper--paybar-nav' : '',
          nav ? 'wrapper--nav' : ''
        )}
      >
        {this.props.children}
      </div>
    );
  }
}
