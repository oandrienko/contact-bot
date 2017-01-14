# Contact Bot

Replace that boring old contact form with your own chatbot-like form. Interface through a React component that shows up as a modal on your React based site.

### Installing

```
npm install https://github.com/oandrienko/contact-bot.git --save
```

Import the client module into your React app with:

```
import ContactBot from 'contact-bot';
import 'contact-bot/lib/styles.css';

// ...
const form = <ContactModal
	loaderImagePath={"/bundles/loader.gif"}
	isOpen={this.state.modalIsOpen}
	onClose={this.closeModal}
	onSubmitMessageThread={testEndOfMessageThread}
/>;

// render it somewhere
```
