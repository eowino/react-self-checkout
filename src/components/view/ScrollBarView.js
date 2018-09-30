import React from 'react';
import { Scrollbars } from 'react-custom-scrollbars';

export class ScrollBarView extends React.PureComponent {
  render() {
    const { style, children, ...rest } = this.props;
    return (
      <Scrollbars
        {...rest}
        autoHide
        style={style}
        renderTrackHorizontal={props => (
          <div {...props} className="track-horizontal" />
        )}
        renderTrackVertical={props => (
          <div {...props} className="track-vertical" />
        )}
        renderView={(styles, props) => (
          <div
            {...props}
            className="scrollbar-view"
            style={{ ...styles.style, overflowX: 'hidden', marginBottom: 0 }}
          />
        )}
      >
        {children}
      </Scrollbars>
    );
  }
}
