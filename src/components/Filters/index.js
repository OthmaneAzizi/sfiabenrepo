import React from 'react';
import ProductContext from 'context/ProductContext';
import { CategoryFilterItem } from './CategoryFilterItem';
import { FiltersWrapper } from './styles';

export function Filters() {
  const { collections } = React.useContext(ProductContext);
<<<<<<< HEAD
  
  var collectionss = collections.filter(
    collection => collection.id === 'Shopify__Collection__Z2lkOi8vc2hvcGlmeS9Db2xsZWN0aW9uLzIzOTc4MjMzMDU1Nw==' || (!collection.title.includes('Hats') && collection.title !== 'SALE')
=======
  var collectionss = collections.filter(
    collection => collection.title.includes('Hats') || collection.title ==='ON SALE'
>>>>>>> 9937a88f62fd2bb141777619753a58538ffe0222
  );

  return (
    <FiltersWrapper>
      <strong>Categories</strong>
      {collectionss.map(collection => (
        <CategoryFilterItem
          title={collection.title}
          key={collection.shopifyId}
          id={collection.shopifyId}
        />
      ))}
    </FiltersWrapper>
  );
}
