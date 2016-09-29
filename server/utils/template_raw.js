export default function template_raw(data) { 
 	return `
		Hey Oles,

		Someone submitted a message from the contact bot on your website.

		Here\'s what was submitted:

		Name: ${data.name}
		Email: ${data.email}
		Inquiry: ${data.message}

		From Contact Bot :)
	`;
}