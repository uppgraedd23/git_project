import React from 'react';
import Profile from "./Profile";
import {connect} from 'react-redux'
import {getStatus, getUserProfileThunk, updateStatusThunk} from "../../redux/profile-reducer";
import {Redirect, withRouter} from "react-router-dom";
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
        this.props.getStatus(userId)

    }

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile}
                     status = {this.props.status}
                     updateStatus = {this.props.updateStatusThunk}/>
        )
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status

})

export default compose(
    connect(mapStateToProps, {getUserProfileThunk, getStatus, updateStatusThunk }),
    withRouter,
    withAuthRedirect
)(ProfileContainer)



