import { combineReducers } from 'redux';
import BooksReducer from './reducer_books';

const rootReducer = combineReducers({
  books: BooksReducer //books is the state that holds the data which is populated from reducer_books
});

export default rootReducer;
