import { BraveLogo, DuckLogo, GoogleLogo } from '@/assets/logos';
import {
  ButtonGroup,
  Footer,
  Menu,
  SearchBar,
  SearchButton,
  TabGroup,
} from '@/components';
import { tabContext } from '@/contexts';
import { GlobalStyle } from '@/GlobalStyle';
import * as React from 'react';
import styled from 'styled-components';
import { useInput } from './hooks/useInput';

const LogoContainer = styled.div`
  margin: 100px 0 0 0;
`;

export const GoogleContainer = styled.div``;

export const searchEngines = [
  {
    searchEngine: 'Google',
    query: 'search?q=',
    logo: <GoogleLogo />,
  },
  {
    searchEngine: 'Brave',
    query: 'search?q=',
    logo: <BraveLogo />,
  },
  {
    searchEngine: 'DuckDuckGo',
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

export const publishDates = [
  {
    id: 1,
    text: 'Any time',
    urlFormat: '',
  },
  {
    id: 2,
    text: 'Past year',
    urlFormat: 'tbs=qdr:y',
  },
  {
    id: 3,
    text: 'Past month',
    urlFormat: 'tbs=qdr:m',
  },
  {
    id: 4,
    text: 'Past week',
    urlFormat: 'tbs=qdr:w',
  },
  {
    id: 5,
    text: 'Past day',
    urlFormat: 'tbs=qdr:d',
  },
];

const App = () => {
  const { contextValue } = React.useContext(tabContext);
  const inputProps = useInput();
  const inputValue = inputProps.value;
  const [selectedFileType, setSelectedFileType] = React.useState('');
  const [selectedDate, setSelectedDate] = React.useState({
    option: 'Any time',
    urlFormat: '',
  });

  const { searchEngine, query, extension } = contextValue;

  const BASE_URL = `https://${searchEngine}.com`;
  const SEARCH_QUERY = query + inputValue;
  const EXTENSION = '+site%3A' + extension;
  const FILETYPE =
    selectedFileType === '' ? '' : '+filetype%3A' + selectedFileType;

  const DATE =
    selectedDate.urlFormat === '' ? '' : '&' + selectedDate.urlFormat;

  const FULL_URL = `${BASE_URL}/${SEARCH_QUERY}${EXTENSION}${FILETYPE}${DATE}`;

  const onFileTypeSelect = (event) => {
    setSelectedFileType(event.target.value);
  };

  const onDateSelect = (event) => {
    setSelectedDate({
      option: event.target.value,
      urlFormat: publishDates.find((item) => item.text === event.target.value)
        .urlFormat,
    });
  };

  const onSearchClick = (event) => {
    console.log(`onSearchClick URL: ${FULL_URL}`);
    window.open(FULL_URL) || parent.open(FULL_URL);

    event.preventDefault();
  };

  const handleKeyPress = (event) => {
    event.keyCode == 13 || event.which === 13 ? onSearchClick(event) : null;
  };

  return (
    <>
      <GlobalStyle />
      <div className="App">
        <TabGroup tabs={searchEngines} />
        <LogoContainer>{contextValue.logo}</LogoContainer>
        <br />
        <p>
          Your {contextValue.searchEngine} search will be scoped to{' '}
          {contextValue.extension}
        </p>
        <div>
          <SearchBar
            searchEngine={contextValue.searchEngine}
            onKeyPress={handleKeyPress}
            {...inputProps}
          />

          <SearchButton type="submit" value="Search…" click={onSearchClick} />
          <br />
        </div>
        <ButtonGroup extensions={extensions} />
        <Menu
          title="File Type"
          items={file_format}
          onOptionSelect={onFileTypeSelect}
        />
        <Menu
          title="Date Published"
          items={publishDates}
          onOptionSelect={onDateSelect}
        />
        <br />
        <br />
        <span>{FULL_URL}</span>
        <Footer />
      </div>
    </>
  );
};

export default App;
