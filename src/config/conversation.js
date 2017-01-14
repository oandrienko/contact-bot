/**
 * The flow of the conversation when people begin chat
 */
export default [

    {
        text: [
            "Hey, do you want to leave a message for Oles?",
            " Type out something and I’ll grab your details!"
        ],
        time: [300, 200],
        validate: null,
        error: null
    },

    {
        name: "name",
        text: "What is your name?",
        time: 400,
        validate: null,
        error: null
    },

    {
        name: "email",
        text: "What is your return email?",
        timeout: 200,
        validate: ans => ans.match(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/),
        error: "Please enter a valid email!",
    },

    {
        name: "message",
        text: "Write our your message to Oles and I’ll send it along!",
        time: 350,
        validate: null,
        error: null
    },

    {
        text: [
            "Thanks! Nice meeting you. To make sure - are you sure you want me to send off the message?",
            " Type something and I'll send it off."
        ],
        time: 400,
        validate: null,
        error: null
    }

];
