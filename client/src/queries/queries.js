import { gql } from 'apollo-boost';

const getAuthorsQuery = gql`
    {
        authors {
            name
            id
        }
    }
`;

const getBooksQuery = gql`
    {
        books {
            name
            id
        }
    }
`;

const getBookDetailsQuery = gql`
    query Bucharest($id: ID){
        book(id: $id) {
            name
            genre
            author{
                name
                age
                books{
                    name
                    genre
                }
            }
        }
    }
`;

const addBookMutation = gql`
    mutation AddBook($name: String!, $genre: String!, $authorId: ID!){
        addBook(name: $name, genre: $genre, authorId: $authorId){
            name
            id
        }
    }
`;

const addAuthorMutation= gql`
    mutation Australia($name:String!, $age: Int!){
        addAuthor(name: $name, age:$age){
            name
            age
        }
    }
`;
const deleteBookMutation= gql`
    mutation Dinamarca($id: ID!){
        deleteBook(bookId: $id){
            id
        }
    }
`;

export { getAuthorsQuery, getBooksQuery, getBookDetailsQuery, addBookMutation, addAuthorMutation , deleteBookMutation};
