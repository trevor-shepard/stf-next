import {post, get} from '../../../lib/rest-utility';

interface Body {
	activity: string;
	
}

const createEvent  = (body: Body) => {
	return async (dispatch, getState) => {
		try {
			const {token} = getState();
			debugger
			const season = await post('event', body, token);
			
			dispatch({type: 'CREATE_SEASON', payload: season});

			const profile = await get('user', token);
			dispatch({type: 'USER_UPDATED', payload: profile});
		} catch (error) {
			dispatch({type: 'ERROR', payload: error.message});
		}
	};
};

export default createEvent ;