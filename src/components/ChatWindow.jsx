import React from 'react';
import img from 'contactModal/assets/loader.gif';

const ChatWindow = ({ messages, isFetching, loaderImage }) => (

    <div id="chat-window" className="chat-box">
        {
            messages.map((msg, i) => {
                return (
                    <div key={i} className="chat-message">
                        {
                            msg.isUser ?
                                (<div className="message-right">
                                    <span className="message-timestamp">
                                        { msg.timestamp }
                                    </span>
                                    <div className="message-bubble blue-bubble">
                                        { msg.message }
                                    </div>
                                </div>) :
                                (<div className="message-left">
                                    <div className="message-bubble grey-bubble">
                                        { msg.message }
                                    </div>
                                    <span className="message-timestamp">
                                        { msg.timestamp }
                                    </span>
                                </div>)

                        }
                    </div>
                );
            })
        }
        {
            messages.length === 0 && <p className="chat-empty">Enter a message to send to chatbot</p>
        }
        {
            isFetching && (
                <div className="chat-message">
                    <div className='message-left'>
                        <div className='message-bubble grey-bubble sm-padding'>
                            <img width="35px" height="20px" src={loaderImage} alt="fetching bubble"/>
                        </div>
                        <span className="message-timestamp"></span>
                    </div>
                </div>
            )
        }
    </div>
    
);

export default ChatWindow;
