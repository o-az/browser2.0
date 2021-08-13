import * as React from 'react';

export const useInput = () => {
  const [value, setValue] = React.useState('');
  const onChange = (event) => {
    setValue(event.target.value);
    event.preventDefault();
  };
  return { value, onChange };
};
