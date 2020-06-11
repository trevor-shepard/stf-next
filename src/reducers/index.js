import {combineReducers} from 'redux';
import token from './token';
import profile from './profile';
import seasons from './seasons';
export default combineReducers({
	token,
	profile,
	seasons
});
