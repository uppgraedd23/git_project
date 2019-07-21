import React from 'react';
import s from './MyPosts.module.css'
import Post from './Post/Post';
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import {Textarea} from "../../Common/FormControls/FormsControls";

const maxLength10 = maxLengthCreator(10)
function AddNewPostForm(props) {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field
                    placeholder={"Post message"}
                    name={'newPostText'}
                    component={Textarea}
                    validate ={[required, maxLength10]}
                />
            </div>
            <div>
                <button>Add post</button>
            </div>
        </form>
    )
}

AddNewPostForm = reduxForm({form: 'ProfileAddNewPostForm'})(AddNewPostForm)


const MyPosts = (props) => {

    let postsElements =
        props.posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>);

    const onAddPost = (values) => {
        props.addPost(values.newPostText)
        // console.log(formData)
    }


    return <div>
        <h3>my posts</h3>
        <AddNewPostForm onSubmit={onAddPost}/>

        <div className={s.MyPosts}>
            {postsElements}
        </div>
    </div>
}



export default MyPosts;