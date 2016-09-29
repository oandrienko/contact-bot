"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = template;
function template(data) {
	return "\n\t\t<p>Hey Oles,</p>\n\n\t\t<p>Someone submitted a message from the contact bot on your website.</p>\n\n\t\t<p>Here's what was submitted:</p>\n\n\t\t<ul style=\"paddding-left: 30px;\">\n\n\t\t\t<li>Name: <b>" + data.name + "</b></li>\n\t\t\t<li>Email: <b>" + data.email + "</b></li>\n\t\t\t<li>Inquiry: <b>" + data.message + "</b></li>\n\n\t\t</ul>\n\n\t\t<p>From Contact Bot :)</p>\n\t";
}