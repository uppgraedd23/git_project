import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import friendsReducer from "./friends-reducer";


let store = {
    _state: {
        profilePage: {

            posts: [
                {id: 1, message: 'Hi, how are you', likesCount: 12},
                {id: 2, message: 'Its my first post', likesCount: 3},
                {id: 3, message: 'Its my stop ', likesCount: 23},
                {id: 4, message: 'Its my fire post', likesCount: 2},
            ],
            newPostText: 'default post'
        },
        dialogsPage: {
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
            newMessageText: 'default message'
        },
        friends: [
            {name: 'GrandMaster', id: 0},
            {name: 'Genius', id: 1},
            {name: 'Professional', id: 2},
        ]
    },
    _callSubscriber() {
        console.log('State Changed')
    },
    getState() {
        return this._state
    },
    subscribe(observer) {
        this._callSubscriber = observer;  // observer
    },
    // // addPost() {
    // //     let newPost = {
    // //         id: 5,
    // //         message: this._state.profilePage.newPostText,
    // //         likesCount: 0
    // //     };
    // //     this._state.profilePage.posts.push(newPost);
    // //     this._state.profilePage.newPostText='';
    // //     this._callSubscriber(this._state)
    // // },
    // // updateNewPostText  (newPost)   {
    // //     this._state.profilePage.newPostText = newPost;
    // //     this._callSubscriber(this._state);
    // // },
    // addMessage() {
    //
    //     let newMessage = {
    //         id: 6,
    //         message: this._state.dialogsPage.newMessageText,
    //     };
    //     this._state.dialogsPage.messages.push(newMessage);
    //     this._state.dialogsPage.newMessageText = '';
    //     this._callSubscriber(this._state);
    // },
    // updateNewMessageText(newMessage) {
    //     this._state.dialogsPage.newMessageText = newMessage;
    //     this._callSubscriber(this._state);
    // },
    dispatch(action) {

        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        this._state.friends = friendsReducer(this._state.friends, action)
        this._callSubscriber(this._state);
        }
    }





export default store;
window.store = store;







