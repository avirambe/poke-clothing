import ShopActionTypes from './shop.types';
import {
  firestore,
  convertCollectionSnapshotToMap,
} from '../../firebase/firebase.utils';

export const fetchCollectionsStart = () => ({
  type: ShopActionTypes.fetchCollectionsStart,
});

export const fetchCollectionsSuccess = (collectionsMap) => ({
  type: ShopActionTypes.fetchCollectionsSuccess,
  payload: collectionsMap,
});

export const fetchCollectionsFailure = (errorMessage) => ({
  type: ShopActionTypes.fetchCollectionsFailure,
  payload: errorMessage,
});

export const fetchCollectionsStartAsync = () => {
  return async (dispatch) => {
    const collectionRef = firestore.collection('collections');

    dispatch(fetchCollectionsStart());
    try {
      const snapshot = await collectionRef.get();
      const collectionsMap = convertCollectionSnapshotToMap(snapshot);
      dispatch(fetchCollectionsSuccess(collectionsMap));
    } catch (error) {
      dispatch(fetchCollectionsFailure(error.message));
    }
  };
};
