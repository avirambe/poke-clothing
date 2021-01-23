import React from 'react';
import { connect } from 'react-redux';
import { addItem } from '../../redux/cart/cart.actions';
import {
  CollectionItemContainer,
  BackgroundImageContainer,
  CollectionItemButtonContainer,
  CollectionItemFooter,
  CollectionItemNameContainer,
  CollectionItemPriceContainer,
} from './collection-item.styles';

const CollectionItem = ({ item, addItem }) => {
  const { name, price, imageUrl } = item;
  return (
    <CollectionItemContainer>
      <BackgroundImageContainer imageUrl={imageUrl} />
      <CollectionItemFooter>
        <CollectionItemNameContainer>{name}</CollectionItemNameContainer>
        <CollectionItemPriceContainer>{price}</CollectionItemPriceContainer>
      </CollectionItemFooter>
      <CollectionItemButtonContainer onClick={() => addItem(item)} inverted>
        Add To Cart
      </CollectionItemButtonContainer>
    </CollectionItemContainer>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(CollectionItem);
