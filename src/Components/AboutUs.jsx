import React from "react";
import { useRef } from "react";
import stars from "../assets/images/png/stars.png";
import camera_boy from "../assets/images/png/camera_boy.png";
import Slider from "react-slick";
import Arrows from "./Arrows";

function AboutUs() {
  const myBtn = useRef();
  var settings = {
    dots: false,
    infinite: true,
    fade: true,
    arrows: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <>
      <div className="container myContainer py-5 my-5">
        <div className="row">
          <div className="col-12 col-lg-6 d-flex flex-column justify-content-center align-items-center">
            <img src={camera_boy} alt="" className="w-100 mw_400 pe-md-5" />
          </div>
          <div className="col-12 col-lg-6 pt-5 d-flex flex-column justify-content-center align-items-lg-start align-items-center">
            <h2 className=" fs_5xl fc_black mw_467 pb-4 ff_interSemiBold">
              <span className="line"> A </span>Customer Said About Us:
            </h2>
            <div className="slider_box position-relative">
              <Slider ref={myBtn} {...settings}>
                <div className="slider_content">
                  <p className="ff_InterReg fs_reg fc_grey pb-4">
                    Salty helped me a lot in finding the best place for our
                    first outdoor adventure trip. They responded very quickly
                    and gave me a detailed account of the place—its history, as
                    well as its best features.
                  </p>
                  <img src={stars} alt="" />
                  <div className="d-flex justify-content-between pt-2">
                    <div className="d-flex flex-column">
                      <h4 className="fc_black ff_InterMed fs_lg">
                        Andrew Sarma
                      </h4>
                      <p className="mb-0 ff_InterReg fs_xsm fc_grey">
                        Enterpreneur
                      </p>
                    </div>
                  </div>
                </div>
                <div className="slider_content">
                  <p className="ff_InterReg fs_reg fc_grey pb-4">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Cupiditate, dolorum iure ullam consequuntur sequi placeat
                    nulla consequatur. Voluptatem maiores quae perspiciatis
                    aperiam iusto expedita molestia
                  </p>
                  <img src={stars} alt="" />
                  <div className="d-flex justify-content-between pt-2">
                    <div className="d-flex flex-column">
                      <h4 className="fc_black ff_InterMed fs_lg">
                        Andrew Sarma
                      </h4>
                      <p className="mb-0 ff_InterReg fs_xsm fc_grey">
                        Enterpreneur
                      </p>
                    </div>
                  </div>
                </div>
              </Slider>
              <div className="d-flex flex-wrap gap-3 align-items-center arrow_position">
                <button
                  onClick={() => myBtn.current.slickPrev()}
                  className="arrow_btn"
                >
                  <svg
                    width="8"
                    height="14"
                    viewBox="0 0 8 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7 13L1 7L7 1"
                      stroke="#2D3134"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </button>
                <button
                  onClick={() => myBtn.current.slickNext()}
                  className="arrow_btn next"
                >
                  <svg
                    width="8"
                    height="14"
                    viewBox="0 0 8 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7 13L1 7L7 1"
                      stroke="#2D3134"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutUs;
