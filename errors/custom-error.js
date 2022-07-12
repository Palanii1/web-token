//Custom error function to handle all our custom errors. It extends from the Error pkg. our custom errors will extend from this created custom error.
class CustomAPIError extends Error {
  constructor(message, statusCode) {
    super(message)
  }
}

module.exports = CustomAPIError
