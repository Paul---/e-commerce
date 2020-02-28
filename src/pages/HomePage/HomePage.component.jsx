import React from 'react';
import './homepage.styles.scss';
import Directory from '../../components/directory/Directory.component';

import { HomePageContainer } from './Homepage.styles';

const HomePage = () => {
  return (
    <HomePageContainer>
      <Directory />
    </HomePageContainer>
  );
};

export default HomePage;
