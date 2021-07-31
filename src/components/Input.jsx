import * as React from 'react';
import styled from 'styled-components';
import {SearchSVG} from './SearchSVG';
// the hook
export const useInput = props => {
  const [value, setValue] = React.useState(props);
  const onChange = event => {
    setValue(event.target.value);
  };
  return { value, onChange };
};

const BaseContainer = styled.div`
  background: hsl(0deg 0% 100%);
  display: flex;
  border: 1px solid hsl(220deg 10% 89%);
  box-shadow: none;
  border-radius: 24px;
  z-index: 3;
  height: 44px;
  margin: 0 auto;
  width: auto;
  &:hover {
    background-color: hsl(0deg 0% 100%);
    box-shadow: 0 1px 6px rgb(32 33 36 / 28%);
    border-color: hsl(220deg 10% 89% / 0%);
  }
`;

const InnerContainer = styled.div`
  font-size: 14px;
  font-family: Roboto,arial,sans-serif;
  color: #222;
  flex: 1;
  display: flex;
  flex-direction: row
  padding: 5px 8px 0 16px;
  padding-left: 14px;
`;

const StyledInput = styled.input`
  padding: 0.5em;
  margin: 0.5em;
  width: 400px;
  background: none;
  border: none;
  border-radius: 0px;
  &:focus-visible {
    outline: none;
  }
`;

// the component
export const Input = props => {
  return (
    <BaseContainer>
    <InnerContainer>
      <StyledInput type="text" {...props} />
    </InnerContainer>
    </BaseContainer>
  );
};
