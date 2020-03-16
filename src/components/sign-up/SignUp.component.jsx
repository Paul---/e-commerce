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
  const [errorState, setErrorState] = useState(false);

  const resetUserState = () => {
    setDisplayName('');
    setPassword('');
    setEmail('');
    setConfirmPassword('');
    setErrorState(false);
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
      setErrorState(true);
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
        {password.length < 8 ? (
          <p style={{ color: 'red', fontSize: '17px' }}>
            Please create a password with 8 characters or more.
          </p>
        ) : (
          ''
        )}
        <FormInput
          type='password'
          name='confirmPassword'
          value={confirmPassword}
          onChange={handleChange}
          label='Confirm Password'
          required
        />
        {password !== confirmPassword ? (
          <p style={{ color: 'red' }}>Your Passwords do not match.</p>
        ) : (
          ''
        )}
        {errorState ? (
          <p style={{ color: '#4285f4' }}>
            There was an error signing up. Please check your information and
            internet connection.
          </p>
        ) : null}
        <CustomButton type='submit'>SIGN UP</CustomButton>
      </form>
    </section>
  );
};

export default SignUp;
