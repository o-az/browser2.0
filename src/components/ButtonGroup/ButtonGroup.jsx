import * as React from 'react';
import styled from 'styled-components';
import { IconURLs } from '@/assets/icons';
import { Button } from './Button';
import { tabContext } from '@/contexts/TabContext';

const Container = styled.div`
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

export const ButtonGroup = (props) => {
  const { extensions } = props;
  const [active, setActive] = React.useState(extensions[0].title);
  const { contextValue, setContextValue } = React.useContext(tabContext);

  const onTabClick = (type) => {
    setActive(type);
    setContextValue({ ...contextValue, extension: type });
  };
  return (
    <Container>
      {extensions.map((type) => (
        <Button
          key={type.title}
          title={type.title}
          icon={IconURLs[type.title.toLowerCase()].color}
          onTabClick={onTabClick}
          active={active === type.title}
        />
      ))}
    </Container>
  );
};
