import { popConversationStack } from 'contactModal/converse';
import {
    STORE_USER_MESSAGE,
    ADD_BOT_MESSAGE,
    BOT_START_TYPING,
    BOT_STOP_TYPING,
    ADD_ERR_MESSAGE,
    END_MESSAGE_THREAD } from 'contactModal/config/constants';

/**
 * Action creators
 */
const action = (type, payload) => ({ 
    type: type, payload: payload
});

const receiveBotMessage = (msg) => {
    return action(
        ADD_BOT_MESSAGE, 
        { msg }
    );
};

const queueBotMessage = botReplyPromise => dispatch => {
    dispatch(action(BOT_START_TYPING));
    return botReplyPromise
        .then(m => {
            dispatch(
                receiveBotMessage(m)
            );
            dispatch(action(BOT_STOP_TYPING));
        });
};

export const sendMessage = msg => dispatch => {
    // send off bot action
    const botReply = popConversationStack();
    if (botReply) {
        dispatch(queueBotMessage(botReply));
        // add response to state
        console.log("adding user message: ", msg);
        dispatch(action(STORE_USER_MESSAGE, { msg }));
    } else {
        dispatch(action(END_MESSAGE_THREAD));
    }
};

export const sendErrorMessage = err => {
    return action(ADD_ERR_MESSAGE, { err });
};
