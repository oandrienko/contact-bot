import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';

import ContactModal from 'contactModal/reducers';
import conversationFlow from 'contactModal/config/conversation';

const STATE_KEY = 'lolol';

let middlewares = [thunk];
// enable logging for development
if (process.env.NODE_ENV === 'development') {
    console.log('Redux logging enabled...');
    middlewares.push(createLogger());
}

const _loadState = () => {
    try {
        const serializedState = localStorage.getItem(STATE_KEY);
        if (serializedState === null) {
            return {};
        }
        return JSON.parse(serializedState);
    } catch(err) {
        console.log('ERROR [_loadState]: ', err);
    }
};

const _saveState = (state) => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem(STATE_KEY, serializedState);
    } catch (err) {
        console.log('ERROR [_saveState]: ', err);
    }
};

const configureStore = () => {
    const persistedState = {};

    const store = createStore(
        ContactModal, 
        persistedState,
        applyMiddleware(...middlewares)
    );

    store.subscribe(() => {
     _saveState(store.getState());
    });

    return store;
}

export default configureStore;
