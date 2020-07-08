import {SeasonState} from './season';
import {ErrorState} from './error';
import {UserEventMap} from './event';
import {TokenState} from './token';
import {Profile} from './profile';
export interface RootState {
	token: TokenState;
	profile: Profile;
	seasons: SeasonState;
	events: UserEventMap;
	error: ErrorState;
}
