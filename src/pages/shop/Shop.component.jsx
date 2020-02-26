import React, { useState } from 'react';
import './shop.styles.scss';
import { Route } from 'react-router-dom';

import CollectionsOverview from '../../components/collections-overview/CollectionsOverview.component';
import CategoryPage from '../category/Category.component';

const Shop = ({ match }) => {
  return (
    <div className='shop-page'>
      <Route exact path={`${match.path}`} component={CollectionsOverview} />
      <Route path={`${match.path}/:categoryId`} component={CategoryPage} />
    </div>
  );
};

export default Shop;
