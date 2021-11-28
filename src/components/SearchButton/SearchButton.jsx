import * as React from 'react';
import { StyledSearchButton } from './SearchButton.styles';

export const SearchButton = (props) => {
  const { value, click, className } = props;
  return (
    <input
    className={className}
      value={value}
      type="submit"
      onClick={click}
    />
  );
};
