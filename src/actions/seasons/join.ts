import {put, get} from '../../../lib/rest-utility';


const joinSeason = (seasonID: string) => {
    return async(dispatch, getState) => {
        try {
            const {token} = getState()
            const season = await put(`season/${seasonID}/join`, {}, token)
            dispatch({type: 'RECIEVE_SEASON', payload: season});
            const profile = await get('user', token);
			dispatch({type: 'USER_UPDATED', payload: profile});
        } catch (error) {
			dispatch({type: 'ERROR', payload: error.message});
            
        }
    }
}

export default joinSeason;
