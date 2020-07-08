import {put} from '../../../lib/rest-utility';
import { Dispatch } from 'redux';
import { RootState } from '../../types';

const vote = (seasonID: string, activity: string, value: number) => {
	// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
	return async (dispatch: Dispatch, getState: () => RootState) => {
		try {
			const {token} = getState();
			const season = await put(`season/${seasonID}/vote`, {activity, value}, token);
			dispatch({type: 'RECIEVE_SEASON', payload: season});
		} catch (error) {
			dispatch({type: 'ERROR', payload: error.message});
		}
	};
};

export default vote;
