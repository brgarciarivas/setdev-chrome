import * as types from '../actionTypes';

const initialState = {
    contracts: [
        {
            projectName: 'Balins Mobile App',
            quoteInBits: '8 BTC',
            deadline: 'March 30, 2017' 
        },
        {
            projectName: 'A Really Big Platform',
            quoteInBits: '30 BTC',
            deadline: 'May 1, 2017' 
        },
        {
            projectName: 'A Simple Landing Page',
            quoteInBits: '1 BTC',
            deadline: 'March 30, 2017' 
        },
    ],
    pageLoaded: false
};

export default (state = initialState, action) => {
    switch (action.type) {
    case types.REGISTER_PAGE_LOAD:
        console.log(action)
        return Object.assign({}, state, {
            pageLoaded: true
        });
    default:
        return state;
    }
};