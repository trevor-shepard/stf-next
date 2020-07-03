import {combineReducers} from 'redux';
import token from './token';
import profile from './profile';
import seasons from './seasons';
import events from './events';
import error from './error'
export default combineReducers({
	token,
	profile,
	seasons,
	events,
	error
});
