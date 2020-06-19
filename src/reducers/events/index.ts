import {
	RECIEVE_EVENTS,
	CLEAR_EVENTS,
	EventActions
} from '../../types';

const eventsReducer = (
	state = {},
	action: EventActions
) => {
	switch (action.type) {
		case RECIEVE_EVENTS:
			return action.payload;
		case CLEAR_EVENTS:
			return {};
		default:
			return state;
	}
};

export default eventsReducer;
