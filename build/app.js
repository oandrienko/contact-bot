'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _cliColor = require('cli-color');

var _cliColor2 = _interopRequireDefault(_cliColor);

var _config = require('./server/config');

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();
app.set('port', process.env.PORT || 8000);

app = (0, _config2.default)(app);

app.listen(app.get('port'), function () {
  if (app.get('env') === 'development') console.log(_cliColor2.default.cyanBright('Server is running on port ' + app.get('port')));
});