var router = require('base-apps-router');

router({
  src: './src/**/*.html',
  dest: './build/templates',
  path: './src/app/config-routes.js',
  library: 'node',
  overwrite: true,
  root: './src/'
}).then(() => {
  console.log('Base Apps Router complete!');
});
