import React, { useEffect } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import SignInAndSignOut from './components/sign-in-and-sing-up/SignInAndSignUp.component';
import HomePage from './pages/homepage/HomePage.component';
import ShopPage from './pages/shop/Shop.component';
import Header from './components/header/Header.component';
import CheckOutPage from './pages/checkout/CheckOut.component';

import { createStructuredSelector } from 'reselect';
import { setCurrentUser } from './redux/user/user.actions';

import { selectCurrentUser } from './redux/user/user.selectors';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import './App.css';

const App = (props) => {
  // get user data
  let unsubscribeFromAuth = null;
  useEffect(() => {
    const { setCurrentUser } = props;

    unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id, ...snapShot.data()
          });
        });
      }
      setCurrentUser(userAuth);
    });

    return () => { unsubscribeFromAuth() };
  }, []);


  return (
    <div className='App'>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
        <Route exact path='/checkout' component={CheckOutPage} />
        <Route exact path='/signin' render={() => props.currentUser ? (<Redirect to='/' />) : (<SignInAndSignOut />)} />
      </Switch>
    </div>
  );
}
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
})


const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});


export default connect(mapStateToProps, mapDispatchToProps)(App);
