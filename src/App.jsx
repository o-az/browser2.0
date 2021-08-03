import * as React from 'react';
import './App.css';
import { tabContext } from './contexts/TabContext';
import { Input, TabGroup, SearchButton, Extensions } from './components';
import styled from 'styled-components';
import { GoogleLogo, DuckLogo, BraveLogo } from './assets/logos';

const Container = styled.div`
  width: 100%;
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

const extensions = ['reddit.com', 'drive.google.com', 'youtube.com'];
// const searchScopes = ['reddit.com', 'drive.google.com'];
const App = () => {
  const { contextValue } = React.useContext(tabContext);
  const inputProps = useInput();
  const inputValue = inputProps.value;
  // Spaces are replaced with +s in the search query
  // const _inputValue = inputValue.replace(' ', '%20');
  /**
   *
   * https://www.google.com/search?q=abcd+site%3Areddit.com&source=hp&ei=2loIYcfrDLPS5NoPtvyBaA&iflsig=AINFCbYAAAAAYQho6vee5GlrVs3JdAOEHWpIViaeIWXf&oq=abcd+site%3Areddit.com
   */
  const _contextValue = contextValue.engine.toLowerCase();
  const url = `https://${_contextValue}.com/${
    contextValue.query
  }${inputValue}%3A${contextValue.extension}`;

  const onSearchClick = event => {
    console.log(url);
    parent.open(url);

    event.preventDefault();
  };
  console.log(contextValue);
  return (
    <div className="App">
      <TabGroup tabs={engines} />
      <Extensions extensions={extensions} />
      <Container>
        {contextValue.logo}
        <br />
        <GoogleContainer>
          <Input engine={contextValue.engine} {...inputProps} />
          <SearchButton value="Search…" click={onSearchClick} />
        </GoogleContainer>
        <div>
          <p>{contextValue.extension}</p>
          <p>{contextValue.engine}</p>
          <p>{contextValue.query}</p>
          <p>{url}</p>
        </div>
      </Container>
    </div>
  );
};

export default App;
