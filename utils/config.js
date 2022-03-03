const { NODE_ENV, JWT_SECRET, HOST = 'localhost'} = process.env;

module.exports = {
  JWT_SECRET: NODE_ENV === 'production' ? JWT_SECRET : 'super-secret-key',
  MongoDB: `mongodb://${HOST}:27017/moviesdb`,
};
