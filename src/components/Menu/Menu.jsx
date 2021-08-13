import * as React from 'react';
import styled from 'styled-components';
import { Radio } from './Radio';

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
  margin: 20px 8px 0 8px;
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

const TitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 12px;
`;

const Title = styled.span`
  font-weight: 500;
  font-size: 1.1rem;
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

export const Menu = (props) => {
  const { title, items, onOptionSelect, } = props;

  return (
    <Container>
      <TitleContainer>
        <Title>{title}</Title>
        <TitleDivider />
      </TitleContainer>
      <OptionsStyle>
        {items.map((item) => (
          <Radio
            id={item.id}
            key={item.id}
            text={item.text}
            onRadioSelect={onOptionSelect}
            groupName={title}
          />
        ))}
      </OptionsStyle>
    </Container>
  );
};

/**
 *
 * Adobe Portable Document text (.pdf)
Adobe PostScript (.ps)
Autodesk Design Web text (.dwf)
Google Earth (.kml, .kmz)
GPS eXchange text (.gpx)
Hancom Hanword (.hwp)
HTML (.htm, .html, other file extensions)
Microsoft Excel (.xls, .xlsx)
Microsoft PowerPoint (.ppt, .pptx)
Microsoft Word (.doc, .docx)
OpenOffice presentation (.odp)
OpenOffice spreadsheet (.ods)
OpenOffice text (.odt)
Rich Text text (.rtf)
Scalable Vector Graphics (.svg)
TeX/LaTeX (.tex)
Text (.txt, .text, other file extensions), including source code in common programming languages:
Basic source code (.bas)
C/C++ source code (.c, .cc, .cpp, .cxx, .h, .hpp)
C# source code (.cs)
Java source code (.java)
Perl source code (.pl)
Python source code (.py)
Wireless Markup Language (.wml, .wap)
XML (.xml)
 */
