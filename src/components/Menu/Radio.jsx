import * as React from 'react';
import styled from 'styled-components';

const RadioContainer = styled.div`
  display: flex;
  column-gap: 10px;
`;

const RadioButton = styled.input`
  vertical-align: middle;
  margin: 2.3px 0 0 0;
  cursor: pointer;
`;

const RadioLabel = styled.label``;

export const Radio = (props) => {
  const { id, text, onRadioSelect } = props;

  return (
    <RadioContainer>
      <RadioButton
        type="radio"
        name="radio"
        id={id}
        value={text}
        onChange={onRadioSelect}
        defaultChecked={text === 'Any time'}
      />
      <RadioLabel htmlFor={text}>{text}</RadioLabel>
    </RadioContainer>
  );
};
