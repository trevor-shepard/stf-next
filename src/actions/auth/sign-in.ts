import {get} from '../../../lib/rest-utility';
import firebase from '../../../lib/firebase';

const signIn = (
	email: string,
	password: string
) => {
	return async dispatch => {
		try {
			const token = await firebase
				.auth()
				.signInWithEmailAndPassword(email, password)
				.then(async resp => {
					console.log('response:', resp);
					return resp.user.getIdToken();
				});
			debugger
			const profile = await get('user', token);
			dispatch({type: 'TOKEN_GRANTED', payload: token});
			dispatch({type: 'LOG_IN', payload: profile});
			const seasons = await get('user/seasons', token);

			dispatch({type: 'RECIEVE_SEASONS', payload: seasons});
		} catch (error) {
			console.log(error)
			debugger
			dispatch({type: 'ERROR', payload: error.message});
		}
	};
};

export default signIn;
