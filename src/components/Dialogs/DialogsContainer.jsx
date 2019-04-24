import React from 'react';
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux"

let mapSateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        updateNewMessageBody: ()=>{dispatch(sendMessageCreator())},
        sendMessage: (body)=>{dispatch(updateNewMessageBodyCreator(body));}
    }
}

const DialogsContainer = connect(mapSateToProps,mapDispatchToProps) (Dialogs)
export default DialogsContainer;