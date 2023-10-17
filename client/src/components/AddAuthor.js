import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { addAuthorMutation, getAuthorsQuery } from '../queries/queries';

class AddAuthor extends Component {
    constructor(props){
        super(props);
        this.state = {
            name: '',
            age: '',
            statusMessage: 'SUCCESS!!',
        };
    }
    displayStatusMessage(msg){
        return(
            <h2>{this.state.statusMessage}</h2>
        );

    }
    addAuthor(e){
        e.preventDefault()
        //Muy útil:
        //console.log(this.props)
        try{
            this.props.mutate({
                variables: {
                    name: this.state.name,
                    age: this.state.age
                },
                refetchQueries: [{ query: getAuthorsQuery }]
            });
        }catch(error){
            this.setState({statusMessage: error});
        }        
        
    }
    render(){
        return(
        <div>
            <form id="add-author" onSubmit={ (e) => {this.addAuthor(e)}}>
            <div className="field">
                <label>Author name:</label>
                <input type="text"  onChange={ (e) => this.setState({name: e.target.value})}/>
            </div>
            <div className="field">
                <label>Author age:</label>
                <input type="number"  onChange={ (e) => this.setState({age: e.target.value})}/>
            </div>
            <div><input type="submit" value={"Upload"}></input></div>
            </form>
                {this.displayStatusMessage()}
        </div>
        );
    }
}

export default graphql(addAuthorMutation)(AddAuthor);