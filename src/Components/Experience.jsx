import React from "react";
import boy_with_camera from "../assets/images/png/boy_with_camera.png";
import icon from "../assets/images/png/Icon.png";
import signal_icon from "../assets/images/png/Orion_cellular-signal.png";

function Experience() {
  return (
    <>
      <div className="container myContainer py-5 mt-lg-5">
        <div className="row align-items-center justify-content-center justify-content-lg-between">
          <div className="col-9 col-lg-6 pe-lg-5">
            <div className=" position-relative">
              <img src={boy_with_camera} alt="" className="w-100" />
              <div className="exp_box">
                <img src={icon} alt="" />
                <p className=" fc_orange ff_poppinsSemiBold fs_3xl py-2 mb-0">
                  600%
                </p>
                <p className=" fs_reg fc_lightGrey mb-0">Destinations</p>
              </div>
              <div className="customers_box">
                <div className="d-flex gap-3 justify-content-evenly align-items-center">
                  <img src={signal_icon} alt="" />
                  <p className="mb-0 fs_lg ff_poppinsSemiBold">5000+</p>
                </div>
                <p className=" fs_xsm fc_grey mb-0 ps-4">Customars</p>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-6 ps-lg-5 pt-5 pt-lg-0 d-flex flex-column justify-content-center align-items-center align-items-lg-start">
            <p className=" fc_orange fs_lg ff_interSemiBold text-center text-lg-start letter_spacing pt-lg-5">
              Our Experience
            </p>
            <h2 className=" fc_black ff_interSemiBold fs_5xl pb-2 text-center text-lg-start">
              Our Stories Have Adventures
            </h2>
            <p className="ff_InterReg fc_grey fs_md pb-4 text-center text-lg-start mw_467">
              We are experienced in bringing adventures to stay their journey,
              with all outdoor destinations in the world as our specialties.
              Start your adventure now! Nature has already called you!
            </p>
            <div className="row justify-content-center">
              <div className="col-6 col-sm-4 justify-content-center d-flex">
                <div className="rect">
                  <h3 className=" fc_orange ff_interSemiBold fs_4xl">12K+</h3>
                  <p className=" fc_lightGrey ff_InterReg fs_xl">
                    Succes Journey
                  </p>
                </div>
              </div>
              <div className="col-6 col-sm-4 justify-content-center d-flex">
                <div className="rect">
                  <h3 className=" fc_orange ff_interSemiBold fs_4xl">16+</h3>
                  <p className=" fc_lightGrey ff_InterReg fs_xl">
                    Awards Winning
                  </p>
                </div>
              </div>
              <div className=" col-6 col-sm-4 mt-3 mt-sm-0 justify-content-center d-flex">
                <div className="rect">
                  <h3 className=" fc_orange ff_interSemiBold fs_4xl">20+</h3>
                  <p className=" fc_lightGrey ff_InterReg fs_xl">
                    Years Of Experience
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Experience;
