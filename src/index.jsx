import React from 'react';
import { Provider } from 'react-redux';

import configureStore from 'contactModal/config/store';
import AppRoot from 'contactModal/components/AppRoot';


const store = configureStore();

const ContactModal = props => (
	<Provider store={store}>
		<AppRoot
			isOpen={props.isOpen}
			onClose={props.onClose}
			loaderImage={props.loaderImagePath}
			{...props}
		/>
	</Provider>
);

export default ContactModal;
