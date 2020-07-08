export const ERROR = 'ERROR';

export const CLEAR_ERROR = 'CLEAR_ERROR';

interface ErrorAction {
	type: typeof ERROR;
	payload: string;
}

interface ClearErrorAction {
	type: typeof CLEAR_ERROR;
}

export type ErrorActionTypes = ErrorAction | ClearErrorAction;

export type ErrorState = string | null;
