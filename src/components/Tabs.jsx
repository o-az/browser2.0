import React, { useState } from 'react';
import styled from 'styled-components';
import { tabContext } from '../contexts/TabContext';

const Tab = styled.li`
  flex-grow: 1;
  font-size: 20px;
  cursor: pointer;
  opacity: 0.6;
  background-color: hsl(0deg 1% 57% / 16%);
  color: hsl(0deg 0% 36%);
  border: 0;
  outline: 0;
  // font-family: "Montserrat";
  font-weight: bold;
  padding: 5px 0 0 0;
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
  width: 100%;
  height: 35px;
  margin: 5px 0 0 0;
  list-style-type: none;
`;

export const TabGroup = props => {
  const { tabs } = props;
  const [active, setActive] = useState(tabs[0].engine);
  const { contextValue, setContextValue } = React.useContext(tabContext);

  const onTabClick = type => {
    setActive(type.engine);
    setContextValue({
      ...contextValue,
      engine: type.engine,
      logo: type.logo,
      query: type.query,
    });
  };
  return (
    <ButtonGroup>
      {tabs.map(type => (
        <Tab
          key={type.engine}
          active={active === type.engine}
          onClick={() => onTabClick(type)}
        >
          {type.engine}
        </Tab>
      ))}
    </ButtonGroup>
  );
};
