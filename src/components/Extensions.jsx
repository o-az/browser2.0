import React, { useState } from 'react';
import styled from 'styled-components';
import { tabContext } from '../contexts/TabContext';

const Extension = styled.button`
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

export const Extensions = props => {
  const { extensions } = props;
  //extensions = extensions.map(i => i.engine);
  const [active, setActive] = useState(extensions[0]);
  const { contextValue, setContextValue } = React.useContext(tabContext);

  const onTabClick = type => {
    //event.preventDefault();
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
          //onClick={() => setActive(type)}
        >
          {type}
        </Extension>
      ))}
    </ButtonGroup>
  );
};
