import { loadQuery } from 'react-relay';
import { createBrowserRouter } from 'yarr';
import { RelayEnvironment } from './RelayEnvironment';
import HomeQuery from './pages/__generated__/HomeQuery.graphql';
import UserQuery from './pages/__generated__/UserQuery.graphql';

const routes = [
  {
    component: () => import('./pages/Home').then(module => module.Home),
    path: '/',
    preload: () => ({
      query: loadQuery(RelayEnvironment, HomeQuery, {}),
    }),
    children: [
      {
        component: () => import('./pages/User').then(module => module.User),
        path: ':login',
        preload: ({ login }: { login: string }) => ({
          query: loadQuery(RelayEnvironment, UserQuery, { login }),
        }),
      }
    ]
  },
  {
    component: () => import('./pages/NotFound').then(module => module.NotFound),
    path: '*',
  }
];

// @ts-expect-error
export const router = createBrowserRouter({ routes });
