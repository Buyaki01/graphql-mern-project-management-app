const express = require('express');
const colors = require('colors');
require('dotenv').config({ path: '../.env' });
const { graphqlHTTP } = require('express-graphql');
const schema = require('./schema/schema.js');
const connectDB = require('./config/db.js');
const port = process.env.PORT || 7000;

const app = express();

// Connect to database
connectDB();

app.use(
  '/graphql', 
  graphqlHTTP({
    schema,
    graphiql: process.env.NODE_ENV === 'development'
  })
);

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});