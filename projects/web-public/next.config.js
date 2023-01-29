const withPlugins = require('next-compose-plugins');
const withTM = require('next-transpile-modules')([
  '@project/design-system',
  '@project/utils'
]);
/*
  Biblioteca externa precisa ser 'compilada' antes
  para o next entender

  yarn web-public add -D next-compose-plugins next-transpile-modules
 */

/**
 * @type {import('next').NextConfig}
 */
module.exports = withPlugins([withTM], {
  // ...
});
