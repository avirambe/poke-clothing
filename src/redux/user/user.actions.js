import { userActionTypes } from '../constants.actions';

export const setCurrentUser = (user) => ({
  type: userActionTypes.setCurrentUser,
  payload: user,
});
