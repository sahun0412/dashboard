import React from "react";
import "../styles/products.css";
import sea from "../images/sea1.jpg";
import blue from "../images/blue.jpg";

const Products = () => {
  return (
    <div className="row ms-4 mt-5 border-light bg-light rounded-3">
      <div className="table-responsive">
        <table className="table mt-2">
          <tbody>
            <tr>
              <td>
                <h3>Products Sell</h3>
              </td>
              <td>
                <div className="form">
                  <i className="fa fa-search"></i>
                  <input
                    type="text"
                    className="w-100 form-control form-input"
                    placeholder="Search anything"
                  />
                </div>
              </td>
              <td>
                <div className="dropdown">
                  <button
                    className="btn text-dark border-4 rounded-3 border-light bg-none dropdown-toggle"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Last 30 days
                  </button>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="#">
                        Drop Menu
                      </a>
                    </li>
                  </ul>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="table-responsive p-4">
        <table className="table p-4">
          <thead>
            <tr>
              <th scope="col-8">Products Name</th>
              <th scope="col-2">Stack</th>
              <th scope="col-2">Price</th>
              <th scope="col-2">Total Sales</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="d-flex">
                <figure>
                  <img src={sea} className="img-fluid" alt="" width={150} height={100} className="rounded-4 border-2 border-light" />
                </figure>
                <div>
                  <h4 className="ms-2">Abstract 3D</h4>
                  <p className="text-secondary ms-2">Lorem ipsum dolor sit amet consectetur.</p>
                </div>
              </td>
              <td>32 in Stock</td>
              <td><b>$ 45.99</b></td>
              <td>20</td>
            </tr>
            <tr>
              <td className="d-flex">
                <figure>
                  <img src={blue} className="img-fluid" alt="" width={150} height={100} className="rounded-4 border-2 border-light" />
                </figure>
                <div>
                  <h4 className="ms-2">Sarphens Illustration</h4>
                  <p className="text-secondary ms-2">Lorem ipsum dolor sit amet consectetur.</p>
                </div>
              </td>
              <td>32 in Stock</td>
              <td><b>$ 45.99</b></td>
              <td>20</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Products;
