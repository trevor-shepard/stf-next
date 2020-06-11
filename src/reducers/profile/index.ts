
import {
	Profile,
	ProfileActionTypes,
	SIGN_UP,
	LOG_IN,
	LOG_OUT,
	USER_UPDATED
} from '../../types';

const initialState: Profile = {
	userName: null,
	email: null,
	id: null,
	seasons: {}
};

const profileReducer = (
	state = initialState,
	action: ProfileActionTypes
): Profile => {
	switch (action.type) {
		case SIGN_UP:
			return action.payload;
		case LOG_IN:
			return action.payload;
		case USER_UPDATED:
			return action.payload;
		case LOG_OUT:
			return null;
		default:
			return state;
	}
};

export default profileReducer;
