import React, { useState, useEffect } from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';

import SignInAndSignOut from './components/sign-in-and-sing-up/SignInAndSignUp.component';
import HomePage from './pages/homepage/HomePage.component';
import ShopPage from './pages/shop/Shop.component';
import Header from './components/header/Header.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';

function App() {
  // state vars  ////////////////
  const [currentUserData, setCurrentUserData] = useState({});
  const [currentUserId, setCurrentUserId] = useState({});

  // functions /////////////////

  // get user data
  useEffect(() => {
    auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          setCurrentUserId(snapShot.id);
          setCurrentUserData(snapShot.data());
          console.log('data  set')
        })
      } else {
        console.log('cleared')
        clearUserData();
      }
    });
  }, [currentUserData]);

  // clear user state data
  const clearUserData = () => {
    setCurrentUserData({});
    setCurrentUserId({});
  }

  return (
    <div className='App'>
      <Header currentUser={currentUserData} />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
        <Route path='/signin' component={SignInAndSignOut} />
      </Switch>
    </div>
  );
}

export default App;
