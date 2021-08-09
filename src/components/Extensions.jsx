import * as React from 'react';
import styled from 'styled-components';
import { tabContext } from '../contexts/TabContext';
import { BraveIcon, RedditIcon } from '../assets/icons';
import { IconURLs } from '../assets/icons';

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
  width: initial;
  height: 45px;
  cursor: pointer;
  border: 0.1em solid #ffffff;
  margin: 0 0.5em 0.5em 0;
  padding: 0 8px 0 8px;
  border-radius: 0.12em;
  text-decoration: none;
  font-family: 'Roboto', sans-serif;
  font-weight: 500;
  font-size: 0.9rem;
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
  margin-top: 5px;
  font-stretch: ultra-condensed;
  letter-spacing: initial;
`;

const Icon = styled.img`
  height: 32px;
  margin: 0 5px 0 0;
`;

export const Extensions = (props) => {
  const { extensions } = props;
  const [active, setActive] = React.useState(extensions[0].title);
  const { contextValue, setContextValue } = React.useContext(tabContext);

  const onTabClick = (type) => {
    setActive(type);
    setContextValue({ ...contextValue, extension: type });
  };
  return (
    <ButtonGroup>
      {extensions.map((type) => (
        <Button
          key={type.title}
          active={active === type.title}
          onClick={() => onTabClick(type.title)}
        >
          <Icon src={IconURLs[type.title.toLowerCase()].color} />
          {/* <img src={IconURLs[type.title.toLowerCase()].color} height="32" /> */}
          <Text>{type.title}</Text>
        </Button>
      ))}
    </ButtonGroup>
  );
};
