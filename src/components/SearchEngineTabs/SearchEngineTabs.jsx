import React, { useState } from 'react';
import { tabContext } from '@contexts';
import { ButtonGroup, Icon, Tab } from './SearchEngineTabs.styles';

export const SearchEngineTabs = (props) => {
  const { tabs } = props;
  const [active, setActive] = useState(tabs[0].searchEngine);
  const { contextValue, setContextValue } = React.useContext(tabContext);

  const onTabClick = (type) => {
    setActive(type.searchEngine);
    setContextValue({
      ...contextValue,
      searchEngine: type.searchEngine,
      logo: type.logo,
      query: type.query,
    });
  };
  return (
    <ButtonGroup>
      <Icon />
      {tabs.map((type) => (
        <Tab
          key={type.searchEngine}
          active={active === type.searchEngine}
          onClick={() => onTabClick(type)}
        >
          {type.searchEngine}
        </Tab>
      ))}
    </ButtonGroup>
  );
};
