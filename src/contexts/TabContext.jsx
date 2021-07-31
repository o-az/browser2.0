import * as React from 'react';

export const tabContext = React.createContext({
  contextValues: {
    engine: 'Google',
    scope: 'reddit.com',
  },
  setContextValues: () => {},
});

export const TabProvider = props => {
  const [contextValues, setContextValues] = React.useState('Google');
  // const ctxValues = {
  //   tabCtxValue, setTabCtxValue
  // }
  return (
    <tabContext.Provider value={{ contextValues, setContextValues }}>
      {props.children}
    </tabContext.Provider>
  );
};
