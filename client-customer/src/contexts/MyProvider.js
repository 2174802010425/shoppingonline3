import React, { Component } from "react";
import MyContext from "./MyContext";

class MyProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // global state
      // variables
      token: "",
      customer: null,
      mycart: [],
      // functions
      setMycart: this.setMycart,
      setToken: this.setToken,
      setCustomer: this.setCustomer,
      
    };
  }
  setToken = (value) => {
    this.setState({ token: value });
  };
  setCustomer = (value) => {
    this.setState({ customer: value });
  };
  setMycart = (value) => {
    this.setState({ mycart: value });
  };
  render() {
    return (
      <MyContext.Provider value={this.state}>
        {this.props.children}
      </MyContext.Provider>
    );
  }
}
export default MyProvider;
