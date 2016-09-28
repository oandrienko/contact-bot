'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

exports.default = function (app) {
	var router = _express2.default.Router();
	router.post('/api/v1/message/converse', _message2.default.converse);
	router.post('/api/v1/message/pull', _message2.default.pull);
	app.use(router);
};

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _message = require('../controllers/message');

var _message2 = _interopRequireDefault(_message);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }