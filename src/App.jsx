import { BraveLogo, DuckLogo, GoogleLogo } from '@assets';
import {
  Footer,
  Menu,
  SearchButton,
  SearchEngineTabs,
  SearchInput,
  SitesButtons,
} from '@components';
import { tabContext } from '@contexts';
import { useInput } from '@hooks';
import * as React from 'react';
import styled from 'styled-components';

export const MenusContainer = styled.div`
  margin: 0 0 25px 0;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

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

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  grid-area: 2 / 1 / 3 / 4;
  width: 100%;
`;

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
    <div className="grid grid-cols-[25px,5fr,25px] grid-rows-[50px,20fr,80px] gap-1 justify-center justify-items-center text-center">
      <div className="flex w-full justify-center justify-items-center text-center row-start-1 col-start-1 row-end-1 col-end-4">
        <ul className="w-24 space-x-6 md:space-x-28 flex justify-center h-9 self-center list-none">
          <SearchEngineTabs tabs={searchEngines} />
        </ul>
      </div>
      <div className="flex flex-col items-center justify-center row-start-2 col-start-1 row-end-3 col-end-4 w-30">
        <div className="mt-28">{contextValue.logo}</div>
        <br />
        <div className="px-10">
          Your {contextValue.searchEngine} search will be scoped to{' '}
          {contextValue.extension}
        </div>
        <div>
          <SearchInput
            searchEngine={contextValue.searchEngine}
            onKeyPress={handleKeyPress}
            {...inputProps}
          />
          <SearchButton
            className="rounded cursor-pointer font-medium h-10 text-base leading-7 mx-0 mb-0 mt-3 text-center select-none w-full"
            type="submit"
            value="Search…"
            click={onSearchClick}
          />
          <br />
        </div>
        <SitesButtons extensions={extensions} />
        <MenusContainer>
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
        </MenusContainer>
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default App;
