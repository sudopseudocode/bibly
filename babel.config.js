/* eslint global-require: off */
/* eslint import/no-extraneous-dependencies: off */

const developmentEnvironments = ['development', 'test'];

const developmentPlugins = [require('react-hot-loader/babel')];

const productionPlugins = [
  require('babel-plugin-dev-expression'),

  // These plugins are for optimizing production builds
  require('@babel/plugin-transform-react-constant-elements'),
  require('@babel/plugin-transform-react-inline-elements'),
  require('babel-plugin-transform-react-remove-prop-types'),
];

module.exports = (api) => {
  // see docs about api at https://babeljs.io/docs/en/config-files#apicache
  const development = api.env(developmentEnvironments);

  return {
    presets: [
      [
        require('@babel/preset-env'),
        {
          targets: { electron: require('electron/package.json').version },
          useBuiltIns: 'usage',
        },
      ],
      [require('@babel/preset-react'), { development }],
    ],
    plugins: [
      ...(development ? developmentPlugins : productionPlugins),
    ],
  };
};
