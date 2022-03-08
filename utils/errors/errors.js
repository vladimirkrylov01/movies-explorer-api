const { INTERNAL_SERVER_ERROR_STATUS } = require('../constants');

module.exports.Errors = (err, req, res, next) => {
  const { statusCode = INTERNAL_SERVER_ERROR_STATUS, message } = err;
  res.status(statusCode).send({
    message: statusCode === INTERNAL_SERVER_ERROR_STATUS ? 'серверная ошибка' : message,
  });
  next();
};
