export default function template(data) { 
	return `
		<p>Hey Oles,</p>

		<p>Someone submitted a message from the contact form on your website at "Andrienko.co".</p>

		<p>Here\'s what was submitted:</p>

		<ul style="paddding-left: 30px;">

			<li>Name: <b>${data.name}</b></li>
			<li>Email: <b>${data.email}</b></li>
			<li>Message: <b>${data.message}</b></li>

		</ul>

		<p>Your welcome Oles.</p>

		<p>From Oles Bot :)</p>
	`;
}