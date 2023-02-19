const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const PORT = 4001

const TypeDefs = require('./schema')
const Resolvers = require('./resolvers')

const { ApolloServer } = require('apollo-server-express')

mongoose.connect('mongodb+srv://root:root@cluster0.qry26ic.mongodb.net/comp3133_assigment1', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(success => {
  console.log('Success Mongodb connection')
}).catch(err => {
  console.log('Error Mongodb connection')
});

const server = new ApolloServer({
  typeDefs: TypeDefs.typeDefs,
  resolvers: Resolvers.resolvers
})

const app = express();
app.use(bodyParser.json());
app.use('*', cors());

server.applyMiddleware({ app })

app.listen(PORT, () =>
  console.log(`🚀 Server ready at http://localhost:${PORT}${server.graphqlPath}`));
