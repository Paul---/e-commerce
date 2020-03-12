import React, { useState } from 'react';

import FormInput from '../form-input/FormInput.component';
import CustomButton from '../custom-button/CustomButton.component';
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';
import './sign-up.styles.scss';

const SignUp = () => {
  const [displayName, setDisplayName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const resetUserState = () => {
    setDisplayName('');
    setPassword('');
    setEmail('');
    setConfirmPassword('');
  };

  const handleSubmit = async e => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert(`Passwords don't match.`);
      return;
    }
    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      await createUserProfileDocument(user, displayName);
      resetUserState();
    } catch (e) {
      console.log('error from signup', e);
    }
  };

  const handleChange = e => {
    const { name, value } = e.target;
    if (name === 'email') {
      setEmail(value);
    } else if (name === 'displayName') {
      setDisplayName(prev => {
        return value;
      });
    } else if (name === 'password') {
      setPassword(value);
    } else {
      setConfirmPassword(value);
    }
  };

  return (
    <section className='sign-up'>
      <h2 className='title'>I don't have an account</h2>
      <span>Sign up with your email and password</span>
      <form className='sign-up-form' onSubmit={handleSubmit}>
        <FormInput
          type='text'
          name='displayName'
          value={displayName}
          onChange={handleChange}
          label='Display Name'
          required
        />
        <FormInput
          type='email'
          name='email'
          value={email}
          onChange={handleChange}
          label='Email'
          required
        />
        <FormInput
          type='password'
          name='password'
          value={password}
          onChange={handleChange}
          label='Password'
          required
        />
        {password.length < 8 ? <p style={{ color: '#4285f4', fontSize: '17px'}}>Please create an 8 character password.</p>:''}
        <FormInput
          type='password'
          name='confirmPassword'
          value={confirmPassword}
          onChange={handleChange}
          label='Confirm Password'
          required
        />
        {password !== confirmPassword ? <p style={{ color: 'red' }}>Your Passwords do not match.</p>:''}
        <CustomButton type='submit'>SIGN UP</CustomButton>
        {/* <CustomButton type='reset' onClick={resetUserState}>
          CLEAR FORM
        </CustomButton> */}
      </form>
    </section>
  );
};

export default SignUp;
