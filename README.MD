# react-app-rewire-graphql-tag

## Usage:

Make sure you have installed [react-app-rewire](https://github.com/timarney/react-app-rewired)
```
yarn add react-app-rewire-graphql-tag --dev
```
In config-overrides.js:
```
const { override } = require('customize-cra')

const graphqlTag = require('react-app-rewire-graphql-tag')

module.exports = override(
  graphqlTag
)
```
