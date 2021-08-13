import * as React from 'react';
import { Container, Signature, Toggler } from './Footer.styles'
export const Footer = () => {
  return (
    <Container>
      <Signature>
        {/* {'Made w/ <3 by '} */}
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
