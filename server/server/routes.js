import express from 'express';
import message from '../controllers/message';

//Not many routes for now... Will add more;

export default function(app) {
	let router = express.Router();
	router.post('/api/v1/message/converse', message.converse);
	// router.post('/api/v1/message/pull', message.pull);
	app.use(router);
}