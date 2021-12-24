import React, { Component } from "react";

class Product extends Component {
  render() {
    return (
      <div className="col-4">
        <div className="card">
          <img
            className="card-img-top"
            src={this.props.image}
            alt=""
          />
          <div className="card-body">
            <h4 className="float-left">{this.props.product_name}</h4>
            <h4 className="card-text float-right">{this.props.product_price}</h4>
          </div>
        </div>
      </div>
    );
  }
}

export default Product;
