export interface Event {
	activity: string;
	createdate: Date;
	id: string;
	user: string;
}

export interface UserEventMap {
	[userID: string]: Event[];
}

export const RECIEVE_EVENTS = 'RECIEVE_EVENTS';

export const CLEAR_EVENTS = 'CLEAR_EVENTS';

interface RecieveEventsAction {
	type: typeof RECIEVE_EVENTS;
	payload: UserEventMap;
}

interface ClearEventAction {
	type: typeof CLEAR_EVENTS;
}

export type EventActions = RecieveEventsAction | ClearEventAction;
