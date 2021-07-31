import React, { useState } from 'react';
import styled from 'styled-components';
import { tabContext } from '../contexts/TabContext';

const Tab = styled.button`
  font-size: 20px;
  padding: 10px 60px;
  cursor: pointer;
  opacity: 0.6;
  background: white;
  border: 0;
  outline: 0;
  ${({ active }) =>
    active &&
    `
    border-bottom: 2px solid black;
    opacity: 1;
  `};
`;
const ButtonGroup = styled.div`
  display: flex;
`;

export const TabGroup = props => {
  const { tabs } = props;
  const [active, setActive] = useState(tabs[0]);
  const { contextValues, setContextValues } = React.useContext(tabContext);

  const onTabClick = type => {
    //event.preventDefault();
    setActive(type);
    setContextValues(type);
  };
  return (
    <>
      <ButtonGroup>
        {tabs.map(type => (
          <Tab
            key={type}
            active={active === type}
            onClick={() => onTabClick(type)}
            //onClick={() => setActive(type)}
          >
            {type}
          </Tab>
        ))}
      </ButtonGroup>
    </>
  );
};
