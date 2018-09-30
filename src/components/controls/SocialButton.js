// @ts-check
import React from 'react';
import { Button } from '.';
import { Icon } from '../view/';
import { css } from '../../misc';

export class SocialButton extends React.PureComponent {
  get facebookIcon() {
    return <Icon className="fa fa-facebook-square" />;
  }

  get twitterIcon() {
    return <Icon className="fa fa-twitter-square" />;
  }

  render() {
    const { facebook, twitter, className, ...rest } = this.props;
    return (
      <Button
        {...rest}
        raised
        className={css(
          'btn--social',
          className,
          facebook && 'btn--facebook',
          twitter && 'btn--twitter'
        )}
      >
        {facebook && this.facebookIcon}
        {twitter && this.twitterIcon}
        <span>Share</span>
      </Button>
    );
  }
}
