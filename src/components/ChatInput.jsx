import React from 'react';

class ChatInput extends React.Component {

    constructor(props) {
        super(props);
        this.state = {value: ''};
        this.onSubmit = this.onSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    onSubmit(e) {
        this.props.onSubmit(this.state.value);
        this.setState({ value: '' });
        e.preventDefault();
    }

    handleChange(e) {
        const { value } = e.target;
        this.setState({ value });
    }

    render() {
        return (
            <form className="chat-input" onSubmit={this.onSubmit}>
                <input
                    className="chat-input--fill"
                    type="text"
                    placeholder="Your message..."
                    maxLength="40"
                    value={this.state.value}
                    onChange={this.handleChange}
                />
                <button type="Submit" className="chat-input--bg">
                    Submit
                </button>
            </form>

        );
    }
}

export default ChatInput;
