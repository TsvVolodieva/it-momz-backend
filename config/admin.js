module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '12a046fdaf2ea11f6be55d15c4cc0076'),
  },
});
