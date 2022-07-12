//Setting Up Authentication Middleware

//importing jwt after installation
const jwt = require('jsonwebtoken')
const { UnauthenticatedError } = require('../errors')


//authentication middleware to be applied wherever authentication is needed
const authenticationMiddleware = async (req,res,next) =>{
    //jwt user authorization
    const authHeader = req.headers.authorization;

    if(!authHeader || !authHeader.startsWith('Bearer ')){
        throw new UnauthenticatedError('No token provided')
    }
    //auth token verification
    const token = authHeader.split(' ')[1]
    
    try {
        const decoded = jwt.verify(token,process.env.JWT_SECRET)

        const {id,username} = decoded
        req.user = {id,username}
        next()
        
    } catch (error) {
        throw new UnauthenticatedError('Not authorized to acccess this route')
    }    
}

module.exports = authenticationMiddleware