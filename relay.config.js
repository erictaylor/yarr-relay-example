module.exports = {
  exclude: [
    '**/node_modules/**',
    '**/__mocks__/**',
    '**/__generated__/**'
  ],
  extensions: ['ts', 'tsx'],
  language: 'typescript',
  schema: './schema.graphql',
  src: './src'
};