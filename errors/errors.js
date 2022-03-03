module.exports.Errors = (err, req, res, next) => {
  const { statusCode = 500, message } = err;
  res.status(statusCode).send({
    message: statusCode === 500 ? 'серверная ошибка' : message,
  });
  next();
};
