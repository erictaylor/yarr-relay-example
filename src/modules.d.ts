
declare module 'babel-plugin-relay/macro' {
  import { GraphQLTaggedNode } from 'react-relay';
  
  export default function graphql(strings: unknown): GraphQLTaggedNode;
};