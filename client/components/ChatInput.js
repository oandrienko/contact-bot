import React from 'react';
import { reset, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import uuid from 'uuid';

import * as actions from './../actions';

let ChatInputForm = ({fields: {message}, handleSubmit}) => {
	return(
		<form onSubmit={handleSubmit} className="chat-input" >

	        <input type="text"
        		{...message}
	        	className="chat-input--fill" 
	        	placeholder="Your message..." 
	        	maxLength="40"
	        	autoComplete="off" />

	        <button type="submit" className="chat-input--bg">
	        	Submit
	        </button>

	    </form>
	);
};

ChatInputForm = reduxForm({
  form: 'add-messages',
  fields: ['message']
})(ChatInputForm);

class ChatInput extends React.Component {

	constructor() {
		super();
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleSubmit(data) {

		const {dispatch, context, onNewUserId, onNewMessage, onFormReset} = this.props;

		let user = this.props.userId, msg = data.message;

		if (!user) {
			user = uuid.v4();
			console.log('user doesnt exist, creating new', user);
			onNewUserId(user);
		}

		if (msg && msg.trim().length > 0)
			onNewMessage(user, msg);
		onFormReset();
	}

	render() {
		return(
			<ChatInputForm 
				onSubmit={this.handleSubmit}
				{...this.props} 
			/>
		);
	}
}

const mapStateToInputProps = (state) => {
	return {
		userId: state.user.id,
		context: state.user.context
	};
};

const mapDispacheToInputProps = (dispatch) => {
	return {
		onNewUserId: (id) => {
			dispatch(actions.setUserId(id));
		},
		onNewMessage: (user, message, context) => {
			dispatch(actions.sendMessage(user, message, context));
		},
		onFormReset: () => {
			dispatch(reset('add-messages'));
		}
	};
};

ChatInput = connect(mapStateToInputProps, mapDispacheToInputProps)(ChatInput);

export default ChatInput;