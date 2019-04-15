const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';
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
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.body;
            return state;
        case SEND_MESSAGE:
            let body = state.newMessageBody;
            state.newMessageBody = '';
            state.messages.push({id: 6, message: body});
            return state;
        default:
            return state;
    }
}

export const sendMessageCreator = () => ({type: SEND_MESSAGE})
export const updateNewMessageBodyCreator = (body) =>
    ({ type: UPDATE_NEW_MESSAGE_BODY, body: body })

export default dialogsReducer;