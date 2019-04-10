const ADD_MESSAGE = 'ADD_MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE_NEW_MESSAGE_TEXT';

let initialState = {
    dialogs: [
    {id: 1, name: 'Andrey'},
    {id: 2, name: 'Sveta'},
    {id: 3, name: 'Valera'},
    {id: 4, name: 'Dimuch'},
    {id: 5, name: 'Misha'},
    {id: 6, name: 'Drocher'},
],
    messages: [
    {id: 1, message: 'Hi'},
    {id: 2, message: 'How is your name'},
    {id: 3, message: 'yo'},
    {id: 4, message: 'yo'},
    {id: 5, message: 'yo'},
],
    newMessageText: 'default message'}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            let newMessage = {
                id: 6,
                message: state.newMessageText,
            };
            state.messages.push(newMessage);
            state.newMessageText = '';
            return state;
        case UPDATE_NEW_MESSAGE_TEXT: {
            state.newMessageText = action.newMessage;
            return state;
        }
        default :
            return state;
    }
}

export const addMessageCreator = () => ({type: ADD_MESSAGE})
export const updateNewMessageTextCreator = (messageText) => ({
    type: UPDATE_NEW_MESSAGE_TEXT, newMessage: messageText
})

export default dialogsReducer;