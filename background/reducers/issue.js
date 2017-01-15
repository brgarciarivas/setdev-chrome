import * as types from '../actionTypes';

const initialState = {
	contracts:{},
	currentIssue: 0,
	url: '',
	issueDetails: {

	},
	
	
};

export default (state = initialState, action) => {
    switch (action.type) {
    case types.RESET:
        return Object.assign({}, state, {
        });
    case types.PUSH_ISSUE:
    	return Object.assign({}, state, {
    		issueDetails: action.issues
    	})
    default:
        return state;
    }
};