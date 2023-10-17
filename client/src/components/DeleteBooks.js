import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { getBooksQuery, deleteBookMutation } from '../queries/queries';

class DeleteBooks extends Component {
    deleteBook(e){
        e.preventDefault()
        //console.log(this.props)
        this.props.mutate({
            variables: {
                id: this.props.bookId
            },
            refetchQueries: [{ query: getBooksQuery }]
        });
        //Hide details:
        //document.getElementById("DetailsOfBook").style.display = "none";
    }
    menu(){
        return(
        <div>
            <form id="delete-author" onSubmit={ (e) => {this.deleteBook(e)} }>
                <input type="submit" value={"SI"}></input>
            </form>
        </div> )
        
    }
    render(){
        return(
        <div>
            <h2>U sure you want this book removed?</h2>
            { this.menu() }
        </div>);
    }
}

export default graphql(deleteBookMutation)(DeleteBooks);