const express = require('express');
const { errors } = require('celebrate');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const helmet = require('helmet');

const { PORT = 3000 } = process.env;
const app = express();

const router = require('./routes/index');
const { Errors } = require('./errors/errors');

const { requestLogger, errorLogger } = require('./middlewares/logger');

const limiter = require('./utils/ratelimiter');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());

const corsAllowed = [
  'https://localhost:3000',
  'http://localhost:3000',
  'http://51.250.4.56',
  'https://51.250.4.56',
  'http://krylov.nomoredomains.xyz',
  'https://krylov.nomoredomains.xyz',
  'https://api.krylov.nomoredomains.xyz',
  'http://api.krylov.nomoredomains.xyz',
]

require('dotenv').config();

app.use(cors({
  credentials: true,
  origin(origin, callback) {
    if (corsAllowed.includes(origin) || !origin) {
      callback(null, true);
    } else {
      callback(new Error('CORS Error'));
    }
  },
}));

app.options('*', cors());

app.use(helmet());
app.use(requestLogger);
app.use(limiter);

app.use(router);

app.use(errorLogger);
app.use(errors());
app.use(Errors);

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
