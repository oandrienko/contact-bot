import { combineReducers } from 'redux';
import {
    STORE_USER_MESSAGE,
    ADD_BOT_MESSAGE,
    BOT_START_TYPING,
    BOT_STOP_TYPING,
    ADD_ERR_MESSAGE,
    END_MESSAGE_THREAD } from 'contactModal/config/constants';


const newMessage = (msg, isUser) => ({
    message: msg,
    isUser: isUser,
    timestamp: new Date().toLocaleTimeString()
});

const messages = (state = [], action) => {

    switch(action.type) {

        case ADD_BOT_MESSAGE: {
            console.log("messages reducder", action.payload);
            const { text } = action.payload.msg;
            const msg = newMessage(text, false);
            return [
                ...state,
                msg
            ];
        }

        case ADD_ERR_MESSAGE: {
            const msg = newMessage(action.payload.err, false);
            return [
                ...state,
                msg
            ];
        }

        case STORE_USER_MESSAGE: {
            console.log("adding user message too REDUCER...");
            const msg = newMessage(action.payload.msg, true);
            return [
                ...state,
                msg
            ];
        }

        default:
            return state;
    }
};

const validation = (state = [], action) => {
    switch(action.type) {

        case ADD_BOT_MESSAGE: {
            const { validate, error } = action.payload.msg;
            return { validate, error };
        };

        default:
            return state;
    }
}

const fetching = (state = false, action) => {

    switch(action.type) {

        case BOT_START_TYPING: {
            return true;
        }

        case BOT_STOP_TYPING: {
            return false;
        }

        default:
            return state;
    }
};

const active = (state = true, action) => {

    switch(action.type) {

        case END_MESSAGE_THREAD: {
            return false;
        }

        default:
            return state;
    }
};

const contactModal = combineReducers({
    messages,
    fetching,
    validation,
    active,
});

export default contactModal;