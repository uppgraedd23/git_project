import React from 'react';
import Profile from "./Profile";
import {connect} from 'react-redux'
import {getStatus, getUserProfileThunk, updateStatusThunk, savePhoto} from "../../redux/profile-reducer";
import {Redirect, withRouter} from "react-router-dom";
import {compose} from "redux";
import ProfileInfo from "./ProfileInfo/ProfileInfo";


class ProfileContainer extends React.Component {
    refreshProfile() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = this.props.authorizedUserId
            if (!userId) {
                this.props.history.push('/login');
            }
        }
        ;
        this.props.getUserProfileThunk(userId)
        this.props.getStatus(userId)
    }

    componentDidMount() {
        this.refreshProfile()
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.match.params.userId != prevProps.match.params.userId){
            debugger
            this.refreshProfile()

        }
    }

    render() {

        return (
            <Profile {...this.props}
                     isOwner={!this.props.match.params.userId}
                     profile={this.props.profile}
                     status={this.props.status}
                     updateStatus={this.props.updateStatusThunk}
                     savePhoto={this.props.savePhoto}

            />
        )
    }
}

let mapStateToProps = (state) => {
    // console.log('mapStateToProps PROFILE')
    return ({
        profile: state.profilePage.profile,
        status: state.profilePage.status,
        authorizedUserId: state.auth.userId,
        isAuth: state.auth.isAuth

    })
}


export default compose(
    connect(mapStateToProps, {getUserProfileThunk, getStatus, updateStatusThunk, savePhoto}),
    withRouter
)(ProfileContainer)



