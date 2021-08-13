import * as React from 'react';
import styled from 'styled-components';

const ButtonGroup = styled.div`
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

const ButtonStyle = styled.button`
  display: flex;
  flex-direction: row;
  align-content: space-between;
  align-items: center;
  width: initial;
  height: 45px;
  cursor: pointer;
  margin: 0 0.5em 0.5em 0;
  padding: 0 8px 0 8px;
  border-radius: 0.12em;
  text-decoration: none;
  font-family: 'Roboto', sans-serif;
  font-weight: 500;
  font-size: 0.9rem;
  color: #000;
  transition: all 0.2s;
  border: 1px solid transparent;
  &:hover {
    background-color: #fff;
  }
  ${({ active }) =>
    active &&
    `
      background-color: #ffff;
      border: 1px solid #000;
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

export const Button = (props) => {
  const { title, onButtonClick, icon, active, } = props;

  return (
    <ButtonStyle active={active} onClick={onButtonClick}>
      <Icon src={icon} />
      <Text>{title}</Text>
    </ButtonStyle>
  );
};