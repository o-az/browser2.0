import * as React from 'react';
import { RadioButton, RadioContainer, RadioLabel } from './Radio.styles';

export const Radio = (props) => {
  const { id, text, onRadioSelect, groupName } = props;

  return (
    <RadioContainer>
      <RadioButton
        type="radio"
        name={groupName}
        id={id}
        value={text}
        onChange={onRadioSelect}
        defaultChecked={text === 'Any time'}
      />
      <RadioLabel htmlFor={text}>{text}</RadioLabel>
    </RadioContainer>
  );
};
