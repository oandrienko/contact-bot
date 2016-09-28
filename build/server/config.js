'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

exports.default = function (app) {

	app.use((0, _cors2.default)());
	app.use((0, _morgan2.default)('dev'));
	app.use(_bodyParser2.default.urlencoded({ 'extended': true }));
	app.use(_bodyParser2.default.json());
	app.use((0, _methodOverride2.default)());

	if ('development' === app.get('env')) app.use((0, _errorhandler2.default)());

	(0, _routes2.default)(app);

	return app;
};

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _morgan = require('morgan');

var _morgan2 = _interopRequireDefault(_morgan);

var _methodOverride = require('method-override');

var _methodOverride2 = _interopRequireDefault(_methodOverride);

var _errorhandler = require('errorhandler');

var _errorhandler2 = _interopRequireDefault(_errorhandler);

var _cors = require('cors');

var _cors2 = _interopRequireDefault(_cors);

var _routes = require('./routes');

var _routes2 = _interopRequireDefault(_routes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

;