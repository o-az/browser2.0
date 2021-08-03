import * as React from 'react';
import { GlobalStyle } from './GlobalStyle';
import { tabContext } from './contexts';
import { Input, TabGroup, SearchButton, Extensions } from './components';
import styled from 'styled-components';
import { GoogleLogo, DuckLogo, BraveLogo } from './assets/logos';

const LogoContainer = styled.div`
  margin: 175px 0 0 0;
`;

export const useInput = () => {
  const [value, setValue] = React.useState('');
  const onChange = event => {
    setValue(event.target.value);
    event.preventDefault();
  };
  return { value, onChange };
};

export const GoogleContainer = styled.div``;

const engines = [
  {
    engine: 'Google',
    query: 'search?q=',
    logo: <GoogleLogo />,
    fullURL: function(value) {
      return `${this.engine}.com/${this.query}${value}`;
    },
  },
  {
    engine: 'Brave',
    query: 'search?q=',
    logo: <BraveLogo />,
  },
  {
    engine: 'DuckDuckGo',
    query: '?q=',
    logo: <DuckLogo />,
  },
];

const extensions = [
  'Reddit',
  'drive.google.com',
  'youtube.com',
  'stackoverflow.com',
  'github.com',
];

const App = () => {
  const { contextValue } = React.useContext(tabContext);
  const inputProps = useInput();
  const inputValue = inputProps.value;

  const _contextValue = contextValue.engine.toLowerCase();
  const url = `https://${_contextValue}.com/${
    contextValue.query
  }${inputValue}+site%3A${contextValue.extension}`;

  const onSearchClick = event => {
    console.log(`onSearchClick URL: ${url}`);
    window.open(url) || parent.open(url);

    event.preventDefault();
  };

  const handleKeyPress = event => {
    event.keyCode == 13 || event.which === 13 ? onSearchClick(event) : null;
  };
  return (
    <>
      <GlobalStyle />
      <div className="App">
        <TabGroup tabs={engines} />
        <Extensions extensions={extensions} />
        <LogoContainer>{contextValue.logo}</LogoContainer>
        <br />
        <GoogleContainer>
          <Input
            engine={contextValue.engine}
            onKeyPress={handleKeyPress}
            {...inputProps}
          />
          <SearchButton type="submit" value="Search…" click={onSearchClick} />
        </GoogleContainer>
        <div>
          <p>Your {contextValue.engine} search will be scoped to {contextValue.extension}</p>
        </div>
      </div>
    </>
  );
};

export default App;
