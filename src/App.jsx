import { BraveLogo, DuckLogo, GoogleLogo } from '@/assets/logos';
import { Extensions, Input, SearchButton, TabGroup } from '@/components';
import * as React from 'react';
import styled from 'styled-components';
import { Options } from './components/Options';
import { tabContext } from './contexts';
import { GlobalStyle } from './GlobalStyle';

const LogoContainer = styled.div`
  margin: 100px 0 0 0;
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
    fullURL: function (value) {
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
  { title: 'Reddit', link: 'reddit.com' },
  { title: 'Drive', link: 'drive.google.com' },
  { title: 'YouTube', link: 'youtube.com' },
  { title: 'Stackoverflow', link: 'stackoverflow.com' },
  { title: 'Github', link: 'github.com' },
];

export const file_format = [
  {
    id: 1,
    format: "pdf",
  },
  {
    id: 2,
    format: "xlsx",
  },
  {
    id: 3,
    format: "mp4",
  },
  {
    id: 4,
    format: "docx",
  },
  {
    id: 5,
    format: "txt"
  },
  {
    id: 6,
    format: "svg"
  }
];

const App = () => {
  const { contextValue } = React.useContext(tabContext);
  const inputProps = useInput();
  const inputValue = inputProps.value;
  const [selectedFileType, setSelectedFileType] = React.useState('');

  const _contextValue = contextValue.engine.toLowerCase();
  const url = `https://${_contextValue}.com/${contextValue.query
    }${inputValue}+site%3A${contextValue.extension} filetype:${selectedFileType}`;

  const onFileTypeSelect = event => {
    setSelectedFileType(event.target.value);
    console.log(event.target.value)
  };

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
        <LogoContainer>{contextValue.logo}</LogoContainer>
        <br />
        <GoogleContainer>
          <Input
            engine={contextValue.engine}
            onKeyPress={handleKeyPress}
            {...inputProps}
          />

          <SearchButton
            type="submit"
            value="Search…"
            click={onSearchClick}
          />
        </GoogleContainer>
        <div>
          <p>
            Your {contextValue.engine} search will be scoped to{' '}
            {contextValue.extension}
          </p>
        </div>
        <Extensions extensions={extensions} />
        <Options
          title="File Type"
          items={file_format}
          onOptionSelect={onFileTypeSelect}
        />
      </div>
    </>
  );
};

export default App;