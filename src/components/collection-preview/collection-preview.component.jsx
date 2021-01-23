import React from 'react';
import CollectionItem from '../collection-item/collection-item.component';
import {
  CollectionPreviewContainer,
  CollectionTitleLabel,
  CollectionPreviewItemsContainer,
} from './collection-preview.styles';

const CollectionPreview = ({ title, items }) => (
  <CollectionPreviewContainer>
    <CollectionTitleLabel>{title.toUpperCase()}</CollectionTitleLabel>
    <CollectionPreviewItemsContainer>
      {items
        .filter((item, index) => index < 4)
        .map((item) => (
          <CollectionItem key={item.id} item={item}></CollectionItem>
        ))}
    </CollectionPreviewItemsContainer>
  </CollectionPreviewContainer>
);

export default CollectionPreview;
