import React from 'react';
import SiginIn from '../sign-in/SignIn.component';
import SignUp from '../sign-up/SignUp.component';
import './sign-in-and-sign-up.styles.scss';

const SignInAndSignUpPage = () => {
  return (
    <div className='sign-in-and-sign-up'>
      <SiginIn />
      <SignUp />
    </div>
  );
};

export default SignInAndSignUpPage;
