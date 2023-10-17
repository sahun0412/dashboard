import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "../styles/sidebar.css";
import pp from "../images/pp.jpg";
import "bootstrap-icons/font/bootstrap-icons.css";

import { BadgePercent } from "lucide-react";

export function SideBar() {
  return (
    <div className="sideBar">
      <div className="m-2">
        <h4>
          <i class="bi bi-nut me-1"></i>Dashboard
        </h4>
      </div>

      <div>
        <ul style={{ color: "white" }} className="mt-5">
          <li className="nav-item ms-3 mt-5">
            <i className="bi bi-box me-4"></i>Dashboard
          </li>
          {/* Products */}
          <li className="nav-item mt-4">
            <div class="btn-group dropend">
              <button
                class="btn bg-none border-none dropdown-toggle text-white"
                type="button"
                data-bs-toggle="dropdown"
              >
                <i className="bi bi-unity me-4"></i> Products
              </button>
              <ul class="dropdown-menu">
                <li>
                  <a class="dropdown-item" href="#">
                    Drop Menu
                  </a>
                </li>
              </ul>
            </div>
          </li>

          {/* Customers */}

          <li className="nav-item mt-4">
            <div class="btn-group dropend">
              <button
                class="btn bg-none border-none dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
              >
                <i className="bi bi-file-person me-4"></i> Customers
              </button>
              <ul class="dropdown-menu">
                <li>
                  <a class="dropdown-item" href="#">
                    Drop Menu
                  </a>
                </li>
              </ul>
            </div>
          </li>

          {/* Income */}
          <li className="nav-item mt-4">
            <div class="btn-group dropend">
              <button
                class="btn bg-none border-none dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
              >
                <i className="bi bi-wallet2 me-4"></i> Income
              </button>
              <ul class="dropdown-menu">
                <li>
                  <a class="dropdown-item" href="#">
                    Drop Menu
                  </a>
                </li>
              </ul>
            </div>
          </li>

          {/* Promote */}

          <li className="nav-item mt-4">
            <div class="btn-group dropend">
              <button
                class="btn bg-none border-none dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
              >
                <BadgePercent className="me-4" /> Promote
              </button>
              <ul class="dropdown-menu">
                <li>
                  <a class="dropdown-item" href="#">
                    Drop Menu
                  </a>
                </li>
              </ul>
            </div>
          </li>

          {/* Help */}

          <li className="nav-item mt-4">
            <div class="btn-group dropend">
              <button
                class="btn bg-none border-none dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
              >
                <i className="bi bi-question-diamond me-4"></i> Help
              </button>
              <ul class="dropdown-menu">
                <li>
                  <a class="dropdown-item" href="#">
                    Drop Menu
                  </a>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>

   
    </div>
  );
}
