import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { getBookDetailsQuery } from '../queries/queries';
import DeleteBooks from './DeleteBooks';
//import book from '../../../server/models/book';

class BookDetails extends Component {
    bookDetails(){
        var data = this.props.data;
        if(data.loading || !data.book){
            return( <h3>Loading details</h3> );
        } else {
            //console.log(data);
            return(<div>
                <p>Name: {data.book.name}</p>
                <p>Genre: {data.book.genre}</p>
                <p>Author name: {data.book.author.name}</p>
                <p>Author age: {data.book.author.age}</p>
                <p>Author books:</p>
                <ul>{data.book.author.books.map(book => {
                    //Sin el (e) =>, daría un bucle infinito
                    return (<li key={ book.id }>
                        <p>Name:{ book.name }</p>
                        <p>Genre:{ book.genre }</p></li>
                    );})}
                </ul>
                <DeleteBooks bookId= { data.variables.id }/>
            </div>);
        }
    }

    render(){
        return(
        <div>
            <h2>Details of Book:  </h2>
            { this.bookDetails()}                
        </div>);
    }
}

export default graphql(getBookDetailsQuery, {
    options: (props) => {return{
        variables: {
            id: props.bookId
        }
    }}})(BookDetails);