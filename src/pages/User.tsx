import { PreloadedQuery, usePreloadedQuery } from 'react-relay';
import graphql from 'babel-plugin-relay/macro';
import { UserQuery } from './__generated__/UserQuery.graphql';
import { PreparedRouteEntryProps } from 'yarr/dist/esm/types';
import { Link } from 'yarr';

type UserProps = PreparedRouteEntryProps & {
  params: {
    login: string;
  };
  preloaded: {
    query: PreloadedQuery<UserQuery>;
  };
};

export const User = ({ preloaded }: UserProps) => {
  const data = usePreloadedQuery<UserQuery>(
    graphql`
      query UserQuery($login: String!) {
        user(login: $login) {
          bio
          id
          login
          name
          url
        }
      }
    `,
    preloaded.query,
  );

  return (
    <div>
      <h1>User</h1>

      <Link to="/">Back to home</Link>

      {data.user && (<>
        <p>{data.user.id}</p>
        <p>{data.user.login}</p>
        <p>{data.user.name}</p>
        <p>{data.user.bio}</p>
        <p>{data.user.url as string}</p>
      </>)}
    </div>
  );
};
