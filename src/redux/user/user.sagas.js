import { takeLatest, put, all, call, takeEvery } from 'redux-saga/effects';
import UserActionTypes from './user.types';
import {
  signinSuccess,
  signinFailure,
  signOutSuccess,
  signOutFailure,
  signUpSuccess,
  signUpFailure,
} from './user.actions';
import {
  googleProvider,
  auth,
  createUserProfileDocument,
  getCurrentUser,
} from '../../firebase/firebase.utils';

export function* onEmailSignInStart() {
  yield takeLatest(UserActionTypes.emailSigninStart, signInWithEmail);
}

export function* signInWithEmail({ payload: { email, password } }) {
  try {
    const { user } = yield auth.signInWithEmailAndPassword(email, password);
    yield call(signIn, user);
  } catch (error) {
    put(signinFailure(error));
  }
}

export function* signIn(user, additionalData) {
  try {
    const userRef = yield call(createUserProfileDocument, user, additionalData);
    const userSnapshot = yield userRef.get();
    yield put(signinSuccess({ id: userSnapshot.id, ...userSnapshot.data() }));
  } catch (error) {
    put(signinFailure(error));
  }
}

export function* onGoogleSignInStart() {
  yield takeLatest(UserActionTypes.googleSigninStart, signInWithGoogle);
}

export function* signInWithGoogle() {
  try {
    const { user } = yield auth.signInWithPopup(googleProvider);
    yield call(signIn, user);
  } catch (error) {
    yield put(signinFailure(error));
  }
}

export function* onCheckUserSession() {
  yield takeLatest(UserActionTypes.checkUserSession, isUserAuthenticated);
}

export function* isUserAuthenticated() {
  try {
    const userAuth = yield call(getCurrentUser);
    if (userAuth) {
      yield signIn(userAuth);
    }
  } catch (error) {
    yield put(signinFailure(error));
  }
}

export function* onSignOutStart() {
  yield takeLatest(UserActionTypes.signOutStart, signOut);
}

export function* signOut() {
  try {
    yield auth.signOut();
    yield put(signOutSuccess());
  } catch (error) {
    yield put(signOutFailure(error));
  }
}

export function* onSignUpStart() {
  yield takeEvery(UserActionTypes.signUpStart, signUp);
}

export function* signUp({ payload: { email, password, displayName } }) {
  try {
    const { user } = yield auth.createUserWithEmailAndPassword(email, password);
    yield put(signUpSuccess({ user, additionalData: { displayName } }));
  } catch (error) {
    yield put(signUpFailure(error));
  }
}

export function* onSignUpSuccess() {
  yield takeLatest(UserActionTypes.signUpSuccess, signInAfterSignUpSuccess);
}

export function* signInAfterSignUpSuccess({
  payload: { user, additionalData },
}) {
  yield call(signIn, user, additionalData);
}

export function* userSagas() {
  yield all([
    call(onGoogleSignInStart),
    call(onEmailSignInStart),
    call(onCheckUserSession),
    call(onSignOutStart),
    call(onSignUpStart),
    call(onSignUpSuccess),
  ]);
}
