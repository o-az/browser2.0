import styled from 'styled-components';

const BaseContainer = styled.div`
  display: flex;
  height: 44px;
  margin: 10px auto;
  width: 90vw;
  max-width: 600px;
  line-height: 1.6;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', Arial,
    sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
  color: #3b4351;
  font-size: 0.8rem;
  text-rendering: optimizeLegibility;

  box-sizing: inherit;
  // max-width: calc(var(--search-form-width) + 2rem);
  border: 1px solid transparent;
  border-radius: 10px;
  &:hover {
    background-color: hsl(0deg 0% 100%);
    box-shadow: 0 1px 6px rgb(32 33 36 / 28%);
    border-color: hsl(220deg 10% 89% / 0%);
  }
`;
const InnerContainer = styled.form`
  color: #3b4351;
  font-size: 0.8rem;
  text-rendering: optimizeLegibility;

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
  box-shadow: 0px 2px 8px rgba(37, 44, 54, 0.25);
  &:focus {
    background-color: hsl(0deg 0% 100%);
    box-shadow: 0 1px 6px rgb(32 33 36 / 28%);
    border-color: hsl(220deg 10% 89% / 0%);
  }
`;

const SVGSpan = styled.span`
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
  order: 1;
  z-index: 3;
  opacity: 0.5 !important;
`;

const StyledInput = styled.input.attrs((props) => ({
  placeholder: 'Search the web conveniently …',
}))`
  box-sizing: inherit;
  font-family: inherit;
  margin: 0;
  overflow: visible;
  appearance: none;
  background: #fff;
  background-image: none;
  display: block;
  font-size: 0.9rem;
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
  background-color: transparent;
  border-radius: 0;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  padding: 8px 18px;
  padding-left: 0px;
`;

const Button = styled.button`
  margin: 0;
  overflow: visible;
  text-transform: none;
  appearance: none;
  background: #fff;
  outline: 0;
  transition: background 0.2s, border 0.2s, box-shadow 0.2s, color 0.2s;
  user-select: none;
  white-space: nowrap;
  font-family: 'Poppins', Arial, sans-serif;
  font-weight: 600;
  text-align: center;
  text-decoration: none;
  transition-property: background, color, opacity, border;
  transition-duration: 0.1s;
  transition-timing-function: ease-in-out;
  // cursor: none;
  box-sizing: border-box;
  line-height: 20px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  //order: 5;
  z-index: 2;
  border: none;
  width: 55px;
  border-radius: 0;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  padding: 0;
  flex-shrink: 0;
`;

export { BaseContainer, InnerContainer, SVGSpan, StyledInput, Button };
