import {
	TOKEN_GRANTED,
	LOG_OUT,
	TokenActionTypes
} from '../../types';

const profileReducer = (state: null | string = null, action: TokenActionTypes) => {
	switch (action.type) {
		case TOKEN_GRANTED:
			return action.payload;
		case LOG_OUT:
			return null;
		default:
			return state;
	}
};

export default profileReducer;
