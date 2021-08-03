import * as React from 'react';
import styled from 'styled-components';
import { tabContext } from '../contexts/TabContext';

const Extension = styled.li`
  flex-grow: 1;
  font-size: 20px;
  margin: 10px 0 0 0;
  cursor: pointer;
  opacity: 0.6;
  background-color: hsl(0deg 1% 57% / 16%);
  color: hsl(0deg 0% 36%);
  border: 0;
  outline: 0;
  // font-family: "Montserrat";
  font-weight: bold;
  padding: 7px 0 7px 0;
  ${({ active }) =>
    active &&
    `
    color: hsl(217deg 100% 63%);
    background-color: #fff;
    // border-bottom: 2px solid hsl(217deg 100% 63%);
    opacity: 1;
  `};
`;

const ButtonGroup = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  height: 35px;
  margin: 5px 0 0 0;
  border: 10px;
  border-radius: 10px;
  list-style-type: none;
`;

export const Extensions = props => {
  const { extensions } = props;
  const [active, setActive] = React.useState(extensions[0]);
  const { contextValue, setContextValue } = React.useContext(tabContext);

  const onTabClick = type => {
    setActive(type);
    setContextValue({ ...contextValue, extension: type });
  };
  return (
    <ButtonGroup>
      {extensions.map(type => (
        <Extension
          key={type}
          active={active === type}
          onClick={() => onTabClick(type)}
        >
          {type}
        </Extension>
      ))}
    </ButtonGroup>
  );
};
