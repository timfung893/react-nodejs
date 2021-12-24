import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <div className="jumbotron jumbotron-fluid text-center">
        <div className="container">
          <h1 className="display-3">Product List</h1>
          <p className="lead">With React and Nodejs</p>
        </div>
      </div>
    );
  }
}

export default Header;
