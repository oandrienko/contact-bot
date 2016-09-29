'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _nodeWit = require('node-wit');

var _wit_config = require('./wit_config');

var _wit_config2 = _interopRequireDefault(_wit_config);

var _mail = require('./../utils/mail');

var _mail2 = _interopRequireDefault(_mail);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import actions from './actions';
var client = (0, _wit_config2.default)();

var sessions = {};
var sessionManager = function sessionManager(user) {
	var sessionId = void 0;
	Object.keys(sessions).forEach(function (k) {
		if (sessions[k].user === user) {
			sessionId = k;
		}
	});
	if (!sessionId) {
		sessionId = user;
		sessions[sessionId] = { user: user, context: {} };
	}
	return sessionId;
};

exports.default = {
	converse: function converse(req, res) {

		if (!req.body) return res.sendStatus(400);

		var _req$body = req.body;
		var user = _req$body.user;
		var message = _req$body.message;


		var sessionId = sessionManager(user);

		client.converse(user, message).then(function (data) {

			if (data.entities) {
				sessions[sessionId].context = Object.assign(sessions[sessionId].context, data.entities);
			}

			if (data.type === 'action' && data.action === 'sendEmail') {
				var c = sessions[sessionId].context;
				(0, _mail2.default)(c.contact[0].value, c.email[0].value, c.inquiry[0].value, function (e) {
					return console.log('Email sent... error => ', e);
				});
			}

			res.json(data);
		});
	}
};