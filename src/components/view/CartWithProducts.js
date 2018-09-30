import React from 'react';
import { Body } from './Body'
import { ProductCartCard } from './Card'

export class CartWithProducts extends React.PureComponent {
  render () {
    return (
        <Body payBarNav>
            <ProductCartCard />
            <ProductCartCard />
        </Body>
    );
  };
}
