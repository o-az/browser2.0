import React, { useState } from 'react';
import styled from 'styled-components';
import { IconURLs } from '../assets/icons';
import { tabContext } from '../contexts/TabContext';

const ButtonGroup = styled.ul`
  display: flex;
  width: 100%;
  height: 35px;
  margin: 5px 0 0 0;
  list-style-type: none;
`;

/**
 *
 * Google color
 */

const Tab = styled.li`
  flex-grow: 1;
  font-size: 20px;
  // cursor: pointer;
  // opacity: 0.6;
  // background-color: hsl(0deg 1% 57% / 16%);
  color: hsl(0deg 0% 36%);
  border: 0;
  outline: 0;
  // font-family: "Montserrat";
  font-weight: bold;
  padding: 5px 0 0 0;
  cursor: pointer;
  //background-image: url(${IconURLs.google.color});
  //background-repeat: no-repeat;
  // background-size: contain;
  ${({ active }) =>
    active &&
    `
   // background-image: url(${IconURLs.duckduckgo.color});
    color: hsl(217deg 100% 63%);
    background-color: #fff;
    border-bottom: 2px solid hsl(217deg 100% 63%);
    opacity: 1;
  `};
`;

const Icon = styled.div``;

export const TabGroup = (props) => {
  const { tabs } = props;
  const [active, setActive] = useState(tabs[0].engine);
  const { contextValue, setContextValue } = React.useContext(tabContext);

  const onTabClick = (type) => {
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
      <Icon />
      {tabs.map((type) => (
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
