import ShopActionTypes from './shop.types';

export const updateShopCollections = (collections) => ({
  type: ShopActionTypes.updateCollections,
  payload: collections,
});
