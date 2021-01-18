import { userActionTypes, INITIAL_STATE } from '../constants.actions';

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case userActionTypes.setCurrentUser:
      return {
        ...state,
        currentUser: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
