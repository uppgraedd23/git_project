import React from 'react';
import s from './Friend.module.css'
const Friend = (props) => {

    return <div className={s.item}>
        <img src='https://cdnb.artstation.com/p/assets/images/images/001/877/395/large/yuriy-dulich-ava.jpg?1454106024' />
        {props.name}
    </div>

}
export default Friend;
