import {get} from '../../../lib/rest-utility';
import { RECIEVE_EVENTS } from "../../types";
const getEvents = (
	seasonID: string
) => {
	return async (dispatch, getState) => {
		try {
			const {token} = getState();
			const events = await get(`seasons/${seasonID}/events`, token);
			dispatch(({type: RECIEVE_EVENTS, payload: events}))
		} catch (error) {
			console.log(error)
			dispatch({type: 'ERROR', payload: error.message});
		}
	};
};

export default getEvents;
