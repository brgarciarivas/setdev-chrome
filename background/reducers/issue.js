import * as types from '../actionTypes';

const initialState = {
	contracts:{},
	currentIssue: 0,
	url: '',
	issueDetails: {},
	
	
};

export default (state = initialState, action) => {
	console.log(action)
    switch (action.type) {
    case types.RESET:
        return Object.assign({}, state, {
        });
    case types.PUSH_ISSUE:
    	return Object.assign({}, state, {
    		issueDetails: {
    			title: action.issue.title,
	            due:  action.issue.due,
	            amount:  action.issue.amount,
	            url:  action.issue.url,
	            shortSum: action.issue.shortSum,
	            cat:  action.issue.cat,
	            pic:  action.issue.pic,
	            repo: action.issue.repo,
	    	}
    	});
    default:
        return state;
    }
};