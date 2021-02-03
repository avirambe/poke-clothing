import React, { useState } from 'react';
import { connect } from 'react-redux';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import {
  googleSigninStart,
  emailSigninStart,
} from '../../redux/user/user.actions';
import {
  SignInContainer,
  SignInButtonsContainer,
  SignInTitle,
} from './sign-in.styles';

const SignIn = ({ emailSigninStart, googleSigninStart }) => {
  const [userCredentials, setCredentials] = useState({
    email: '',
    password: '',
  });

  const { email, password } = userCredentials;

  const handleSubmit = async (event) => {
    event.preventDefault();

    emailSigninStart(email, password);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setCredentials({ ...userCredentials, [name]: value });
  };

  return (
    <SignInContainer>
      <SignInTitle>I already have an accout</SignInTitle>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          name='email'
          type='email'
          value={email}
          handleChange={handleChange}
          label='email'
          required
        />
        <FormInput
          name='password'
          type='password'
          value={password}
          handleChange={handleChange}
          label='password'
          required
        />
        <SignInButtonsContainer>
          <CustomButton type='submit'>SIGN IN</CustomButton>
          <CustomButton
            type='button'
            onClick={googleSigninStart}
            isGoogleSignIn
          >
            Sign in with Google
          </CustomButton>
        </SignInButtonsContainer>
      </form>
    </SignInContainer>
  );
};

const mapDispatchToProps = (dispatch) => ({
  googleSigninStart: () => dispatch(googleSigninStart()),
  emailSigninStart: (email, password) =>
    dispatch(emailSigninStart({ email, password })),
});

export default connect(null, mapDispatchToProps)(SignIn);
