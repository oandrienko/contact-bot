import { Wit, log } from 'node-wit';

import actions from './actions';
import witConfig from './wit_config'

const sessions = {};
const client = witConfig(actions);

export default {

	pull(req, res) {

		if (!req.body)
			return res.sendStatus(400)

		const user = req.body.user;
		client.converse(user).then(data => {
		  console.log('Response from bot [/pull] => ' + JSON.stringify(data));
		  res.json(data);
		});

	},

	converse(req, res) {

		if (!req.body)
			return res.sendStatus(400)

		const {user, message, context} = req.body;
		client.converse(user, message, context).then(data => {
		  console.log('Response from bot [/converse] => ' + JSON.stringify(data));
		  res.json(data);
		});

	}

};