import React, { Component } from "react";
import { Link } from "react-router-dom";
import MyContext from "../contexts/MyContext";
class Inform extends Component {
  static contextType = MyContext
  render() {
    return (
      <div className="border-bottom">
        <div className="float-left">
          <Link to="">Login</Link> | <Link to="/signup">Sign-up</Link> |{" "}
          <Link to="/active">Active</Link>
        </div>
        <div className="float-right">
          <Link to="">My cart</Link> have <b>0</b> items
        </div>
        {this.context.token === '' ?
          <div><Link to='/login'>Login</Link> | <Link to='/signup'>Sign-up</Link> | <Link to='/active'>Active</Link></div>
          :
          <div>Hello <b>{this.context.customer.name}</b> | <Link to='/home' onClick={() => this.lnkLogoutClick()}>Logout</Link> | <Link to=''>My profile</Link> | <Link to=''>My orders</Link></div>
        }
         <Link to='/myprofile'>My profile</Link>
         
         <Link to=''>My cart</Link> have <b>{this.context.mycart.length}</b> items
         <Link to='/mycart'>My cart</Link> have <b>{this.context.mycart.length}</b> items
         <Link to='/myorders'>My orders</Link>
        <div className="float-clear" />
        
      </div>
    );
  }
  lnkLogoutClick() {
    this.context.setToken('');
    this.context.setCustomer(null);
    this.context.setMycart([]);
  }
}
export default Inform;
