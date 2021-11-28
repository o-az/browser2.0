import * as React from 'react';
import { Title, TitleContainer, TitleDivider } from './MenuTitle.styles';

export const MenuTitle = (props) => {
  const { title } = props;
  return (
    <TitleContainer>
      <Title>{title}</Title>
      <TitleDivider />
    </TitleContainer>
  );
};
