//Log in function looks for username and password
//if both exist, it creates a new JWT
//sends JWT to frontend
//if not exist, sends back error response to user

//importing jwt after installation
const jwt = require('jsonwebtoken')
const { BadRequestError } = require('../errors')

const login = async (req,res) => {
    //jwt user authentication
    const {username,password} = req.body

    //methods of validation for log in credentials
    //mongoose required validation
    //Joi pkg
    //custom validation created in controller
    if(!username || !password){
        throw new BadRequestError('Please provide email and password')
    }

    //id is usually provided by DB
    const id = new Date().getDate()
    
    //keep payload small, for better user experience
    //only user having the specified payload can access
    const token = jwt.sign({id, username},process.env.JWT_SECRET,{expiresIn:'30d'})

    res.status(200).json({msg:'user created',token})
}


//only authenticated requests with JWT can access the dashboard
//controls response when dashboard is entered
const dashboard = async (req,res) =>{
    const luckyNumber = Math.floor(Math.random()*100)

        res.status(200).json({msg:`Hello, ${req.user.username}`,secret:`Here is your authorized data, your lucky number is ${luckyNumber}`})    
}

module.exports = {
    login,dashboard
}