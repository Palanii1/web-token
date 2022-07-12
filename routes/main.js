//mainRouter which is the route through the login to the dashboard
const express = require('express')
const router = express.Router()

const {login,dashboard} = require('../controllers/main')

//requiring auth middleware where all login passes through for authentication so it can be applied to needed routes
const authMiddleware = require('../middleware/auth')

//all dashboard requests pass through authM first
router.route('/dashboard').get(authMiddleware,dashboard) //get because we are requesting the info @ dashboard


router.route('/login').post(login) //post because the user is sending in their login credentials for authentication and authorization

module.exports = router 