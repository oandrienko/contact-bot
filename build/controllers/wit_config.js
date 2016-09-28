'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

exports.default = function (actions) {
	return new _nodeWit.Wit({
		accessToken: 'L3JVFQEOLLQQAI3SVPZH4PNOV6CJ6WVL',
		logger: new _nodeWit.log.Logger(_nodeWit.log.DEBUG),
		actions: actions
	});
};

var _nodeWit = require('node-wit');

//L3JVFQEOLLQQAI3SVPZH4PNOV6CJ6WVL
var TOKEN = process.env.TOKEN;