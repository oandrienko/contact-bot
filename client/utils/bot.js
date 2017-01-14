const base = 'https://the-contact-bot.herokuapp.com/api/v1/';
// const base = 'http://localhost:8000/api/v1/';

export default {

	sendMessage(user, message) {
		let endpoint = base+'message/converse';
		console.log('AJAX: Sending Message to server [/converse]....');
		return new Promise( resolve => {
			$.ajax({
				method: "POST",
				url: endpoint,
				data: {
					user,
					message
			  	}
			}).done(function (results) {
				console.log('AJAX: Response from AJAX call [/converse]=> ', results);
				resolve(results);
			});
		}).then(resolve => {
			return resolve;
		});
	},

	pullMessage(user) {
		let endpoint = base+'message/converse';
		console.log('AJAX: Sending Message to server [/pull]....');
		return new Promise( resolve => {
			$.ajax({
				method: "POST",
				url: endpoint,
				data: {
					user,
					message: null
			  	}
			}).done(function (results) {
				console.log('AJAX: Response from AJAX call [/pull]=> ', results);
				resolve(results);
			});
		}).then(resolve => {
			return resolve;
		});
	}

};