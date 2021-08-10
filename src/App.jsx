import * as React from 'react';
import styled from 'styled-components';
import { tabContext } from '@/contexts';
import { GlobalStyle } from '@/GlobalStyle';
import { BraveLogo, DuckLogo, GoogleLogo } from '@/assets/logos';
import {
  Extensions,
  SearchBar,
  SearchButton,
  TabGroup,
  Menu,
  Footer,
} from '@/components';

const LogoContainer = styled.div`
  margin: 100px 0 0 0;
`;

export const useInput = () => {
  const [value, setValue] = React.useState('');
  const onChange = (event) => {
    setValue(event.target.value);
    event.preventDefault();
  };
  return { value, onChange };
};

export const GoogleContainer = styled.div``;

export const engines = [
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

export const extensions = [
  {
    id: 1,
    title: 'Reddit',
    link: 'reddit.com',
  },
  {
    id: 2,
    title: 'Stackoverflow',
    link: 'stackoverflow.com',
  },
  {
    id: 3,
    title: 'Drive',
    link: 'drive.google.com',
  },
  {
    id: 4,
    title: 'YouTube',
    link: 'youtube.com',
  },
  {
    id: 5,
    title: 'Github',
    link: 'github.com',
  },
];

export const file_format = [
  {
    id: 1,
    text: 'pdf',
  },
  {
    id: 2,
    text: 'xlsx',
  },
  {
    id: 3,
    text: 'mp4',
  },
  {
    id: 4,
    text: 'docx',
  },
  {
    id: 5,
    text: 'txt',
  },
  {
    id: 6,
    text: 'svg',
  },
  {
    id: 7,
    text: 'git',
  },
];

export const time_duration = [
  {
    id: 1,
    text: 'Any time',
  },
  {
    id: 2,
    text: 'Past year',
  },
  {
    id: 3,
    text: 'Past 6 months',
  },
  {
    id: 4,
    text: 'Past month',
  },
  {
    id: 5,
    text: 'Past week',
  },
];

const App = () => {
  const { contextValue } = React.useContext(tabContext);
  const inputProps = useInput();
  const inputValue = inputProps.value;
  const [selectedFileType, setSelectedFileType] = React.useState('');
  const [selectedDate, setSelectedDate] = React.useState('Any time');

  const _contextValue = contextValue.engine.toLowerCase();
  const url = `https://${_contextValue}.com/${contextValue.query}${inputValue}+site%3A${contextValue.extension} filetype:${selectedFileType}`;

  const onFileTypeSelect = (event) => {
    setSelectedFileType(event.target.value);
    console.log(event.target.value);
  };

  const onDateSelect = (event) => {
    setSelectedDate(event.target.value);
    console.log(event.target.value);
  };

  const onSearchClick = (event) => {
    console.log(`onSearchClick URL: ${url}`);
    window.open(url) || parent.open(url);

    event.preventDefault();
  };

  const handleKeyPress = (event) => {
    event.keyCode == 13 || event.which === 13 ? onSearchClick(event) : null;
  };
  return (
    <>
      <GlobalStyle />
      <div className="App">
        <TabGroup tabs={engines} />
        <LogoContainer>{contextValue.logo}</LogoContainer>
        <br />
        <p>
          Your {contextValue.engine} search will be scoped to{' '}
          {contextValue.extension}
        </p>
        <div>
          <SearchBar
            engine={contextValue.engine}
            onKeyPress={handleKeyPress}
            {...inputProps}
          />

          <SearchButton type="submit" value="Search…" click={onSearchClick} />
          <br />
        </div>
        <Extensions extensions={extensions} />
        <Menu
          title="File Type"
          items={file_format}
          onOptionSelect={onFileTypeSelect}
        />
        <Menu
          title="Date Published"
          items={time_duration}
          onOptionSelect={onDateSelect}
        />

        <Footer />
      </div>
    </>
  );
};

export default App;
