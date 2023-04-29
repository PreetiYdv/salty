import React from "react";
import iconplane from "../assets/images/png/Iconplane.png";
import intersect from "../assets/images/png/Intersect.png";

function SignUp() {
  return (
    <>
      <div className="container myContainer position-relative py-5  mb-5">
        <div className="bg-color py-5">
          <img
            src={intersect}
            alt=""
            className="intesect_position w-100 h-100"
          />
          <div className="d-flex flex-column justify-content-center align-items-center">
            <h2 className=" fc_black ff_interSemiBold pt-4 pb-2 z-2 position-relative">
              Sign up to our newsletter
            </h2>
            <p className="mw_400 text-center fc_grey fs_md pb-3 z-2 position-relative ff_InterReg">
              Reciev latest news, update, and many other things every week.{" "}
            </p>
            <form>
              <div className="position-relative pb-4">
                <input
                  type="email"
                  id="email"
                  placeholder="Enter Your email address"
                  className="mw_450 outline_none"
                />
                <button
                  type="submit"
                  className="border-0 bg-transparent icon_position"
                >
                  <img src={iconplane} alt="" className="" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignUp;
