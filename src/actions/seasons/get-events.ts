import {get} from '../../../lib/rest-utility';
import {RECIEVE_EVENTS, RootState} from '../../types';
import { Dispatch } from 'redux';
const getEvents = (
	seasonID: string
) => {
	// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
	return async (dispatch: Dispatch, getState: () => RootState) => {
		try {
			const {token} = getState();
			const events = await get(`seasons/${seasonID}/events`, token);
			dispatch(({type: RECIEVE_EVENTS, payload: events}));
		} catch (error) {
			console.log(error);
			dispatch({type: 'ERROR', payload: error.message});
		}
	};
};

export default getEvents;
