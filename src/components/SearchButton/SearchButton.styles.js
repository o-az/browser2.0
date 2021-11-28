import styled from 'styled-components';

const StyledSearchButton = styled.input`
  background-color: hsl(0deg 0% 93%);
  border: 1px solid hsl(210deg 17% 98%);
  border-radius: 4px;
  color: hsl(206deg 6% 25%);
  font-family: Roboto, arial, sans-serif;
  font-size: 17px;
  font-weight: 500;
  margin: 11px 0 0 0;
  line-height: 27px;
  height: 36px;
  min-width: 54px;
  width: 100%;
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

export { StyledSearchButton };
