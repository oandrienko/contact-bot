import React from 'react';
import { connect } from 'react-redux';

let ChatWindow = ({messages, isFetching}) => (
        <div id="chat-window" className="chat-box">

        {
			messages.map((msg, i) => {
				return (
					<div key={i} className="chat-message">
						<div className={msg.user === null ? 'message-left' : 'message-right'}>
							<div className={msg.user === null ? 'message-bubble grey-bubble' : 'message-bubble blue-bubble'}>
								{msg.message}
							</div>
							<span className="message-timestamp">
								{msg.timestamp}
							</span>
						</div>
					</div>
				);
			})
		}

		{
			messages.length === 0
				? <p className="chat-empty">Enter a message to send to chatbot</p>
				: null

		}

		{
			isFetching
				? (
					<div className="chat-message">
						<div className='message-left'>
							<div className='message-bubble grey-bubble sm-padding'>
								<img width="35px" height="20px" src="/images/chat_fetch.gif" alt="fetching bubble"/>
							</div>
							<span className="message-timestamp"></span>
						</div>
					</div>
				): null
		}

	</div>
);

const mapStateToWindowProps = (state, containerProps) => {
	console.log('State with messages:', state.messages);
	return {
		messages: state.messages,
		isFetching: state.isFetching
	};
};

ChatWindow = connect(mapStateToWindowProps)(ChatWindow);

export default ChatWindow;