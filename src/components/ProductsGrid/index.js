import React from 'react';
import { ProductsGridWrapper } from './styles';
import { ProductTile } from '../ProductTile';

export function ProductsGrid({ products }) {
  return (
    <ProductsGridWrapper>
      {products.map(product => (
        <ProductTile
          handle={product.handle}
          minPrice={product.priceRange.minVariantPrice.amount}
          description={product.description}
<<<<<<< HEAD
          imageFluid={product.images[0].localFile?.childImageSharp.fluid}
=======
          imageFluid={product?.images[0]?.localFile?.childImageSharp?.fluid}
>>>>>>> 9937a88f62fd2bb141777619753a58538ffe0222
          key={product.shopifyId}
          title={product.title}
        />
      ))}
    </ProductsGridWrapper>
  );
}
