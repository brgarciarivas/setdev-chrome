import {createStore, compose, applyMiddleware} from 'redux';
import createLogger from 'redux-logger';
import thunk from 'redux-thunk';
import { alias, wrapStore } from 'react-chrome-redux';

import rootReducer from './reducers';

const logger = createLogger({
    level: 'info',
    collapsed: true
});

const middleware = [thunk, logger];

const store = compose(
    applyMiddleware(...middleware)
)(createStore)(rootReducer);

wrapStore(store, {
    portName: 'setgov'
});

var injected = false;


OneSignal.init({appId: "1f65f2ef-4f3d-4bb3-b6f9-29272455667c",
                googleProjectNumber: "19593807339"});

console.log("one signal init");

// // //Inject content Script on each tab change//
chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
    console.log('content script injected')
    console.log(tabId);
    console.log(tab);
    if(!injected) {
        injected = true;
        chrome.tabs.executeScript(null, {file: 'content.js'});
    }
}); 

//Inject content script when first tab is activated//
// chrome.tabs.onActivated.addListener(function(tabId, changeInfo, tab) {
// 	console.log(tabId)
// 	console.log(tab)
// 	chrome.tabs.get(tabId.tabId,function(tab){
// 		console.log(tab)
// 	})  
// });

