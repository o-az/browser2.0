import styled from 'styled-components';

const ButtonGroup = styled.ul`
  display: flex;
  width: 100%;
  height: 35px;
  margin: 5px 0 0 0;
  list-style-type: none;
`;

const Tab = styled.li`
  flex-grow: 1;
  font-size: 20px;
  color: hsl(0deg 0% 36%);
  border: 0;
  outline: 0;
  font-weight: bold;
  padding: 5px 0 0 0;
  cursor: pointer;
  ${({ active }) =>
    active &&
    `
    color: hsl(217deg 100% 63%);
    background-color: #fff;
    border-bottom: 2px solid hsl(217deg 100% 63%);
    opacity: 1;
  `};
`;

const Icon = styled.div``;

export {ButtonGroup, Tab, Icon}