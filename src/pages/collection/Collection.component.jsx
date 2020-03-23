import React, { Suspense } from 'react';
import { connect } from 'react-redux';
import { selectCollection } from '../../redux/shop/shop.selectors';
// import CollectionItem from '../../components/collection-item/CollectionItem.component';
import './collection.styles.scss';

const CollectionItem = React.lazy(() =>
  import('../../components/collection-item/CollectionItem.component')
);

const CollectionPage = ({ collection }) => {
  const { title, items } = collection;
  debugger;

  return (
    <div className='collection-page'>
      <h2 className='title'>{title}</h2>
      <Suspense fallback={<div>Loading...</div>}>
        <div className='items'>
          {items.map(item => (
            <CollectionItem key={item.id} item={item} />
          ))}
        </div>
      </Suspense>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state)
});

export default connect(mapStateToProps)(CollectionPage);
