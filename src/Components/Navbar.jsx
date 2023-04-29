import { logDOM } from "@testing-library/react";
import React from "react";
import logo from "../assets/images/svg/logo.svg";
import btn_plane from "../assets/images/png/btn_plane.png";

function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg ">
        <div className="container myContainer pt-4">
          <a class="d-lg-none navbar-brand" href="#">
            <img src={logo} alt="" className="pe-2" />
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div
            class="offcanvas offcanvas-end"
            tabindex="-1"
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
          >
            <div class="offcanvas-header">
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div className="d-flex justify-content-between align-items-center">
              <div className=" d-flex gap-3">
                <a href="#" className="navbar-brand">
                  <img src={logo} alt="" className="pe-2" />
                </a>
                <ul className="navbar-nav mb-0 gap-4 d-flex align-items-center">
                  <li class="nav-item">
                    <a href="" className="nav-link fc_blue fs_md ff_poppinsReg">
                      Home
                    </a>
                  </li>
                  <li class="nav-item">
                    <a href="" className="nav-link fc_blue fs_md ff_poppinsReg">
                      About us
                    </a>
                  </li>
                  <li class="nav-item">
                    <a href="" className="nav-link fc_blue fs_md ff_poppinsReg">
                      Destinations
                    </a>
                  </li>
                  <li class="nav-item">
                    <a href="" className="nav-link fc_blue fs_md ff_poppinsReg">
                      Tours
                    </a>
                  </li>
                  <li class="nav-item">
                    <a href="" className="nav-link fc_blue fs_md ff_poppinsReg">
                      Blog
                    </a>
                  </li>
                </ul>
              </div>
              <button className="bookNow_btn">
                <div className="d-flex align-items-center gap-2">
                  <p className=" fs_md lh-1 mb-0 fc_orange ff_poppinsMed">
                    Book Now
                  </p>
                  <img src={btn_plane} alt="" />
                </div>{" "}
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
