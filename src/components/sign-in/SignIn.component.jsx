import React, { useState } from 'react';
import './sign-in.styles.scss';
import FormInput from '../form-input/FormInput.component';
import CustomButton from '../custom-button/CustomButton.component';

import { signInWithGoogle } from '../../firebase/firebase.utils';

const SiginIn = () => {
  // state hooks
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // function section
  const handleSubmit = e => {
    e.preventDefault();
    setPassword('');
    setEmail('');
  };

  // component
  return (
    <div className='sign-in'>
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          type='email'
          name='email'
          value={email}
          setEmail={setEmail}
          label='email'
          onChange={e => setEmail(e.target.value)}
          required
        />
        <FormInput
          type='password'
          name='password'
          value={password}
          setPassword={setPassword}
          label='password'
          onChange={e => setPassword(e.target.value)}
          required
        />
        <div className='buttons'>
          <CustomButton type='submit'>Sign In</CustomButton>
          <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
            Sign In With Google
          </CustomButton>
        </div>
      </form>
    </div>
  );
};

export default SiginIn;
