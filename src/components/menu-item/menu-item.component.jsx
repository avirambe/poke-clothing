import React from 'react';
import { withRouter } from 'react-router-dom';
import {
  MenuItemContainer,
  MenuItemImageContainer,
  MenuItemContentContainer,
  MenuItemTitleContainer,
  MenuItemSubTitleContainer,
} from './menu-item.styles';

const MenuItem = ({ title, imageUrl, size, history, match, linkUrl }) => (
  <MenuItemContainer
    size={size}
    onClick={() => history.push(`${match.url}${linkUrl}`)}
  >
    <MenuItemImageContainer className='background-image' imageUrl={imageUrl} />
    <MenuItemContentContainer className='content'>
      <MenuItemTitleContainer>{title.toUpperCase()}</MenuItemTitleContainer>
      <MenuItemSubTitleContainer>shop now</MenuItemSubTitleContainer>
    </MenuItemContentContainer>
  </MenuItemContainer>
);

export default withRouter(MenuItem);
