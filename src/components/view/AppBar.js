import React from 'react';

export class AppBar extends React.PureComponent {
  render() {
    return <header className="bar app-bar">{this.props.title}</header>;
  }
}
