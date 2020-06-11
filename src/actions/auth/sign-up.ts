import {post, get} from '../../../lib/rest-utility';
import firebase from '../../../lib/firebase';

const signUp = (
	email: string,
	username: string,
	password: string
) => {
	return async dispatch => {
		try {
			const profile = await post('user', {email, username, password});

			const token = await firebase
				.auth()
				.signInWithEmailAndPassword(email, password)
				.then(async resp => {
					console.log('response:', resp);
					return resp.user.getIdToken();
				});

			const seasons = await get('user/seasons', token);

			dispatch({type: 'TOKEN_GRANTED', payload: token});

			dispatch({type: 'SIGN_UP', payload: profile});

			dispatch({type: 'RECIEVE_SEASONS', payload: seasons});
		} catch (error) {
			dispatch({type: 'ERROR', payload: error.message});
		}
	};
};

export default signUp;
