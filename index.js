
function rewireGraphQLTag(config) {
  const gqlExtension = /\.(graphql|gql)$/

  const flatten = (array) => array.reduce((a, b) => a.concat(Array.isArray(b) ? flatten(b) : b), []);

  const fileLoader = flatten(config.module.rules.map((rule) => rule.oneOf || rule))
    .find((rule) => rule.loader && rule.loader.indexOf("file-loader")!==-1);
  
  fileLoader && fileLoader.exclude.push(gqlExtension);

  config.module.rules.push({
    test: gqlExtension,
    loader: 'graphql-tag/loader',
    exclude: /node_modules/
  });

  return config;
}

module.exports = rewireGraphQLTag;
