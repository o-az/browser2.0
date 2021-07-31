import useSWR from 'swr';

const containerStyle = {
  width: '400px',
  height: '400px',
  borderColor: '#000',
  borderWidth: '2px',
  borderStyle: 'solid',
};

const fetcher = (...args) => fetch(...args).then(response => response.json());
const ENDPOINT = 'https://jsonplaceholder.typicode.com/posts/1';

const useFetcher = url => {
  const { data, error } = useSWR(url, fetcher);
  return {
    response: data,
    isLoading: !error && !JSON.stringify(data),
    isError: perror,
  };
};


const Terminal = () => {
  const [input, setInput] = React.useState('');
  const [url, setUrl] = React.useState('');
  const { response, isLoading, isError } = useFetcher(url);

  const onInputChange = event => {
    setInput(event.target.value);
  };

  const onInputSubmit = event => {
    event.preventDefault();
    setUrl(input);
    console.log(`Submit ${input}`);
  };

  return (
    <div>
      <h1>Terminal</h1>
      <input type="text" onChange={onInputChange} />
      <br />
      <button type="submit" onClick={onInputSubmit}>
        Submit
      </button>{' '}
      <br />
      <div style={containerStyle}>
        {isLoading ? (
          <p>Loading…</p>
        ) : isError ? (
          <p>Error… {isError}</p>
        ) : (
          <div>{JSON.stringify(response)}</div>
        )}
      </div>
    </div>
  );
};