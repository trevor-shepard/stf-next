
import {
	ErrorActionTypes,
	ERROR,
	CLEAR_ERROR
} from '../../types';

const errorReducer = (
	state = null,
	action: ErrorActionTypes
): string | null => {
	switch (action.type) {
		case ERROR:
			return action.payload;
		case CLEAR_ERROR:
			return null;
		default:
			return state;
	}
};

export default errorReducer;
