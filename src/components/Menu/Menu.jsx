import { MenuTitle } from '@components/MenuTitle';
import * as React from 'react';
import { Radio } from '../Radio';
import { Container, OptionsStyle } from './Menu.styles';

export const Menu = (props) => {
  const { title, items, onOptionSelect } = props;

  return (
    <Container>
      <MenuTitle title={title} />
      <OptionsStyle>
        {items.map((item) => (
          <Radio
            id={item.id}
            key={item.id}
            text={item.text}
            onRadioSelect={onOptionSelect}
            groupName={title}
          />
        ))}
      </OptionsStyle>
    </Container>
  );
};
