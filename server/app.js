const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

// allow cross-origin requests
app.use(cors());

// connect to local MongoDB (docker: graphql-lessons-mongo)
const uri = process.env.MONGODB_URI || 'mongodb://localhost:27017/books';

//Database
mongoose.connect(uri);

mongoose.connection.once('open', () => {
    console.log('connected to database');
}).on('error',function(err){
    console.log('Error', err);
})

// bind express with graphql
app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}));

app.listen(4000, () => {
    console.log('now listening for requests on port 4000');
});
