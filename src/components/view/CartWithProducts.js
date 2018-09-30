import React from 'react';
import { ProductCartCard, Body, ScrollBarView } from '.';

export class CartWithProducts extends React.PureComponent {
  render() {
    return (
      <Body payBarNav>
        <ScrollBarView style={{ height: 'calc(100vh - 200px)' }}>
          <ProductCartCard />
          <ProductCartCard />
          <ProductCartCard />
          <ProductCartCard />
          <ProductCartCard />
          <ProductCartCard />
        </ScrollBarView>
      </Body>
    );
  }
}
