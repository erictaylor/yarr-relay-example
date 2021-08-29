import graphql from 'babel-plugin-relay/macro';
import './App.css';
import { loadQuery, PreloadedQuery, RelayEnvironmentProvider, usePreloadedQuery } from 'react-relay';
import { RelayEnvironment } from './RelayEnvironment';
import { Suspense } from 'react';
import { AppRepositoryNameQuery } from './__generated__/AppRepositoryNameQuery.graphql';


const RepositoryNameQuery = graphql`
  query AppRepositoryNameQuery {
    repository(owner: "erictaylor", name: "yarr") {
      name
    }
  }
`;

const preloadedQuery = loadQuery<AppRepositoryNameQuery>(RelayEnvironment, RepositoryNameQuery, {});



function App(props: { preloadedQuery: PreloadedQuery<AppRepositoryNameQuery, {}> }) {
  const data = usePreloadedQuery<AppRepositoryNameQuery>(RepositoryNameQuery, props.preloadedQuery)

  return (
    <div className="App">
      <header className="App-header">
        <p>{data.repository && data.repository.name}</p>
      </header>
    </div>
  );
}

function AppRoot() {
  return (
    <RelayEnvironmentProvider environment={RelayEnvironment}>
      <Suspense fallback="Loading...">
        <App preloadedQuery={preloadedQuery} />
      </Suspense>
    </RelayEnvironmentProvider>
  );
}

export default AppRoot;
