import './App.css';
import { RelayEnvironmentProvider } from 'react-relay';
import { RelayEnvironment } from './RelayEnvironment';
import { Suspense } from 'react';
import { RouteRenderer, RouterProvider } from 'yarr';
import { router } from './router';
import { ErrorBoundary } from 'react-error-boundary';



function App() {
  return (
    <RelayEnvironmentProvider environment={RelayEnvironment}>
      <RouterProvider router={router}>
        <ErrorBoundary FallbackComponent={() => <div>Something went wrong</div>}>
        <Suspense fallback={<div>Loading...</div>}>
          <RouteRenderer />
          </Suspense>
          </ErrorBoundary>
      </RouterProvider>
      </RelayEnvironmentProvider>
  );
}

export default App;
