import React from 'react';
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux"


const mapSateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText

    }
}
const mapDispatchToProps = (dispatch) =>  {
    return {

        addPost: (newPostText) => {
            dispatch(addPostActionCreator(newPostText));
        }
        ,
    }
}

const MyPostsContainer = connect(mapSateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer;