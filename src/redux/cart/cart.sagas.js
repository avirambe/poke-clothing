import { all, call, takeLatest, put } from 'redux-saga/effects';
import UserActionTypes from '../user/user.types';
import { clearCart } from './cart.actions';

export function* onSignOut() {
  yield takeLatest(UserActionTypes.signOutSuccess, clearCartSaga);
}

export function* clearCartSaga() {
  yield put(clearCart());
}

export function* cartSagas() {
  yield all([call(onSignOut)]);
}
