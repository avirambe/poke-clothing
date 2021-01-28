import UserActionTypes from './user.types';

export const setCurrentUser = (user) => ({
  type: UserActionTypes.setCurrentUser,
  payload: user,
});

export const googleSigninStart = () => ({
  type: UserActionTypes.googleSigninStart,
});

export const signinSuccess = (user) => ({
  type: UserActionTypes.signinSuccess,
  payload: user,
});

export const signinFailure = (error) => ({
  type: UserActionTypes.signinFailure,
  payload: error,
});

export const emailSigninStart = (emailAndPassword) => ({
  type: UserActionTypes.emailSigninStart,
  payload: emailAndPassword,
});

export const checkUserSession = () => ({
  type: UserActionTypes.checkUserSession,
});

export const signOutStart = () => ({
  type: UserActionTypes.signOutStart,
});

export const signOutSuccess = () => ({
  type: UserActionTypes.signOutSuccess,
});

export const signOutFailure = (error) => ({
  type: UserActionTypes.signOutFailure,
  payload: error,
});

export const signUpStart = (newUserDetails) => ({
  type: UserActionTypes.signUpStart,
  payload: newUserDetails,
});

export const signUpSuccess = ({ user, additionalData }) => ({
  type: UserActionTypes.signUpSuccess,
  payload: { user, additionalData },
});

export const signUpFailure = (error) => ({
  type: UserActionTypes.signUpFailure,
  payload: error,
});
