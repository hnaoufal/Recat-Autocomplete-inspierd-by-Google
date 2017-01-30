import { combineReducers } from 'redux';
import wiki from './reducer_wiki';

const rootReducer = combineReducers({
    wiki: wiki
});

export default rootReducer;
