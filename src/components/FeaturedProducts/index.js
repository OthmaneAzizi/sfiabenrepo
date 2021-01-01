import React from 'react';
import ProductContext from 'context/ProductContext';
import { ProductsGrid } from '../ProductsGrid';

export function FeaturedProducts() {
  const { collections } = React.useContext(ProductContext);

  const featuredCollection = collections.find(
    collection => collection.title === 'Featured'
  );
  console.log(collections);

  return (
    <section>
<<<<<<< HEAD
      <h1>Featured</h1>
      <ProductsGrid products={featuredCollection?.products} />
=======
      <h1>Featured Caps</h1>
      <ProductsGrid products={featuredCollection.products} />
>>>>>>> 9937a88f62fd2bb141777619753a58538ffe0222
    </section>
  );
}
