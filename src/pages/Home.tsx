import { PreloadedQuery, usePreloadedQuery } from 'react-relay';
import graphql from 'babel-plugin-relay/macro';
import { HomeQuery } from './__generated__/HomeQuery.graphql';
import { PreparedRouteEntryProps } from 'yarr/dist/esm/types';
import { Link } from 'yarr';

type HomeProps = PreparedRouteEntryProps & {
  preloaded: {
    query: PreloadedQuery<HomeQuery>;
  };
};

export const Home = ({ preloaded }: HomeProps) => {
  const data = usePreloadedQuery<HomeQuery>(
    graphql`
      query HomeQuery {
        repository(owner: "erictaylor", name: "yarr") {
          name
        }
      }
    `,
    preloaded.query
  );

  return (
    <div>
      <h1>{data.repository && data.repository.name}</h1>

      <hr />

      <h3>Users</h3>
      <p><Link to="/erictaylor">Eric Taylor</Link></p>
      <p><Link to="/gajus">Gajus Kuizinas</Link></p>
    </div>
  );
};
