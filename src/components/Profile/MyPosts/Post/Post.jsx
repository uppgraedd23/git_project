import React from 'react';
import s from './Post.module.css'

const Post = (props) => {

    return <div className={s.item}>
        <img src='https://cdnb.artstation.com/p/assets/images/images/001/877/395/large/yuriy-dulich-ava.jpg?1454106024' />
        {props.message}
        <div>
            <span>like</span> {props.likesCount}
        </div>
    </div>




}

export default Post;