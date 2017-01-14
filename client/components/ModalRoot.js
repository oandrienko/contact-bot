import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, Link, browserHistory } from 'react-router';
import Modal from 'react-modal';

import ModalHeader from './ModalHeader';
import ChatWindow from './ChatWindow';
import ChatInput from './ChatInput';


class ModalRoot extends React.Component {
	constructor(props) {
		super();
		this.state = { message: ''};
	}

	onSubmit(e) {
		e.preventDefault();

		let self = this, message,
		data = $( "#send-form" ).serialize();
		$.post( '/mail/send', data).done(function(res) {
			console.log( "Data Sent: " + res );
			res = JSON.parse(res);
			if (res.success !== true) {
				message = 'Please fill in all fields properly and try again.';
			} else  {
				message = 'Thank you! Your message was sent.';
				$('#send-form').trigger('reset');
			}
			self.setState({ message: message });
		});
	}

	render() {
		const {store, modalIsOpen, closeModal} = this.props;
		return (
			<Provider store={store}>
				<Modal
					className="mainContact__modal"
					isOpen={modalIsOpen}
					onRequestClose={closeModal}
					shouldCloseOnOverlayClick={true}>
				
					<ModalHeader closeModal={closeModal} />
	            	<ChatWindow />
	            	<ChatInput />

				</Modal>
			</Provider>
		);
	}
}

export default ModalRoot;