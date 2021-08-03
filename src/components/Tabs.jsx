import React, { useState } from 'react';
import styled from 'styled-components';
import { tabContext } from '../contexts/TabContext';

const Tab = styled.button`
  flex-grow: 1;
  font-size: 20px;
  // padding: 10px 60px;
  cursor: pointer;
  opacity: 0.6;
  background-color: hsl(0deg 1% 57%);
  border: 0;
  outline: 0;
  ${({ active }) =>
    active &&
    `
    background-color: #fff;
   // border-bottom: 2px solid #fff;
    opacity: 1;
  `};
`;

const ButtonGroup = styled.div`
  display: flex;
  width: 100%;
  height: 30px;
`;

export const TabGroup = props => {
  const { tabs } = props;
  //tabs = tabs.map(i => i.engine);
  const [active, setActive] = useState(tabs[0].engine);
  const { contextValue, setContextValue } = React.useContext(tabContext);

  const onTabClick = type => {
    //event.preventDefault();
    setActive(type.engine);
    setContextValue({
      ...contextValue,
      engine: type.engine,
      logo: type.logo,
      query: type.query,
    });
  };
  return (
    <>
      <ButtonGroup>
        {tabs.map(type => (
          <Tab
            key={type.engine}
            active={active === type.engine}
            onClick={() => onTabClick(type)}
            //onClick={() => setActive(type)}
          >
            {type.engine}
          </Tab>
        ))}
      </ButtonGroup>
    </>
  );
};
