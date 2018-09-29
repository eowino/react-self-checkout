import React from 'react';

export class Body extends React.PureComponent {
  render () {
    return (
        <div className="wrapper">{this.props.children}</div>
    );
  };
}
