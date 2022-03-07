const { FORBIDDEN_STATUS } = require('../constants');

class Forbidden extends Error {
  constructor(message) {
    super(message);
    this.statusCode = FORBIDDEN_STATUS;
  }
}

module.exports = Forbidden;
