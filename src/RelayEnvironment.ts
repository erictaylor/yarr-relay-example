import {
  Environment,
  FetchFunction,
  Network,
  RecordSource,
  Store,
} from 'relay-runtime';

const REACT_APP_GITHUB_API_ACCESS_TOKEN =
  process.env.REACT_APP_GITHUB_API_ACCESS_TOKEN;

const fetchRelay: FetchFunction = async (request, variables) => {
  const response = await fetch('https://api.github.com/graphql', {
    method: 'POST',
    headers: {
      Authorization: `bearer ${REACT_APP_GITHUB_API_ACCESS_TOKEN}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: request.text,
      variables,
    }),
  });

  return await response.json();
};

export const RelayEnvironment = new Environment({
  network: Network.create(fetchRelay),
  store: new Store(new RecordSource()),
});
