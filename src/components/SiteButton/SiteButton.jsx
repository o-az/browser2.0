import * as React from 'react';
import { ButtonStyle, Icon, Text } from './SiteButton.styles';

export const SiteButton = (props) => {
  const { title, onButtonClick, icon, active } = props;

  return (
    <ButtonStyle active={active} onClick={onButtonClick}>
      <Icon src={icon} />
      <Text>{title}</Text>
    </ButtonStyle>
  );
};
