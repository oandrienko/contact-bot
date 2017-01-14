import React from 'react';
import ReactDOM from 'react-dom';
import ContactModal from 'contactModal';

function testEndOfMessageThread(thread) {
	console.log("MESSAGE THREAD OVER: ", thread);
}

ReactDOM.render(
    (<ContactModal isOpen onSubmitMessageThread={testEndOfMessageThread} />),
    (document.getElementById('react-root')) // eslint-disable-line
);
