import * as React from 'react';
import styled from 'styled-components';

const Span = styled.span`
  fill: currentColor;
  color: #9aa0a6;
  height: 20px;
  width: 24px;
  margin: 10px 0 0 0;
`;

export const SearchSVG = () => (
  <Span>
    <svg
      focusable="false"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
    </svg>
  </Span>
);

export const BraveLeftSearchIcon = () => (
  <svg
    width={15}
    height={15}
    viewBox="0 0 17 17"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M6.57212 13.1442C2.94254 13.1442 0 10.2016 0 6.57173C0 2.94248 2.94268 0 6.57212 0C10.2016 0 13.1442 2.94248 13.1442 6.57173C13.1442 8.05658 12.6519 9.42642 11.8215 10.5269L16.3528 15.0581C16.7103 15.4156 16.7103 15.9952 16.3528 16.3527C15.9953 16.7102 15.4157 16.7102 15.0582 16.3527L10.527 11.8215C9.42657 12.6519 8.05682 13.1442 6.57212 13.1442ZM6.57212 11.2665C3.97956 11.2665 1.87775 9.16463 1.87775 6.57184C1.87775 3.97952 3.97966 1.87775 6.57212 1.87775C9.16458 1.87775 11.2665 3.97952 11.2665 6.57184C11.2665 9.16463 9.16468 11.2665 6.57212 11.2665Z"
      fill="#C2C4CF"
    />
  </svg>
);

const Stop = styled.stop.attrs(props => ({
  // type: props.type || 'button',
  stopColor: props.baseColor,
  // size: props.size || '1rem'
}))`
  -webkit-text-size-adjust: 100%;
  -webkit-tap-highlight-color: transparent;
  --brand-font: 'Poppins', arial, sans-serif;
  --main-font: 'Poppins', arial, sans-serif;
  --mono-font: Consolas, Menlo, Monaco, monospace;
  --system-font: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', Arial,
    sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
  --main-column-width: 632px;
  --normal-snippet-width: 600px;
  --border-radius-xlarge: 16px;
  --border-radius-large: 12px;
  --border-radius: 8px;
  --border-radius-sm: 4px;
  --border-radius-xs: 2px;
  --border-radius-0: 0px;
  --text-sm: 0.66rem;
  --text-sm-2: 12px;
  --text-xs: 11px;
  --main-content-padding: 112px;
  --search-form-width: 642px !important;
  --search-form-height: 56px !important;
  --site-footer-height: 50px;
  --bg-0: #ffffff;
  --bg-01: #ffffff;
  --bg-02: #ffffff;
  --bg-glassy: #ffffffb3;
  --bg-1: #ebeef3;
  --bg-2: #e5e5e5;
  --bg-3: #f7f3f0;
  --bg-green: #a7f0ba;
  --bg-blue: #d0e2ff;
  --bg-red: #ffd6e8;
  --bg-inverse: #222;
  --bg-0-opacity: #ffffffbd;
  --bg-favicon: var(--bg-0);
  --bg-placeholder: #ebeef3;
  --color-primary: #27292f;
  --color-primary-2: #0d0c10;
  --color-primary-3: #212529;
  --color-inverse: #ffffff;
  --color-gray: #5a626d;
  --color-gray-2: #7c8086;
  --color-gray-3: #5a626d;
  --color-gray-4: #5a626d;
  --color-gray-5: #7e8790;
  --color-green: #0f9d58;
  --color-red: #d23f31;
  --color-blue: #0043ce;
  --link-primary: #1841d2;
  --link-secondary: #7885bf;
  --link-visited: #8739c5;
  --link-hover: #c61993;
  --theme-purple: #4c54d2;
  --theme-yellow: #f8be2d;
  --theme-brown: #392c1f;
  --border-color: #e2e8ed;
  --border-color-1: #e5e5e5;
  --border-color-favicon: #dee2f2;
  --text-02: #495057;
  --text-03: #868e96;
  --interactive-04: #353dab;
  --interactive-05: #4c54d2;
  --interactive-06: #737ade;
  --interactive-07: #212529;
  --interactive-08: #aeb1c2;
  --focus-border: #a0a5eb;
  --divider-01: #e9e9f4;
  --disabled: #dadce8;
  --btn-filled-bg: var(--interactive-05);
  --btn-filled-bg-hover: var(--interactive-04);
  --btn-filled-text: #ffffff;
  --btn-filled-text-active: rgba(255, 255, 255, 0.7);
  --btn-filled-bg-active: rgba(53, 61, 171, 0.7);
  --btn-filled-text-disabled: #ffff;
  --btn-outline-border: var(--interactive-08);
  --btn-outline-border-hover: var(--interactive-05);
  --btn-outline-text: var(--interactive-07);
  --btn-outline-text-hover: var(--interactive-05);
  --btn-outline-text-active: rgba(76, 84, 210, 0.7);
  --btn-outline-border-active: rgba(76, 84, 210, 0.7);
  --btn-outline-text-disabled: #c2c4cf;
  --btn-icon-svg-hover: var(--interactive-05);
  --btn-icon-bg-hover: rgba(160, 165, 235, 0.16);
  --btn-icon-svg-active: rgba(76, 84, 210, 0.7);
  --code-color-gray: #333;
  --code-bg-0: #f7f7f7;
  --code-color-1: #969896;
  --code-color-2: #183691;
  --code-color-3: #63a35c;
  --code-color-4: #0086b3;
  --code-color-5: #795da3;
  --code-color-6: #a71d5d;
  --shadow-1: 0 1px 1px 0 rgba(66, 66, 66, 0.08),
    0 1px 3px 1px rgba(66, 66, 66, 0.16);
  --shadow-2: 0 1px 6px rgba(32, 33, 36, 0.28);
  --body-bg: #eef2f6 !important;
  --modal-bg: rgb(0, 0, 0, 0.7);
  --blur: blur(4px);
  --vp: calc(100vh - var(--site-footer-height));
  --searchbox-pl: 0px !important;
  --search-icon-width: 46px !important;
  --search-total-gap: 0 !important;
  text-transform: none;
  user-select: none;
  white-space: nowrap;
  font-family: 'Poppins', Arial, sans-serif;
  font-weight: 600;
  text-align: center;
  cursor: pointer;
  line-height: 20px;
  --height: 40px;
  --font-size: 13px;
  font-size: var(--font-size);
  --color: var(--btn-filled-text);
  color: var(--color-gray-2);
  --size: 18px;
  fill: currentColor;
  box-sizing: inherit;
  &:hover {
    stop-color: #ffffff;
  }
`;

export const BraveRightSearchIcon = () => (
  <svg
    width={17}
    height={17}
    viewBox="0 0 17 17"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M6.57212 13.1442C2.94254 13.1442 0 10.2016 0 6.57173C0 2.94248 2.94268 0 6.57212 0C10.2016 0 13.1442 2.94248 13.1442 6.57173C13.1442 8.05658 12.6519 9.42642 11.8215 10.5269L16.3528 15.0581C16.7103 15.4156 16.7103 15.9952 16.3528 16.3527C15.9953 16.7102 15.4157 16.7102 15.0582 16.3527L10.527 11.8215C9.42657 12.6519 8.05682 13.1442 6.57212 13.1442ZM6.57212 11.2665C3.97956 11.2665 1.87775 9.16463 1.87775 6.57184C1.87775 3.97952 3.97966 1.87775 6.57212 1.87775C9.16458 1.87775 11.2665 3.97952 11.2665 6.57184C11.2665 9.16463 9.16468 11.2665 6.57212 11.2665Z"
      fill="url(#paint0_linear)"
    />
    <defs>
      <linearGradient
        id="paint0_linear"
        x1="16.6209"
        y1="16.6208"
        x2="-1.90605"
        y2="3.18655"
        gradientUnits="userSpaceOnUse"
      >
        <Stop baseColor="#BF14A2" />
        <Stop offset={1} baseColor="#F73A1C" />
      </linearGradient>
    </defs>
  </svg>
);
