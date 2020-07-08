export interface Profile {
	username: string | null;
	email: string | null;
	id: string | null;
	seasons: {
		[seasonID: string]: string;
	};
	activities: {
		[name: string]: string[]
	}
}

export const SIGN_UP = 'SIGN_UP';

export const LOG_IN = 'LOG_IN';

export const LOG_OUT = 'LOG_OUT';

export const USER_UPDATED = 'USER_UPDATED';

interface SignUpAction {
	type: typeof SIGN_UP;
	payload: Profile;
}

interface LogInAction {
	type: typeof LOG_IN;
	payload: Profile;
}

interface UserUpdateAction {
	type: typeof USER_UPDATED;
	payload: Profile;
}

interface LogOutAction {
	type: typeof LOG_OUT;
}

export type ProfileActionTypes = SignUpAction | LogInAction | LogOutAction | UserUpdateAction;
