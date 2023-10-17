import React, { Component } from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

// components
import BookList from './components/BookList';
import AddBook from './components/AddBook';
import AddAuthor from './components/AddAuthor';

// apollo client setup
const client = new ApolloClient({
    uri: 'http://localhost:4000/graphql'
});

class App extends Component {
  render() {
    return (
        <ApolloProvider client={client}>
            <div id="main">
                <h1>Omi's Reading List</h1>
                <BookList />
                <h2>Upload your book here!!!</h2>
                <AddBook />
                <h2>Add an author: </h2>
                <AddAuthor />
            </div>
        </ApolloProvider>
    );
  }
}

export default App;
