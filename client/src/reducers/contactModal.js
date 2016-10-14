import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';


const messages = (state = [], action) => {
	let d = new Date();

	switch(action.type) {
		case 'REQUEST_REPONSE':
			console.log('-> creating bubble from messages reducer ...');
			return [
				...state,
				{
					user: action.user,
					message: action.message,
					timestamp: d.toDateString() + ' ' + d.toLocaleTimeString()
				}
			];
			break;
		case 'RECEIVE_RESPONSE':
			return [
				...state,
				{
					user: null,
					message: action.response.msg,
					timestamp: d.toDateString() + ' ' + d.toLocaleTimeString()
				}
			];
			break;
		default:
			return state;
	}

};

const isFetching = (state=false, action) => {
	switch(action.type) {
		case 'REQUEST_REPONSE':
			console.log('Sending request..');
			return true;
			break;
		case 'RECEIVE_RESPONSE':
			return false;
			break;
		default:
			return state;
	}
};

const user = (state={}, action) => {
	switch(action.type) {
		case 'SET_USER':
			console.log('user reducer called..');
			return Object.assign({}, state, {
				id: action.id
			});
			break;
		default:
			return state;
	}
};


const contactModal = combineReducers({
	user,
	messages,
	isFetching,
	form: formReducer
});

export default contactModal;