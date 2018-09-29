import React from 'react';

export class Input extends React.PureComponent {
  render () {
    return (
        <input {...this.props} />
    );
  };
}
