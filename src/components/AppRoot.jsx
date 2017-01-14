import React from 'react';
import Modal from 'react-modal';
import { connect } from 'react-redux';
import { reset } from 'redux-form';

import ModalHeader from 'contactModal/components/ModalHeader';
import ChatWindow from 'contactModal/components/ChatWindow';
import ChatInput from 'contactModal/components/ChatInput';

import { sendMessage, sendErrorMessage } from 'contactModal/actions';


const mapStateToProps = state => ({
    messages: state.messages,
    isFetching: state.fetching,
    validateFunc: state.validation.validate,
    validateErr: state.validation.error,
    isActive: state.active
});

const mapDispatchToProps = dispatch => ({
    onNewMessage: m => dispatch(sendMessage(m)),
    onNewError: m => dispatch(sendErrorMessage(m)),
    onFormReset: () => dispatch(reset('add-messages'))
});

@connect(mapStateToProps, mapDispatchToProps)
class Root extends React.Component {

    constructor(props) {
        super(props);

        this.state = { isOpen: false };
        this.onSubmit = this.onSubmit.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        if (!nextProps.isActive) {
            this.props.onSubmitMessageThread(this.props.messages);
        }
    }

    onSubmit(msg) {
        if (this.props.validateFunc &&
            !this.props.validateFunc(msg)) {
            this.props.onNewError(this.props.validateErr);
        } else {
            this.props.onNewMessage(msg);
        }
    }

    render() {
        const { showErrors } = this.state;
        const { isOpen, messages, loaderImage, validateErr, isFetching, onClose } = this.props;
        return (
            <Modal
                contentLabel="Contact Bot"
                className="mainContact__modal"
                isOpen={isOpen}
                onRequestClose={onClose}
            >
                <ModalHeader onClose={onClose} />
                <ChatWindow messages={messages} isFetching={isFetching} loaderImage={loaderImage} />
                <ChatInput onSubmit={this.onSubmit} />
            </Modal>
        );
    }
}

export default Root;
