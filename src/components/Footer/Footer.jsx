import * as React from 'react';
import styled from 'styled-components';

/**
 *   padding: 24px 50px;
  color: hsl(0deg 0% 0% / 85%);
  font-size: 14px;
  background: hsl(216deg 20% 95%);
}


 */
const Container = styled.footer`
  width: 100%;
  padding: 20px;
  position: fixed;
  bottom: 0;
  left: 0;
  overflow: hidden;
  display: grid;
  grid-template-areas: 'empty signature theme';
`;

const Signature = styled.span`
  grid-area: signature;
  width: 100%;
  font-size: 17px;
`;

export const Toggler = styled.div`
  grid-area: theme;
`
export const Footer = () => {
  return (
    <Container>
      <Signature>
        {'Made w/ <3 by '}
        <a target="_blank" href="https://omars.io">
          omars.io
        </a>
      </Signature>
      <Toggler>
       in progress
      </Toggler>
    </Container>
  );
};
