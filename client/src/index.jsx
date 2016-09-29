import React from 'react';
import ReactDOM from 'react-dom';

import configStore from './config';
import ModalRoot from './components/ModalRoot';

if (process.env.BROWSER) {
	require('stylesRoot/components/chat_modal.scss');
}

const store = configStore();

const ContactModal = (props) => (
	<ModalRoot store={store} {...props} />
);

export default ContactModal;

