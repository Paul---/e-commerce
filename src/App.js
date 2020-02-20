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
  const [currentUser, setCurrentUser] = useState({});

  // get user data
  let unsubscribeFromAuth = null;
  useEffect(() => {
    unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapShot => {
          setCurrentUser({ id: snapShot.id, ...snapShot.data() })
          return;
        })
      } else {
        console.log('cleared')
        clearUserData();
      }
       setCurrentUser(userAuth);
    });
    return () => { unsubscribeFromAuth() };
  }, []);

  useEffect(() => {
    console.log('CUSER', currentUser);
  });

  const clearUserData = () => {
    setCurrentUser({});
  }

  return (
    <div className='App'>
      <Header currentUser={currentUser} />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
        <Route path='/signin' component={SignInAndSignOut} />
      </Switch>
    </div>
  );
}

export default App;
