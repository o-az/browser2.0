import styled from 'styled-components';

const Container = styled.footer`
  width: 100%;
  padding: 20px;
  position: relative;
  bottom: 0;
  left: 0;
  overflow: hidden;
  display: flex;
  height: 25px;
  grid-area: 3 / 1 / 4 / 4;
`;

const Signature = styled.span`
  grid-area: signature;
  width: 100%;
  font-size: 17px;
`;

const Toggler = styled.div`
  grid-area: theme;
`;

export { Container, Signature, Toggler };
