import React from "react";
import boy_with_camera from "../assets/images/png/boy_with_camera.png";

function Experience() {
  return (
    <>
      <div className="container pt-5 mt-5">
        <div className="row align-items-center">
          <div className="col-12 col-lg-6 pe-3">
            <img src={boy_with_camera} alt="" className="w-100" />
          </div>
          <div className="col-12 col-lg-6 pt-5 ps-md-5 pe-md-5 ">
            <p className=" fc_orange fs_lg ff_interSemiBold text-center text-md-start">Our Experience</p>
            <h2 className=" fc_black ff_interSemiBold fs_5xl pb-2 text-center text-md-start">
              Our Stories Have Adventures
            </h2>
            <p className="ff_InterReg fc_grey fs_md pb-3 text-center text-md-start">
              We are experienced in bringing adventures to stay their journey,
              with all outdoor destinations in the world as our specialties.
              Start your adventure now! Nature has already called you!
              </p>
            <div className="d-flex flex-wrap justify-content-center gap-4">
              <div className="rect rect_padding">
                <h3 className=" fc_orange ff_interSemiBold fs_4xl">12K+</h3>
                <p className=" fc_lightGrey ff_InterReg fs_xl">
                  Succes Journey
                </p>
              </div>
              <div className="rect rect2_padding">
                <h3 className=" fc_orange ff_interSemiBold fs_4xl">16+</h3>
                <p className=" fc_lightGrey ff_InterReg fs_xl">
                  Awards Winning
                </p>
              </div>
              <div className="rect rect3_padding">
                <h3 className=" fc_orange ff_interSemiBold fs_4xl">20+</h3>
                <p className=" fc_lightGrey ff_InterReg fs_xl">
                  Years Of Experience
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Experience;
