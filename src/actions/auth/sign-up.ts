import {post, get} from '../../../lib/rest-utility';
import firebase from '../../../lib/firebase';
import {Dispatch} from "redux"

const signUp = (
	email: string,
	username: string,
	password: string
) => {
	// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
	return async (dispatch: Dispatch )=> {
		try {
			await post('user', {email, username, password});

			const token = await firebase
				.auth()
				.signInWithEmailAndPassword(email, password)
				.then(async resp => {
					console.log('response:', resp);
					if (!resp) throw Error('cannot verify user')
					return resp.user ? resp.user.getIdToken() : null
				});
				
			const profile = await get('user', token);

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
