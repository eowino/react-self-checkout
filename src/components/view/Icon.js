import React from 'react';

export class Icon extends React.PureComponent {
  render() {
    const { show, label, children, ...rest } = this.props;
    return (
      <span
        {...rest}
        className="icon material-icons"
        aria-hidden={show && label ? null : 'true'}
        aria-label={label}
      >{children}</span>
    );
  }
}
