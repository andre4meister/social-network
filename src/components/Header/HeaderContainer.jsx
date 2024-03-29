import React from "react";
import { connect } from "react-redux";
import Header from "./Header";
import {logout} from '../../Redux/auth-reducer.ts'


class HeaderContainer extends React.Component {
  render() {
    return ( <Header {...this.props}/>);
  }
}
let mapStateToprops = (state) => {
  return {
    isAuth: state.auth.isAuth,
    login: state.auth.login,
  }
}

export default connect(mapStateToprops, {logout})(HeaderContainer);
