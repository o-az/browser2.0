import * as React from 'react';
import { IconURLs } from '@assets';
import { tabContext } from '@contexts';
import { SiteButton } from '../SiteButton';
import { Container } from './SitesButtons.styles';

export const SitesButtons = (props) => {
  const { extensions } = props;
  const [active, setActive] = React.useState(extensions[0].title);
  const { contextValue, setContextValue } = React.useContext(tabContext);

  const onButtonClick = (type) => {
    setActive(type.title);
    setContextValue({ ...contextValue, extension: type.link });
  };

  return (
    <Container>
      {extensions.map((type) => (
        <SiteButton
          key={type.title}
          title={type.title}
          icon={IconURLs[type.title.toLowerCase()].color}
          onButtonClick={() => onButtonClick(type)}
          active={active === type.title}
        />
      ))}
    </Container>
  );
};
