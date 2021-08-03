import * as React from 'react';
import { GoogleLogo } from '/src/assets/logos';
export const tabContext = React.createContext({});

export const TabProvider = props => {
  const [contextValue, setContextValue] = React.useState({
    engine: 'Google',
    query: 'search?q=',
    logo: <GoogleLogo />,
    extension: 'reddit.com',
  });
  const value = { contextValue, setContextValue };
  return (
    <tabContext.Provider value={value}>{props.children}</tabContext.Provider>
  );
};
