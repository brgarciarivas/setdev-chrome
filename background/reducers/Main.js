import * as types from '../actionTypes';

const initialState = {
    contracts: [
        {
            title: 'Add linting to development config',
            due: '1/20/17',
            amount:'.35 BTC',
            url:'https://github.com/brgarciarivas/react-chrome-redux-boilerplate/issues/6',
            shortSum: 'No description provided',
            cat: ['Style', 'JS'],
            pic: 'https://avatars3.githubusercontent.com/u/4914611?v=3&s=88',
            repo:'https://github.com/brgarciarivas/react-chrome-redux-boilerplate',
        },
         {
            title: 'Fix Redux communication with content script',
            due: '1/23/17',
            amount:'.20 BTC',
            url:'https://github.com/brgarciarivas/react-chrome-redux-boilerplate/issues/7',
            shortSum: 'Link up content script to redux to freely communicate between background, content and popup page',
            cat: ['Redux', 'Chrome Extension'],
            pic: 'https://avatars0.githubusercontent.com/u/6628741?v=3&s=88',
            repo:'https://github.com/brgarciarivas/react-chrome-redux-boilerplate',
        },
        {
            title: 'Add linting to development config',
            due: '1/20/17',
            amount:'.35 BTC',
            url:'https://github.com/brgarciarivas/react-chrome-redux-boilerplate/issues/6',
            shortSum: 'No description provided',
            cat: ['Style', 'JS'],
            pic: 'https://avatars3.githubusercontent.com/u/4914611?v=3&s=88',
            repo:'https://github.com/brgarciarivas/react-chrome-redux-boilerplate',
        },
         {
            title: 'Fix Redux communication with content script',
            due: '1/23/17',
            amount:'.20 BTC',
            url:'https://github.com/brgarciarivas/react-chrome-redux-boilerplate/issues/7',
            shortSum: 'Link up content script to redux to freely communicate between background, content and popup page',
            cat: ['Redux', 'Chrome Extension'],
            pic: 'https://avatars0.githubusercontent.com/u/6628741?v=3&s=88',
            repo:'https://github.com/brgarciarivas/react-chrome-redux-boilerplate',
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