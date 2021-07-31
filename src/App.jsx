import * as React from 'react';
import './App.css';
import { tabContext } from './contexts/TabContext';
import {Input, TabGroup, SearchButton} from './components';
import styled from 'styled-components';

const Container = styled.div`
  width: 400px;
  height: 70px;
  border-color: '#000';
  border-width: 1px;
  border-style: solid;
  margin: 25px 0 0 0;
`;

export const Debug = ({ children }) => {
  return <Container>{children}</Container>;
};

export const useInput = () => {
  const [value, setValue] = React.useState('');
  const onChange = event => {
    setValue(event.target.value);
    event.preventDefault();
  };
  return { value, onChange };
};

const searchEngines = ['Google', 'DuckDuckGo', 'Brave'];
const searchScopes = ['reddit.com', 'drive.google.com'];
const App = () => {
  const { contextValues, } = React.useContext(tabContext);
  const inputProps = useInput();
  const inputValue = inputProps.value;
  // Spaces are replaced with +s in the search query
  // const _inputValue = inputValue.replace(' ', '%20');
  const _contextValues = contextValues.toLowerCase();

  const onSearchClick = event => {

    let url = `https://${contextValues}.com`;
    _contextValues === 'google' || 'brave' ? 
      url = `${url}/search?q=` : 
      _contextValues === 'duckduckgo' ? 
      url = `${url}/?q=` : ''

    console.log(`${url}${inputValue}`);
    parent.open(`${url}${inputValue}`);

    event.preventDefault();
  };
  return (
    <div className="App">
      <TabGroup tabs={searchEngines} />
      <TabGroup tabs={searchScopes} />
      <h1>Hello {contextValues}</h1>
      <br/>
      <Input {...inputProps} />
      <SearchButton value="Search…" click={onSearchClick} />
      <Debug
        children={
          inputValue ? (
            <p>{`https://${contextValues}.com/search?q=${inputValue}`}</p>
          ) : (
            undefined
          )
        }
      />
    </div>
  );
};

export default App;
