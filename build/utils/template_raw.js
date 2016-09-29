"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = template_raw;
function template_raw(data) {
	return "\n\t\tHey Oles,\n\n\t\tSomeone submitted a message from the contact bot on your website.\n\n\t\tHere's what was submitted:\n\n\t\tName: " + data.name + "\n\t\tEmail: " + data.email + "\n\t\tInquiry: " + data.message + "\n\n\t\tFrom Contact Bot :)\n\t";
}