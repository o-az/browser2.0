import * as React from 'react';
import styled from 'styled-components';

const StyledSearchButton = styled.input`
  background-color: hsl(0deg 0% 93%);
  border: 1px solid hsl(210deg 17% 98%);
  border-radius: 4px;
  color: hsl(206deg 6% 25%);
  font-family: Roboto, arial, sans-serif;
  font-size: 14px;
  margin: 11px 4px;
  padding: 0 16px;
  line-height: 27px;
  height: 36px;
  min-width: 54px;
  width: 9em;
  text-align: center;
  cursor: pointer;
  user-select: none;
  &:hover {
    box-shadow: 0 1px 1px rgb(0 0 0 / 10%);
    background-color: hsl(210deg 17% 98%);
    border: 1px solid hsl(220deg 9% 87%);
    color: hsl(225deg 6% 13%);
  }
`;

export const SearchButton = props => {
  const [textInput, setTextInput] = React.useState('');

  const handleClick = () => {
    console.log(textInput);
    alert(1);
    // props.send(textInput);
  };

  const handleChange = event => {
    setTextInput(event.target.value);
  };
  return (
    <StyledSearchButton
      value={props.value}
      type="submit"
      onClick={props.click}
    />
  );
};
