import React from 'react';
import CollectionItem from '../collection-item/CollectionItem.component';
import './collection-preview.styles.scss';

const CollectionPreview = ({ title, items, ...otherCollectionProps }) => {
  return (
    <div className='collection-preview'>
      <h1 className='title'>{title.toUpperCase()}</h1>
      <div className='preview'>
        {items
          .filter((item, indx) => {
            return indx < 4;
          })
          .map(({ id, ...otherItemProps }) => {
            return <CollectionItem key={id} {...otherItemProps} />;
          })}
      </div>
    </div>
  );
};

export default CollectionPreview;
