const strapi = require('@strapi/strapi');

// Set APP_KEYS explicitly if not set
if (!process.env.APP_KEYS) {
  process.env.APP_KEYS = 'key1,key2,key3,key4';
}

strapi({
  appDir: __dirname,
  distDir: __dirname + '/dist',
}).start();
