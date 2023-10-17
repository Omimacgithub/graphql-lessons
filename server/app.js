const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

// allow cross-origin requests
app.use(cors());

// connect to mlab database
// make sure to replace my db string & creds with your own
const uri = 'mongodb+srv://omarmontenegro:OmmDiaz754@clustermongolia.vgkfymq.mongodb.net/?retryWrites=true&w=majority';

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
