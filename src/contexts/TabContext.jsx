import * as React from 'react';
import { GoogleLogo } from '/src/assets/logos';
export const tabContext = React.createContext({});

function constructFullUrl(params) {
  return `${params.engine}.com/${params.query}${params.value}+site%3A${params.extension}`;
}

export const TabProvider = (props) => {
  const [contextValue, setContextValue] = React.useState({
    engine: 'Google',
    query: 'search?q=',
    logo: <GoogleLogo />,
    extension: 'reddit.com',
    // fullURL: function(value) {
    //   return `${this.engine}.com/${this.query}${value}+site%3A${this.extension}`;
    // },
  });
  const value = { contextValue, setContextValue };
  return (
    <tabContext.Provider value={value}>{props.children}</tabContext.Provider>
  );
};
