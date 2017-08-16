import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators} from 'redux'

class BookList extends Component{
  renderList(){
    return this.props.books.map((book) => {
      return (
        <li key={book.title} className="list-group-item">{book.title}</li>
      );
    });
  }

  render(){
    return (
      <ul className="list-group col-sm-4">
      {this.renderList()}
      </ul>
    )
  }
}

function mapStateToProps(state){
  //mapStateToProps is the function used to return the state object to the Component which is connected by connect function in react-redux library
  //return object is shown in props inside BookList
  //This acts as a container
  return{
    books: state.books
  };
}

//This function is used to return the props to BookList container
function mapDispatchToProps(dispatch){
  //whenever selectBook is called result is passed to all the reducers
  return bindActionCreators({selectBook:selectBook}, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(BookList);
