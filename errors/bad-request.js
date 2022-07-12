const CustomAPIError = require('./custom-error')

//requiring http status codes after installation
//bad request handle errors from client side while making request eg syntax error
const { StatusCodes } = require('http-status-codes')
class BadRequestError extends CustomAPIError {
  constructor(message) {
    super(message)
    this.statusCode = StatusCodes.BAD_REQUEST
  }
}

module.exports = BadRequestError