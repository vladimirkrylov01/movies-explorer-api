const { CONFLICT_STATUS } = require('../utils/constants');

class ConflictError extends Error {
  constructor(message) {
    super(message);
    this.statusCode = CONFLICT_STATUS;
  }
}

module.exports = ConflictError;
