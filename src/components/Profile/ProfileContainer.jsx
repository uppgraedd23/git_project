import React from 'react';
import Profile from "./Profile";
import * as axios from "axios";
import {connect} from 'react-redux'
import {getUserProfileThunk} from "../../redux/profile-reducer";
import {Redirect, withRouter} from "react-router-dom";
import {usersAPI} from "../../api/api";
import {withAuthRedirect} from "../../HOC/withAuthRedirect";
import {compose} from "redux";


class ProfileContainer extends React.Component {

    componentDidMount() {

        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 2
        }
        ;
        this.props.getUserProfileThunk(userId)
    }

    render() {


        return (
            <Profile {...this.props} profile={this.props.profile}/>
        )

    }
}



export default compose(
    connect(mapStateToProps, {getUserProfileThunk}),
<<<<<<< HEAD
    withRouter,
    withAuthRedirect
=======
    withRouter
    // withAuthRedirect
)(ProfileContainer)

>>>>>>> status

)(ProfileContainer)

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
})

