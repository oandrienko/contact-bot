import { Wit, log } from 'node-wit';

// import actions from './actions';
import witConfig from './wit_config'
import sendAdminNotification from './../utils/mail';

const client = witConfig();

const sessions = {};
const sessionManager = (user) => {
  let sessionId;
  Object.keys(sessions).forEach(k => {
    if (sessions[k].user === user) {
      sessionId = k;
    }
  });
  if (!sessionId) {
    sessionId = user
    sessions[sessionId] = {user: user, context: {}};
  }
  return sessionId;
};

export default {

	converse(req, res) {

		if (!req.body)
			return res.sendStatus(400);

		const {user, message} = req.body;

		let sessionId = sessionManager(user);

		client.converse(user, message).then(data => {

			if (data.entities) {
				sessions[sessionId].context = Object.assign(
					sessions[sessionId].context, 
					data.entities
				);
			}

			if (data.type === 'action' && data.action === 'sendEmail') {
				let c = sessions[sessionId].context;
				sendAdminNotification(
					c.contact[0].value,
					c.email[0].value,
					c.inquiry[0].value,
					(e) => console.log('Email sent... error => ', e)
				);
			}

			res.json(data);
		});
	}

};