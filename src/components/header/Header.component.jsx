import React from 'react';
import { useSelector } from 'react-redux';
import { ReactComponent as Logo } from '../../assets/crown.svg';
// import { createStructuredSelector } from 'reselect';

import { auth } from '../../firebase/firebase.utils';
import CartIcon from '../cart-icon/CartIcon.component';
import CartDropdown from '../cart-dropdown/CartDropdown.component';
// import { selectCartHidden } from '../../redux/cart/cart.selectors';
// import { selectCurrentUser } from '../../redux/user/user.selectors';

import {
  HeaderStyles,
  LogoContainer,
  OptionsContainer,
  TitleContainer,
  OptionDiv,
  OptionLink,
} from './HeaderStyles.component';

const Header = () => {
  const hidden = useSelector((state) => state.cart.hidden);
  const currentUser = useSelector((state) => state.user.currentUser);

  return (
    <HeaderStyles>
      <LogoContainer to='/e-commerce/'>
        <Logo className='logo' />
      </LogoContainer>
      <TitleContainer>
        <h1 className='title'>Your Favorite Ecommerce Site!</h1>
      </TitleContainer>
      <OptionsContainer>
        <OptionLink to='/e-commerce/shop'>SHOP</OptionLink>
        <OptionLink to='/e-commerce/shop'>CONTACT</OptionLink>
        {currentUser ? (
          <OptionDiv onClick={() => auth.signOut()}>SIGN OUT</OptionDiv>
        ) : (
          <OptionLink to='/e-commerce/signin'>SIGN IN</OptionLink>
        )}
        <CartIcon />
      </OptionsContainer>
      {hidden ? null : <CartDropdown />}
    </HeaderStyles>
  );
};

export default Header;
