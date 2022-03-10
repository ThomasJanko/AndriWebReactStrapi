module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '5d08e6ad515a2dee9fe811ee21a8b207'),
  },
});
