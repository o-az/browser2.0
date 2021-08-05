import * as React from 'react';
import styled from 'styled-components';
import { tabContext } from '../contexts/TabContext';
import { BraveIcon, RedditIcon } from '../assets/icons';
import { IconURLs } from '../assets/icons';

{
  /*
        <Extension
          key={type.title}
          active={active === type.title}
          onClick={() => onTabClick(type.title)}
        >
          {type.title}
        </Extension>
 

const Extension = styled.li`
  //flex-grow: 1;
  font-size: 20px;
  margin: 10px 0 0 0;
  cursor: pointer;
  opacity: 0.6;
  background-color: hsl(0deg 1% 57% / 16%);
  color: hsl(206deg 6% 25%);
  outline: 0;
  // font-family: "Montserrat";
  font-weight: bold;
  padding: 7px 10px 7px 10px;
  border: 1px solid hsl(206deg 6% 25%);
  //border-left: none;
  ${({ active }) =>
    active &&
    `
    color: hsl(217deg 100% 63%);
    border: none;
    border-top: 2px solid hsl(217deg 100% 63%);
    border-right: none;
    border-left: none;
    background-color: #fff;
    opacity: 1;
  `};
`;
// const ButtonText = styled.span`
//   vertical-align: middle;
//   display: inline-block;
// `;

// const ButtonIcon = styled.span`
//   vertical-align: middle;
//   display: inline-block;
//   background-image: url(${IconURLs.brave.color});
//   background-repeat: no-repeat;
//   background-size: contain;
// `;
*/
}

const ButtonGroup = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 90vw;
  max-width: 600px;
  //max-width: 600px;
  justify-content: flex-start;
  margin: 20px 0 0 0;
  border: 10px;
  border-radius: 10px;
  list-style-type: none;
`;

const Button = styled.button`
  // background-image: url(${IconURLs.brave.color});
  // background-repeat: no-repeat;
  // background-size: contain;
  display: flex;
  flex-direction: row;
  align-content: space-between;
  //justify-content: center;
  align-items: center;
  width: 160px;
  height: 45px;
  border: 0.1em solid #ffffff;
  margin: 0 0.5em 0.5em 0;
  border-radius: 0.12em;
  text-decoration: none;
  font-family: 'Roboto', sans-serif;
  font-weight: 500;
  color: #000;
  transition: all 0.2s;
  border: 2px solid transparent;
  &:hover {
    // color: #000000;
    background-color: #ffffff;
    border: 2px solid #000;
  }
  ${({ active }) =>
    active &&
    `
      background-color: #fff;
      border: 2px solid #000;
    `};
`;

const Text = styled.span`
  width: 100%;
`;
export const Extensions = props => {
  const { extensions } = props;
  const [active, setActive] = React.useState(extensions[0].title);
  const { contextValue, setContextValue } = React.useContext(tabContext);

  const onTabClick = type => {
    setActive(type);
    setContextValue({ ...contextValue, extension: type });
  };
  return (
    <ButtonGroup>
      {extensions.map(type => (
        <Button
          key={type.title}
          active={active === type.title}
          onClick={() => onTabClick(type.title)}
        >
          <img src={IconURLs[type.title.toLowerCase()].color} height="32" />
          <Text>{type.title}</Text>
        </Button>
      ))}
    </ButtonGroup>
  );
};
