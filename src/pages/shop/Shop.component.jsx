import React, { useState } from 'react';
import './shop.styles.scss';
import { connect } from 'react-redux';
import { selectShopCollections } from '../../redux/shop/shop.selectors';
import CollectionPreview from '../../components/collection-preview/CollectionPreview.component';
import { createStructuredSelector } from 'reselect';

const Shop = ({ collections }) => {
  return (
    <div className='shop-page'>
      {collections.map(({ id, ...otherCollectionProps }) => {
        return <CollectionPreview key={id} {...otherCollectionProps} />;
      })}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  collections: selectShopCollections
});

export default connect(mapStateToProps)(Shop);
