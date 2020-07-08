export interface UserMap {
	[id: string]: string;
}

export interface ActivtitesMap {
	[activity: string]: number;
}

export interface VotesMap {
	[activity: string]: {
		[id: string]: number;
	};
}

export interface Season {
	name: string;
	users: UserMap;
	activities: ActivtitesMap;
	phase: number;
	id: string;
	votes: VotesMap;
	voteStart: Date;
	createDate: Date;
	seasonStart: Date;
}

export interface SeasonState {
	[id: string]: Season;
}

export const CREATE_SEASON = 'CREATE_SEASON';

export const RECIEVE_SEASONS = 'RECIEVE_SEASONS';

export const RECIEVE_SEASON = 'RECIEVE_SEASON';

interface CreateSeasonAction {
	type: typeof CREATE_SEASON;
	payload: Season;
}

interface RecieveSeasonsAction {
	type: typeof RECIEVE_SEASONS;
	payload: Season[];
}

interface RecieveSeasonAction {
	type: typeof RECIEVE_SEASON;
	payload: Season;
}

export type SeasonActionTypes = CreateSeasonAction | RecieveSeasonsAction | RecieveSeasonAction;
