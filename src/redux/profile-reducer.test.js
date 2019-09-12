import {profileAPI, usersAPI} from "../api/api";
import {setTotalUserCount, setUsers, toggleIsFetching} from "./users-reducer";

const ADD_POST = 'ADD_POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';
let initialState = {
    posts: [
        {id: 1, message: 'Hi, how are you', likesCount: 12},
        {id: 2, message: 'Its my first post', likesCount: 3},
        {id: 3, message: 'Its my stop ', likesCount: 23},
        {id: 4, message: 'Its my fire post', likesCount: 2},
    ],
    profile: null,
    status: "top status"
}
const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 5,
                message: action.newPostText,
                likesCount: 0
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: action.mypost
            };
        }
        case SET_STATUS: {
            return {
                ...state,
                status: action.status
            }
        }
        case
        SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.profile
            }
        }
        default:
            return state;
    }
}
export const addPostActionCreator = (newPostText) => ({type: ADD_POST, newPostText})
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})
export const setStatus = (status) => ({type: SET_STATUS, status})


export const getUserProfileThunk = (userId) => {
    return (dispatch) => {
        usersAPI.getUserProfile(userId)
            .then(response => {
                dispatch(setUserProfile(response.data));
            });
    }
}
export const getStatus = (userId) => (dispatch) => {
        profileAPI.getStatus(userId)
            .then(response => {
                dispatch(setStatus(response.data));
            });
    }
    export const updateStatusThunk = (status) => (dispatch) => {
        profileAPI.updateStatus(status)
            .then(response => {
                if(response.data.resultCode === 0){
                    dispatch(setStatus(status));

                }
            });
    }




export default profileReducer;