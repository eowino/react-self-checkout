import React from 'react';
import { AppBar, Body, BottomNav } from '../components/view';


export class Profile extends React.PureComponent {
  render() {
    return (
      <React.Fragment>
        <AppBar title={this.props.title} />
        <Body>
          <div>{this.props.title}</div>
          <div className="bottom-area">
            <BottomNav />
          </div>
        </Body>
      </React.Fragment>
    );
  }
}

Profile.defaultProps = {
  title: 'Profile Page'
};
