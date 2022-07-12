//dotenv pkg to access the env variable, es-as-er pkg so we dont have to set up our own async middleware
require('dotenv').config();
require('express-async-errors');

const express = require('express');
const app = express();

const mainRouter = require('./routes/main')

const notFoundMiddleware = require('./middleware/not-found');
const errorHandlerMiddleware = require('./middleware/error-handler');

// Middleware implementation 
//(Public folder is where our the frontend of our app will be located and any static files as well, index.html and css)
app.use(express.static('./public')); //static file
app.use(express.json()); //inbuilt middleware

//everytime we get a request on this root route it redirects and goes with mainRouter
app.use('/api/v1/',mainRouter)

//custom middleware
app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 3000;

const start = async () => {
  try {
    app.listen(port, () =>
      console.log(`Server is listening on port ${port}...`)
    );
  } catch (error) {
    console.log(error);
  }
};

start();
