import * as React from 'react';
import styled from 'styled-components';
import {
  SearchSVG,
  BraveLeftSearchIcon,
  BraveRightSearchIcon,
} from './SearchSVG';
// the hook
export const useInput = props => {
  const [value, setValue] = React.useState(props);
  const onChange = event => {
    setValue(event.target.value);
  };
  return { value, onChange };
};

const BaseContainer = styled.div`
  background: hsl(0deg 0% 100%);
  display: flex;
  height: 44px;
  margin: 10px auto;
  width: 400px;
  border: 1px solid hsl(220deg 10% 89%);
  box-shadow: none;
  border-radius: 24px;
  z-index: 3;
  &:hover {
    background-color: hsl(0deg 0% 100%);
    box-shadow: 0 1px 6px rgb(32 33 36 / 28%);
    border-color: hsl(220deg 10% 89% / 0%);
  }
`;

const InnerContainer = styled.div`
  font-family: Roboto,arial,sans-serif;
  color: #222;
  font-size: 14px;
  flex: 1;
  display: flex;
  flex-direction: row
  padding: 5px 8px 0 16px;
  padding-left: 14px;
`;

const StyledInput = styled.input`
  padding: 0.5em;
  margin: 0.5em;
  width: 100%;
  background: none;
  border: none;
  border-radius: 0px;
  &:focus-visible {
    outline: none;
  }
`;

// the component
const GoogleInput = props => {
  return (
    <BaseContainer>
      <InnerContainer>
        <StyledInput type="text" {...props} />
      </InnerContainer>
    </BaseContainer>
  );
};

const BraveBaseContainer = styled.div`
  display: flex;
  height: 44px;
  margin: 10px auto;
  width: 400px;
  line-height: 1.6;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', Arial,
    sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
  color: #3b4351;
  font-size: 0.8rem;
  text-rendering: optimizeLegibility;
  font-family: var(--main-font);
  box-sizing: inherit;
  max-width: calc(var(--search-form-width) + 2rem);
  border: 1px solid transparent;
  border-radius: 10px;
  &:hover {
    background-color: hsl(0deg 0% 100%);
    box-shadow: 0 1px 6px rgb(32 33 36 / 28%);
    border-color: hsl(220deg 10% 89% / 0%);
  }
`;

const BraveInnerContainer = styled.form`
  --search-form-height: 56px !important;
  --site-footer-height: 50px;
  color: #3b4351;
  font-size: 0.8rem;
  text-rendering: optimizeLegibility;
  font-family: var(--main-font);
  --vp: calc(100vh - var(--site-footer-height));
  --searchbox-pl: 0px !important;
  --search-icon-width: 46px !important;
  --search-total-gap: 0 !important;
  box-sizing: inherit;
  position: relative;
  display: flex;
  margin-bottom: 10px;
  max-width: inherit;
  align-items: center;
  height: 100%;
  z-index: 3;
  width: 100%;
  border: 1px solid transparent;
  border-radius: 10px;
  background-color: var(--bg-02);
  box-shadow: 0px 2px 8px rgba(37, 44, 54, 0.25);
  &:focus {
    background-color: hsl(0deg 0% 100%);
    box-shadow: 0 1px 6px rgb(32 33 36 / 28%);
    border-color: hsl(220deg 10% 89% / 0%);
  }
`;

const BraveSVGSpan = styled.span`
  box-sizing: inherit;
  font-family: 'Brave Search Icons';
  font-weight: normal;
  font-style: normal;
  letter-spacing: normal;
  text-transform: none;
  white-space: nowrap;
  word-wrap: normal;
  direction: ltr;
  -webkit-font-smoothing: antialiased;
  font-size: 18px;
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: center;
  min-width: var(--search-icon-width);
  order: 1;
  z-index: 3;
  color: var(--color-gray-2);
  opacity: 0.5 !important;
`;

const StyledBraveInput = styled.input.attrs(props => ({
  placeholder: 'Search the web privately…',
}))`
  box-sizing: inherit;
  font-family: inherit;
  margin: 0;
  overflow: visible;
  appearance: none;
  background: #fff;
  background-image: none;
  display: block;
  font-size: 0.8rem;
  line-height: 1.2rem;
  max-width: 100%;
  position: relative;
  transition: background 0.2s, border 0.2s, box-shadow 0.2s, color 0.2s;
  flex-grow: 1;
  width: auto;
  height: 100%;
  order: 2;
  border: none;
  outline: none;
  box-shadow: none;
  color: var(--color-primary);
  background-color: transparent;
  border-radius: 0;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  padding: 8px 18px;
  padding-left: var(--searchbox-pl);
`;

const BraveButton = styled.button`
  margin: 0;
  overflow: visible;
  text-transform: none;
  appearance: none;
  background: #fff;
  outline: 0;
  transition: background 0.2s, border 0.2s, box-shadow 0.2s, color 0.2s;
  user-select: none;
  vertical-align: middle;
  white-space: nowrap;
  font-family: 'Poppins', Arial, sans-serif;
  font-weight: 600;
  text-align: center;
  text-decoration: none;
  transition-property: background, color, opacity, border;
  transition-duration: 0.1s;
  transition-timing-function: ease-in-out;
  cursor: pointer;
  box-sizing: border-box;
  line-height: 20px;
  --height: 40px;
  --font-size: 13px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  order: 5;
  z-index: 2;
  border: none;
  width: 55px;
  border-radius: 0;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  padding: 0;
  flex-shrink: 0;
  &:hover {
    background: linear-gradient(
      302.53deg,
      hsl(236deg 60% 56%) 0%,
      hsl(310deg 81% 41%) 56.25%,
      hsl(8deg 93% 54%) 100%
    );
  }
`;

const BraveInput = props => (
  <BraveBaseContainer>
    <BraveInnerContainer>
      <BraveSVGSpan>
        <BraveLeftSearchIcon />
      </BraveSVGSpan>
      <StyledBraveInput type="text" {...props} />
      <BraveButton>
        <BraveRightSearchIcon />
      </BraveButton>
    </BraveInnerContainer>
  </BraveBaseContainer>
);

export const Input = props => {
  return props.engine === 'Google' ? (
    <GoogleInput {...props} />
  ) : props.engine === 'Brave' ? (
    <BraveInput {...props} />
  ) : (
    <input type="text" {...props} />
  );
};
