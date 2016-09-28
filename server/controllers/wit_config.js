import { Wit, log } from 'node-wit';

//L3JVFQEOLLQQAI3SVPZH4PNOV6CJ6WVL
const TOKEN = process.env.TOKEN;

export default function(actions) {
	return new Wit({
	  accessToken: 'L3JVFQEOLLQQAI3SVPZH4PNOV6CJ6WVL',
	  logger: new log.Logger(log.DEBUG),
	  actions
	});
}