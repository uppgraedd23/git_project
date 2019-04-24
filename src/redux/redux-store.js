import createStore from "redux/src/createStore";
import combineReducers from "redux/src/combineReducers";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import friendsReducer from "./friends-reducer";

let reducers = combineReducers({
    profilePage:profileReducer,
    dialogsPage:dialogsReducer,
    friends:friendsReducer

});

let store = createStore(reducers);

window.store = store;


export default store;