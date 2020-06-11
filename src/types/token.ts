export const TOKEN_GRANTED = 'TOKEN_GRANTED';

const LOG_OUT = 'LOG_OUT';

interface TokenGrantedAction {
	type: typeof TOKEN_GRANTED;
	payload: string;
}

interface LogOutAction {
	type: typeof LOG_OUT;
}

export type TokenActionTypes = TokenGrantedAction | LogOutAction;
