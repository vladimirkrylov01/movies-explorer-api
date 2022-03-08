const { CONFLICT_STATUS } = require('../constants');

class ConflictError extends Error {
  constructor(message) {
    super(message);
    this.statusCode = CONFLICT_STATUS;
  }
}

module.exports = ConflictError;
