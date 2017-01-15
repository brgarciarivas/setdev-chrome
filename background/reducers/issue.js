import * as types from '../actionTypes';

const initialState = {
	contracts:{},
	issues:[
		{
			id:1 ,
			title: '',
			due: '',
			link: '',
			name: '',
			btc: 0.0,
			owner: '',
			author: ''
		},
		{
			id: 2,
			title: '',
			due: '',
			link: '',
			name: '',
			btc: 0.0,
			owner: '',
			author: ''
		},
		{
			id: 3,
			title: '',
			due: '',
			link: '',
			name: '',
			btc: 0.0,
			owner: '',
			author: ''
		}
	],
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