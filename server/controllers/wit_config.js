import { Wit, log } from 'node-wit';

const TOKEN = process.env.BOT_TOKEN;

export default function(actions) {
	return new Wit({
	  accessToken: 'L3JVFQEOLLQQAI3SVPZH4PNOV6CJ6WVL',
	  logger: new log.Logger(log.INFO),
	  actions
	});
}