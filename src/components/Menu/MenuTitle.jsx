import * as React from 'react';
import styled from 'styled-components';

const TitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 12px;
`;

const Title = styled.span`
  font-weight: 500;
  font-size: 1.2rem;
  word-break: keep-all;
  white-space: nowrap;
`;

const TitleDivider = styled.hr`
  height: 1px;
  width: 90%;
  max-width: 600px;
  margin: 6px 0 0 0;
  background: grey;
`;

export const SectionTitle = (props) => {
  const { title } = props;

  return (
    <TitleContainer>
      <Title>{title}</Title>
      <TitleDivider />
    </TitleContainer>
  );
};
