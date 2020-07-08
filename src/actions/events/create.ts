import {post, get} from '../../../lib/rest-utility';
import {Dispatch} from "redux"
import { RootState } from '../../types';

interface Body {
	activity: string;

}

const createEvent = (body: Body) => {
	// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
	return async (dispatch: Dispatch, getState: () => RootState) => {
		try {
			const {token} = getState();
			const season = await post('event', body, token);

			dispatch({type: 'CREATE_SEASON', payload: season});

			const profile = await get('user', token);
			dispatch({type: 'USER_UPDATED', payload: profile});
		} catch (error) {
			dispatch({type: 'ERROR', payload: error.message});
		}
	};
};

export default createEvent;
