import * as React from 'react';
import { Container, OptionsStyle } from './Menu.styles';
import { MenuTitle } from './MenuTitle';
import { Radio } from './Radio';

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
