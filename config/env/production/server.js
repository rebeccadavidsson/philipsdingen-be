module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  url: env("HEROKU_URL"),
});
