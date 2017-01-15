import * as types from '../actionTypes';

const initialState = {
	contracts: [
	{
	currentIssue: Int,
	url: String,
	issueDetails: Object
	}
	]
	
};

export default (state = initialState, action) => {
    switch (action.type) {
    case types.RESET:
        return Object.assign({}, state, {
        });
    default:
        return state;
    }
};