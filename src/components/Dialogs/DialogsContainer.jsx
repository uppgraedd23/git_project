import React from 'react';
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux"
import {Redirect} from "react-router-dom";
import {withAuthRedirect} from "../../HOC/withAuthRedirect";
import {compose} from "redux";


let mapSateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage,
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: () => {
            dispatch(sendMessageCreator())
        },

        updateNewMessageBody: (body) => {
            dispatch(updateNewMessageBodyCreator(body));
        }
    }
}


// compose(
//
//     connect(mapSateToProps, mapDispatchToProps),
//     withAuthRedirect
// )(Dialogs)
//
// let AuthRedirectComponent = withAuthRedirect(Dialogs)
//
// const DialogsContainer = connect(mapSateToProps, mapDispatchToProps)(AuthRedirectComponent)

export default compose(
    connect(mapSateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs) ;