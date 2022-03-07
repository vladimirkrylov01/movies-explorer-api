const router = require('express').Router();

const NotFoundError = require('../utils/errors/not-found');
const usersRouter = require('./users');
const moviesRouter = require('./movies');

router.get('/crash-test', () => {
  setTimeout(() => {
    throw new Error('Сервер сейчас упадёт');
  }, 0);
});

router.use('/', usersRouter);
router.use('/', moviesRouter);

router.use('*', () => {
  throw new NotFoundError('Запрашиваемый ресурс не найден.');
});

module.exports = router;
