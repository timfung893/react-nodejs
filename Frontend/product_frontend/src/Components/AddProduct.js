import React, { Component } from "react";
import axios from "axios";

const addProductBtn = (product_name, product_price, image) => {
  axios
    .post("http://localhost:4000/add", { product_name, product_price, image })
    .then((resp) => console.log(resp.data));
};

class AddProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product_name: "",
      product_price: "",
      image: "",
    };
  }

  isChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value,
    });
  };

  sendData = () => {
    console.log(JSON.stringify(this.state));
    var { product_name, product_price, image } = this.state;
    addProductBtn(product_name, product_price, image);
  };

  render() {
    return (
      <div className="containter">
        <div>
          <div className="col-12">
            <hr />
          </div>
          <form className="mb-2">
            <div className="col-2 mx-auto text-center">
              <div className="form-group">
                <label htmlFor="product_name">Product Name</label>
                <input
                  type="text"
                  name="product_name"
                  id="product_name"
                  className="form-control"
                  placeholder="Enter product name"
                  aria-describedby="helpId"
                  onChange={(event) => {
                    this.isChange(event);
                  }}
                />
                <small id="helpId" className="text-muted">
                  Enter your product name
                </small>
              </div>
              <div className="form-group">
                <label htmlFor="product_price">Product Price</label>
                <input
                  type="text"
                  name="product_price"
                  id="product_price"
                  className="form-control"
                  placeholder="Enter product price"
                  aria-describedby="helpId"
                  onChange={(event) => {
                    this.isChange(event);
                  }}
                />
                <small id="helpId" className="text-muted">
                  Enter your product price
                </small>
              </div>
              <div className="form-group">
                <label htmlFor="image">Image Link</label>
                <input
                  type="text"
                  name="image"
                  id="image"
                  className="form-control"
                  placeholder="Enter image"
                  aria-describedby="helpId"
                  onChange={(event) => {
                    this.isChange(event);
                  }}
                />
                <small id="helpId" className="text-muted">
                  Enter your image
                </small>
              </div>
              <button
                type="reset"
                className="btn btn-info"
                onClick={() => {
                  this.sendData();
                }}
              >
                Add Product
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default AddProduct;
