'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _nodeWit = require('node-wit');

var _actions = require('./actions');

var _actions2 = _interopRequireDefault(_actions);

var _wit_config = require('./wit_config');

var _wit_config2 = _interopRequireDefault(_wit_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var sessions = {};
var client = (0, _wit_config2.default)(_actions2.default);

exports.default = {
	pull: function pull(req, res) {

		if (!req.body) return res.sendStatus(400);

		var user = req.body.user;
		client.converse(user).then(function (data) {
			console.log('Response from bot [/pull] => ' + JSON.stringify(data));
			res.json(data);
		});
	},
	converse: function converse(req, res) {

		if (!req.body) return res.sendStatus(400);

		var _req$body = req.body;
		var user = _req$body.user;
		var message = _req$body.message;
		var context = _req$body.context;

		client.converse(user, message, context).then(function (data) {
			console.log('Response from bot [/converse] => ' + JSON.stringify(data));
			res.json(data);
		});
	}
};