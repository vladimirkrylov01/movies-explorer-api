const { UNAUTHORIZED_STATUS } = require('../constants');

class NotAuthError extends Error {
  constructor(message) {
    super(message);
    this.statusCode = UNAUTHORIZED_STATUS;
  }
}

module.exports = NotAuthError;
