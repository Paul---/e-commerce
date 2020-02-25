import React, { useState } from 'react';
import './shop.styles.scss';
import SHOP_DATA from './shop.data';
import CollectionPreview from '../../components/collection-preview/CollectionPreview.component';

const Shop = () => {
  const [collections, changeCollections] = useState(SHOP_DATA);

  return (
    <div className='shop-page'>
      {collections.map(({ id, ...otherCollectionProps }) => {
        return <CollectionPreview key={id} {...otherCollectionProps} />;
      })}
    </div>
  );
};

export default Shop;
