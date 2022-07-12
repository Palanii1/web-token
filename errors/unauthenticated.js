const CustomAPIError = require('./custom-error')

//requiring http status codes after installation
//Unauthenticated error will handle unauthorized access to resource eg when no user account
const { StatusCodes } = require('http-status-codes')
class UnauthenticatedError extends CustomAPIError {
  constructor(message) {
    super(message)
    this.statusCode = StatusCodes.UNAUTHORIZED
  }
}

module.exports = UnauthenticatedError