"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = template_raw;
function template_raw(data) {
	return "\n\t\tHey Oles,\n\n\t\tSomeone submitted a message from the contact form on your website at \"Andrienko.co\".\n\n\t\tHere's what was submitted:\n\n\t\tName: " + data.name + "\n\t\tEmail: " + data.email + "\n\t\tMessage: " + data.message + "\n\n\t\tYour welcome Oles. \n\n\t\tFrom Oles Bot :)\n\t";
}