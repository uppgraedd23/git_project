import React from 'react';
import s from './MyPosts.module.css'
import Post from './Post/Post';

const MyPosts = (props) => {

    let postsElements =
        props.posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>);

    let newPostElement = React.createRef();

    let addPost = () => {
        // props.addPost();
        props.dispatch({type: 'ADD_POST'});

    }
    let onPostChange = () => {
        let text = newPostElement.current.value;
        // props.updateNewPostText(text)
        let action = {type: 'UPDATE_NEW_POST_TEXT', newPost: text};
        props.dispatch(action);

    }

    return <div>
        <h3>my posts</h3>
        <div className={s.postsBlock}>
            <div>
                <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}/>
            </div>
            <div>
                <button onClick={addPost}>Add post</button>

            </div>
        </div>
        <div className={s.MyPosts}>
            {postsElements}
        </div>
    </div>
}

export default MyPosts;