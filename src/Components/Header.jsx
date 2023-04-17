import React from "react";
import header_img from "../assets/images//png/header_img.png";
import location_icon from "../assets/images/png/location_icon.png";
import calender_icon from "../assets/images/png/calender_icon.png";
import magnifying_icon from "../assets/images/png/magnifying_Icon.png";

function Header() {
  return (
    <>
      <div className="container pb-4 ">
        <div className="row">
          <div className="col-12 col-lg-6 pb-lg-0 pb-5">
            <h2 className=" fs_6xl fc_black pt-5 ff_Sen mt-xl-5">
              Discover the Best Lovely Places
            </h2>
            <p className=" fc_grey fs_reg pt-3 ff_InterReg">
              Plan and book your perfect trip with expert advice, travel tips,
              destination information and inspiration from us.
            </p>
            <div className="box d-flex justify-content-sm-between justify-content-evenly align-items-center mt-5">
              <div className="d-flex flex_sm_column">
                <div className="border_right">
                  <h3 className=" fs_reg mb-1 ff_InterMed">Where</h3>
                  <div className="d-flex align-items-center gap-4 pb_20">
                    <p className="mb-0 fs_xsm ff_InterReg">
                      Center Point, Lo...
                    </p>
                    <img src={location_icon} alt="" />
                  </div>
                </div>
                <div className="ps-0 ps-sm-4">
                  <h3 className=" fs_reg mb-1 ff_InterMed">Date</h3>
                  <div className="d-flex align-items-center gap-4 pb_20">
                    <p className="mb-0 fs_xsm ff_InterReg">09th March,2021</p>
                    <img src={calender_icon} alt="" />
                  </div>
                </div>
              </div>
              <div>
                <img src={magnifying_icon} alt="" className="cursor_pointer" />
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-6 pt-lg-5">
            <img src={header_img} alt="" className=" w-100" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
