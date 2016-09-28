import async from 'async';
import Bot from './../utils/bot';

const requestMessage = (user, message) => {
	console.log('requestMessage dispatched');
	return { 
		type: 'REQUEST_REPONSE',
		user,
		message
	};
};

const receiveMessage = (response) => {
	console.log('receiveMessage dispatched');
	return {
		type: 'RECEIVE_RESPONSE',
		response
	};
};


export const sendMessage = (user, message, context) => (dispatch) => {
	dispatch(requestMessage(user, message));

	return Bot.sendMessage(user, message, context).then(resolve => {
		dispatch(receiveMessage(resolve));

		//Keep sending requests until wit response type is 'stop';
		let res_type = null;
		async.whilst(
			() => res_type !== 'stop', 
			(next) => {
				console.log('Calling Bot.pullMessage from async.whilst...');
				Bot.pullMessage(user).then(resolve => {
					if (resolve.type !== 'stop')
						dispatch(receiveMessage(resolve));
					res_type = resolve.type;
					next();
				});
			},
			(error, n) => {
				console.log('Done from async.whilst, with errors => ', error);
			}
		);

	});
};

export const setUserId = (id) => {
	console.log('Setting User Id...');
	return {
		type: 'SET_USER',
		id
	};
};