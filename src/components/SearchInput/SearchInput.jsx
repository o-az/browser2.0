import * as React from 'react';
import { BraveRightSearchIcon } from '@assets/icons';
import {
  BaseContainer,
  Button,
  InnerContainer,
  StyledInput,
} from './SearchInput.styles';

export const SearchInput = (props) => (
  <BaseContainer>
    <InnerContainer>
      <Button disabled>
        <BraveRightSearchIcon />
      </Button>
      <StyledInput type="text" {...props} />
    </InnerContainer>
  </BaseContainer>
);
