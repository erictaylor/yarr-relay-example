import { loadQuery } from 'react-relay';
import { createBrowserRouter } from 'yarr';
import { RelayEnvironment } from './RelayEnvironment';
import HomeQuery from './pages/__generated__/HomeQuery.graphql';
import UserQuery from './pages/__generated__/UserQuery.graphql';

const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

const routes = [
  {
    component: async () => {
      const module = await import('./pages/Home');
      
      return module.Home;
    },
    path: '/',
    preload: () => ({
      query: loadQuery(RelayEnvironment, HomeQuery, {}),
    }),
    children: [
      {
        component: async () => {
          const module = await import('./pages/User');

          await delay(3000);

          return module.User;
        },
        path: '/:login',
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
export const router = createBrowserRouter({ routes, awaitComponent: true, awaitPreload: true });
