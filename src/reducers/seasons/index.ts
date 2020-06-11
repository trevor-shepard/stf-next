
import {
	SeasonState,
	CREATE_SEASON,
	RECIEVE_SEASONS,
	SeasonActionTypes,
	RECIEVE_SEASON
} from '../../types';

const initialState = {};

const seasonsReducer = (
	state = initialState,
	action: SeasonActionTypes
): SeasonState => {
	let season
	let seasons
	switch (action.type) {
		case CREATE_SEASON:
			season = action.payload;
			return Object.assign({}, state, {[season.id]: season});
		case RECIEVE_SEASON:
			season = action.payload;
			return Object.assign({}, state, {[season.id]: season});
		case RECIEVE_SEASONS:
			seasons = Object.values(action.payload).reduce((acc, season) => {
				return {
					...acc,
					[season.id]: season
				};
			}, {});
			return Object.assign({}, state, seasons);

		default:
			return state;
	}
};

export default seasonsReducer;
