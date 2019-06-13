import React from 'react';
import Header from "./Header";
import * as axios from "axios/index";
import {connect} from "react-redux"
import {userAuthThunk} from "../../redux/auth-reducer";

class HeaderContainer extends React.Component {
    componentDidMount() {
        this.props.userAuthThunk()
    }

    render() {
        return <Header {...this.props}/>;
    }

}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
});
export default connect(mapStateToProps, {userAuthThunk})(HeaderContainer);