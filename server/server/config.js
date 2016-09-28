import express from 'express';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import methodOverride from 'method-override';
import errorHandler from 'errorhandler';
import cors from 'cors';

import routes from './routes';

export default function(app) {

	app.use(cors());
	app.use(morgan('dev'));
	app.use(bodyParser.urlencoded({'extended':true}));
	app.use(bodyParser.json());
	app.use(methodOverride());

	if ('development' === app.get('env')) 
		app.use(errorHandler());

	routes(app);

	return app;
};


