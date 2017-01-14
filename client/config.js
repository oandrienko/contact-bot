import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import contactModal from './reducers/contactModal'
import { loadStoredState, setStoredState } from './utils/storage';

const configureStore = () => {

	//Get state from localStorage
	//const persistedState = loadStoredState();
	const persistedState = {
		messages: [
			// {
			// 	user: 1,
			// 	message: 'Hello',
			// 	timestamp: 'Wed Sep 28 2016 12:20:58 AM'
			// },
			// {
			// 	user: null,
			// 	message: 'Hey! Thanks for stopping by.',
			// 	timestamp: 'Wed Sep 28 2016 12:20:58 AM'
			// },
			// {
			// 	user: null,
			// 	message: 'Would you like to leave a message for Oles? I\'d be happy to forward it to him.',
			// 	timestamp: 'Wed Sep 28 2016 12:20:58 AM'
			// },
		],
	};

	const store = createStore(contactModal, persistedState, applyMiddleware(thunk));

	// store.subscribe(() => {
	// 	setStoredState(store.getState());
	// });

	return store;
}

export default configureStore;