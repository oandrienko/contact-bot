'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

exports.default = function (actions) {
	return new _nodeWit.Wit({
		accessToken: TOKEN,
		logger: new _nodeWit.log.Logger(_nodeWit.log.INFO),
		actions: actions
	});
};

var _nodeWit = require('node-wit');

var TOKEN = process.env.BOT_TOKEN;