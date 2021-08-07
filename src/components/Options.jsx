import * as React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: grid;
  width: 600px;
  height: 80px;
  align-content: center;
  justify-items: start;
  align-items: stretch;
  row-gap: 20px;
  margin: 20px 8px 20px 8px;


`
const OptionsStyle = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 50px;
  justify-content: flex-start;
`

const RadioContainer = styled.div`
  display: flex;
  column-gap: 10px;
`;

const RadioButton = styled.input`
  vertical-align: middle;
  margin: 2.3px 0 0 0;
`

const RadioLabel = styled.label`
`

const TitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 12px;
`;

const Title = styled.span`
  font-weight: 500;
  font-size: 1.2rem;
`

const TitleDivider = styled.div`
  height: 1px;
  width: 450px;
  margin: 6px 0 0 0;
  background: grey;
`

export const Radio = props => {
  const { text, onRadioSelect } = props;

  return (
    <RadioContainer>
      <RadioButton type="radio" name="radio" value={text} onChange={onRadioSelect} />
      <RadioLabel>{text}</RadioLabel>
    </RadioContainer>
  )
}

export const Options = props => {
  const { title, items, onOptionSelect } = props;

  return (
    <Container>
      <TitleContainer>
        <Title>{title}</Title>
        <TitleDivider />
      </TitleContainer>
      <OptionsStyle>
        {items.map(item => (
          <Radio key={item.id} text={item.format} onRadioSelect={onOptionSelect} />
        ))}
      </OptionsStyle>
    </Container>
  )
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