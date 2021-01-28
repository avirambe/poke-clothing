import UserActionTypes from './user.types';

const INITIAL_STATE = {
  currentUser: null,
  error: null,
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UserActionTypes.signinSuccess:
      return {
        ...state,
        currentUser: action.payload,
        error: null,
      };
    case UserActionTypes.signOutSuccess:
      return {
        ...state,
        currentUser: null,
        error: null,
      };
    case UserActionTypes.signinFailure:
    case UserActionTypes.signOutFailure:
    case UserActionTypes.signUpFailure:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
