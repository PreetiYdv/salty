import React from "react";
import header_img from "../assets/images//png/header_img.png";
import location_icon from "../assets/images/png/location_icon.png";
import calender_icon from "../assets/images/png/calender_icon.png";
import magnifying_icon from "../assets/images/png/magnifying_Icon.png";
import dubai_img from "../assets/images/png/dubai_img.png";
import dubai_location_icon from "../assets/images/png/dubai_location_icon.png";
import boy1 from "../assets/images/png/boy1.png"
import boy2 from "../assets/images/png/boy2.png"
import boy3 from "../assets/images/png/boy3.png"

function Header() {
  return (
    <>
      <div className="container myContainer pb-4 ">
        <div className="row justify-content-lg-between justify-content-center">
          <div className="col-12 col-lg-6 pb-lg-0 pb-4">
            <h2 className=" fs_6xl fc_black ff_Sen mt-xl-5">
              Discover the Best Lovely Places
            </h2>
            <p className=" fc_grey fs_reg pt-3 ff_InterReg">
              Plan and book your perfect trip with expert advice, travel tips,
              destination information and inspiration from us.
            </p>
            <div className="box d-flex justify-content-sm-between justify-content-around align-items-center mt-sm-5 mt-1">
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
          <div className="col-9 col-lg-5">
            <div className=" position-relative">
              <img src={header_img} alt="" className=" w-100" />
              <div className="header_img_box">
                <img src={dubai_img} alt="dubai_img" className="dubai_img w-100" />
                <div className="dubai_box d-flex gap-1 align-items-center p-1 lh-1 ff_InterMed fs_10">
                  <img src={dubai_location_icon} alt="" />
                  <p className="mb-0 fc_black">Dubai</p>
                </div>
                <p className="fc_black ff_InterMed fs_xsm p-2 text-center">
                  Dubai moruvumi
                </p>
                <img src={boy1} alt="" className="boy1_img"/>
                <img src={boy2} alt="" className="boy2_img"/>
                <img src={boy3} alt="" className="boy3_img"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
