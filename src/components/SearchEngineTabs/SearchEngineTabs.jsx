import { tabContext } from '@contexts';
import React, { useState } from 'react';
import { Tab } from './SearchEngineTabs.styles';

/**
 * const ButtonGroup = styled.ul`
  display: flex;
  width: 100%;
  max-width: 700px;
  height: 35px;
  margin: 5px 0 0 0;
  list-style-type: none;
  grid-area: 1/1/1/4
`;

 */
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
  return tabs.map((type) => (
    <Tab
      key={type.searchEngine}
      active={active === type.searchEngine}
      onClick={() => onTabClick(type)}
    >
      {type.searchEngine}
    </Tab>
  ));
};
