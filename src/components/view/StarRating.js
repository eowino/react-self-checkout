import React from 'react';
import { Icon } from './Icon';

export class StarRating extends React.PureComponent {
  render() {
    const { total, rating } = this.props;
    let stars = Array(total).fill('');

    return stars.map((_, i) => {
      if (!Number.isInteger(rating) && Math.floor(rating) === i) {
        return (
          <Icon key={i} className="star star--active">
            star_half
          </Icon>
        );
      } else if (i < rating) {
        return (
          <Icon key={i} className="star star--active">
            star
          </Icon>
        );
      } else {
        return (
          <Icon key={i} className="star">
            star
          </Icon>
        );
      }
    });
  }
}
