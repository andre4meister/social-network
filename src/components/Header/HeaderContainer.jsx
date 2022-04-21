import axios from "axios";
import React from "react";
import { connect } from "react-redux";
import Header from "./Header";
import {setAuthUserData} from '../../Redux/auth-reducer'

class HeaderContainer extends React.Component {
  componentDidMount() {
   axios
   .get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {withCredentials: true})
   .then((response) => {
     if(response.data.result === 0) {
       let {id, login, email} = response.data.data
       this.props.setAuthUserData(id, email, login);
     }
   });
  } 
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

export default connect(mapStateToprops, {setAuthUserData})(HeaderContainer);