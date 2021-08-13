import * as React from 'react';
import { StyledSearchButton } from './SearchButton.styles';

export const SearchButton = (props) => {
  const { value, click } = props;
  return <StyledSearchButton value={value} type="submit" onClick={click} />;
};
