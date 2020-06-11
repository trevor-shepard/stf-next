import {post, get} from '../../../lib/rest-utility';

import {Moment} from 'moment';

interface Body {
	name: string;
	voteStart: Moment;
	seasonStart: Moment;
}

const createSeason = (body: Body) => {
	return async (dispatch, getState) => {
		try {
			const {token} = getState();
			const season = await post('season', body, token);

			dispatch({type: 'CREATE_SEASON', payload: season});

			const profile = await get('user', token);
			dispatch({type: 'USER_UPDATED', payload: profile});
		} catch (error) {
			dispatch({type: 'ERROR', payload: error.message});
		}
	};
};

export default createSeason;
