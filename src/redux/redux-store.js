import createStore from "redux/src/createStore";
import combineReducers from "redux/src/combineReducers";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import friendsReducer from "./friends-reducer";
import usersReducer from "./users-reducer";
import authReducer from "./auth-reducer";
import {applyMiddleware} from "redux";
import thunkMiddleware  from "redux-thunk"
import { reducer as formReducer } from 'redux-form'
import appReducer from "./app-reducer";


let reducers = combineReducers({
    profilePage:profileReducer,
    dialogsPage:dialogsReducer,
    friends:friendsReducer,
    usersPage:usersReducer,
    auth:authReducer,
    form:formReducer,
    app: appReducer

});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;


export default store;