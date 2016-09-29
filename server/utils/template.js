export default function template(data) { 
	return `
		<p>Hey Oles,</p>

		<p>Someone submitted a message from the contact bot on your website.</p>

		<p>Here\'s what was submitted:</p>

		<ul style="paddding-left: 30px;">

			<li>Name: <b>${data.name}</b></li>
			<li>Email: <b>${data.email}</b></li>
			<li>Inquiry: <b>${data.message}</b></li>

		</ul>

		<p>From Contact Bot :)</p>
	`;
}