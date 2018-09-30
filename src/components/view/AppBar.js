import React from 'react';

export class AppBar extends React.PureComponent {
  render() {
    return (
      <header className="bar app-bar">
        <h1 className="app-bar__heading">{this.props.title}</h1>
      </header>
    );
  }
}
