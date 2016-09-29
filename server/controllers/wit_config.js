import { Wit, log } from 'node-wit';

const TOKEN = process.env.BOT_TOKEN;

export default function(actions) {
	return new Wit({
	  accessToken: TOKEN,
	  logger: new log.Logger(log.INFO),
	  actions
	});
}