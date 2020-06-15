import {put} from '../../../lib/rest-utility';

const vote = (seasonID: string, activity, value) => {
	return async (dispatch, getState) => {
		try {
			const {token} = getState();
			debugger
			const season = await put(`season/${seasonID}/vote`, {activity, value}, token);
			dispatch({type: 'RECIEVE_SEASON', payload: season});
		} catch (error) {
			dispatch({type: 'ERROR', payload: error.message});
		}
	};
};

export default vote;
