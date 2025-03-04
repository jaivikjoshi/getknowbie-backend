module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  app: {
    keys: ['key1', 'key2', 'key3', 'key4'],
  },
  url: env('RENDER_EXTERNAL_URL', ''),
  proxy: true,
});
