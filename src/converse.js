import conversationFlow from 'contactModal/config/conversation';


/**
 * Contains all chatbot conversation logic
 */ 
let conversationStack = null;

const _timeoutPromise = (item, time) => {
    return new Promise(resolve => {
        setTimeout(() => resolve(item), time);
    });
};

const startConversation = () => {
    // empty the stack if called again
    conversationStack = [];
    conversationFlow.forEach(msg => conversationStack.push(msg));
};

const popConversationStack = () => {
    if (!conversationStack) startConversation();
    // pop top item
    const msg = conversationStack.shift();
    console.log("popping msg --> ", msg, conversationStack);
    if (!msg) return undefined;
    // for single item
    return _timeoutPromise(msg, msg.time);
};

export { startConversation, popConversationStack };
