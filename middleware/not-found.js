//not found middleware for routes that dont exist
const notFound = (req, res) => res.status(404).send('Route does not exist')

module.exports = notFound
