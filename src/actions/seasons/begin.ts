import {put} from '../../../lib/rest-utility';

const begin = (seasonID: string) => {
	return async (dispatch, getState) => {
		try {
			const {token} = getState();
			const season = await put(`season/${seasonID}/begin`, {}, token);
			dispatch({type: 'RECIEVE_SEASON', payload: season});
		} catch (error) {
			dispatch({type: 'ERROR', payload: error.message});
		}
	};
};

export default begin;
