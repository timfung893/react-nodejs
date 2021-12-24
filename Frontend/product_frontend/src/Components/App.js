import React, { Component } from "react";
import "./App.css";
import Header from "./Header";
import Product from "./Product";
import axios from "axios";

// get data from db
const getProductData = () =>
  axios.get("http://localhost:4000/getdata01").then((res) => res.data);

// add data from db
const addProductBtn = (product_name, product_price, image) => {
  axios
    .post("http://localhost:4000/add", { product_name, product_price, image })
    .then((resp) => console.log(resp.data));
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
    };
  }
  // load data from db
  componentDidMount() {
    if (this.state.data === null) {
      getProductData().then((res) => {
        this.setState({
          data: res,
          product_name: "",
          product_price: "",
          image: "",
        });
      });
    }
  }
  // print onto client
  printData = () => {
    if (this.state.data !== null) {
      return this.state.data.map((value, key) => (
        <Product
          key={key}
          product_name={value.product_name}
          product_price={value.product_price}
          image={value.image}
        />
      ));
    }
  };
  // save input change in state
  isChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value,
    });
  };
  // send data to db
  sendData = () => {
    var { product_name, product_price, image } = this.state;
    var dataTemp = [];
    const item = {};
    item.product_name = product_name;
    item.product_price = product_price;
    item.product_image = image;

    dataTemp = this.state.data;
    console.log(dataTemp);
    if (item.product_name !== "") {
      dataTemp.push(item);
      this.setState({
        data: dataTemp,
      });
    }
    console.log(dataTemp);

    addProductBtn(product_name, product_price, image);
  };

  render() {
    return (
      <div>
        <Header />
        <div className="container-fluid">
          <div className="row">
            <div className="col-8">
              <div className="row">{this.printData()}</div>
            </div>
            <div className="col-4">
              <form className="mb-2">
                <div>
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
                    className="btn btn-block btn-info"
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
        </div>
      </div>
    );
  }
}

export default App;
