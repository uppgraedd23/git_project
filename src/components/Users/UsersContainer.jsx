import React from 'react';
import {connect} from 'react-redux';
import {
    follow,
    setCurrentPage,
    unfollow, toggleFollowingInProgress, requestUsers
} from '../../redux/users-reducer';
import Users from './Users';
import Preloader from "../Common/Preloader/Preloader";
import {compose} from "redux";
import {
    getCurrentPage,
    getFollowingInProgress,
    getIsFetching,
    getPageSize,
    getTotalUserCount, getUsers
} from "../../redux/users-selectors";


class UsersContainer extends React.Component {
    componentDidMount() {
        const {currentPage, pageSize} = this.props;
        this.props.getUsers(currentPage, pageSize);
    }

    onPageChanged = (pageNumber) => {
        const {pageSize} = this.props;
        this.props.getUsers(pageNumber, pageSize);
    }

    render() {

        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users totalUserCount={this.props.totalUsersCount}
                   pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage}
                   onPageChanged={this.onPageChanged}
                   users={this.props.users}
                   follow={this.props.follow}
                   unfollow={this.props.unfollow}
                   followingInProgress={this.props.followingInProgress}
            />
        </>
    }
}

let mapStateToProps = (state) => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUserCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state)
    }
}


export default compose(
    connect(mapStateToProps, {follow, unfollow, setCurrentPage, toggleFollowingInProgress, getUsers: requestUsers})
)(UsersContainer)