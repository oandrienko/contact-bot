'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mail = require('./../utils/mail');

var _mail2 = _interopRequireDefault(_mail);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  send: function send(request, response) {
    return new Promise(function (resolve, reject) {
      console.log('Calling from actions.send: ', JSON.stringify(response));
      return resolve();
    });
  },
  sendEmail: function sendEmail(_ref) {
    var context = _ref.context;
    var entities = _ref.entities;

    console.log('\nCalling PROMISE from sendEMail...\n');
    return new Promise(function (resolve, reject) {
      // Here should go the api call, e.g.:
      // context.forecast = apiCall(context.loc)
      // context.forecast = 'sunny';
      return resolve();
    });
  }
};