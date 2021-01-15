import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyCbc4iK3V4hqYYAE9xMn2Ox4nagZhWr-10',
  authDomain: 'poke-clothing-db.firebaseapp.com',
  projectId: 'poke-clothing-db',
  storageBucket: 'poke-clothing-db.appspot.com',
  messagingSenderId: '434143165056',
  appId: '1:434143165056:web:b605919431c65abc2d4465',
  measurementId: 'G-74PDTZNK6G',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const createUserProfileDocument = async (userAuth, additionalData) => {
  let userRef = null;

  if (userAuth) {
    userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();
    if (!snapShot.exists) {
      const { displayName, email } = userAuth;
      const createdAt = new Date();

      try {
        await userRef.set({ displayName, email, createdAt, ...additionalData });
      } catch (error) {
        console.error('error in createUserProfileDocument ' + error.message);
      }
    }
  }

  return userRef;
};

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
