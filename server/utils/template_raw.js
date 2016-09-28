export default function template_raw(data) { 
 	return `
		Hey Oles,

		Someone submitted a message from the contact form on your website at "Andrienko.co".

		Here\'s what was submitted:

		Name: ${data.name}
		Email: ${data.email}
		Message: ${data.message}

		Your welcome Oles. 

		From Oles Bot :)
	`;
}