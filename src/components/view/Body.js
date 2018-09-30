import React from 'react';
import { css } from '../../misc';

export class Body extends React.PureComponent {
  render() {
    const { payBarNav, nav } = this.props;
    return (
      <div
        className={css(
          'wrapper',
          payBarNav ? 'wrapper--paybar-nav' : '',
          nav ? 'wrapper--nav' : ''
        )}
      >
        {this.props.children}
      </div>
    );
  }
}
