import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 600px;
  width: 90vw;
  height: 80px;
  align-content: center;
  justify-items: start;
  align-items: stretch;
  row-gap: 20px;
  margin: 10px 8px 0 8px;
`;

const OptionsStyle = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 4%;
  row-gap: 15px;
  justify-content: flex-start;
  margin: 0 0 0 2px;
`;


export { Container, OptionsStyle };
