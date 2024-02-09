const express = require('express');
require('dotenv').config({ path: '../.env' });
const { graphqlHTTP } = require('express-graphql');
const schema = require('./schema/schema.js');
const port = process.env.PORT || 5500;

const app = express();

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