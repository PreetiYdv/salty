import React, { useRef } from "react";
import mountain_hiking from "../assets/images/png/mountain_hiking.png";
import Button from "./Button";
import Slider from "react-slick";
import peru from "../assets/images/png/peru.png";
import arizona from "../assets/images/png/arizona.png";
import Arrows from "./Arrows";

function Destination() {
  const myBtn = useRef();
  var settings = {
    dots: false,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 3.2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2.5,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1.5,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <div className="container pt-5 mt-5">
        <div className="d-flex flex-wrap  justify-content-between align-items-center">
          <h2 className="mw_400 ff_interSemiBold fs_5xl fc_black">
            Find Popular Destination
          </h2>
          <div className="d-flex gap-3 align-items-center py-3">
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
      <div className="ps-0 ps-lg-5">
        <Slider ref={myBtn} {...settings}>
          <div className="card">
            <img src={mountain_hiking} alt="" className="w-100" />
            <h3 className=" ff_interSemiBold fc_black fs_xxl pt-3 ps-2">
              Mountain Hiking Tour
            </h3>
            <p className="ff_InterReg fs_sm fc_grey ps-2">
              Mountain Hiking Tour
            </p>
            <div className="d-flex justify-content-between align-items-center ps-2">
              <p className="mb-0 fs_xxl ff_interSemiBold">
                $89 <span className=" fc_grey"> /Person</span>
              </p>
              <Button text="Book Now" />
            </div>
          </div>
          <div className="card">
            <img src={peru} alt="" className="w-100" />
            <h3 className=" ff_interSemiBold fc_black fs_xxl pt-3 ps-2">
              Machu Picchu, Peru
            </h3>
            <p className="ff_InterReg fs_sm fc_grey ps-2">Machu Picchu, Peru</p>
            <div className="d-flex justify-content-between align-items-center ps-2">
              <p className="mb-0 fs_xxl ff_interSemiBold">
                $99 <span className=" fc_grey"> /Person</span>
              </p>
              <Button text="Book Now" />
            </div>
          </div>
          <div className="card">
            <img src={arizona} alt="" className="w-100" />
            <h3 className=" ff_interSemiBold fc_black fs_xxl pt-3 ps-2">
              The Grand Canyon, Arizona
            </h3>
            <p className="ff_InterReg fs_sm fc_grey ps-2">
              Mountain Hiking Tour
            </p>
            <div className="d-flex justify-content-between align-items-center ps-2">
              <p className="mb-0 fs_xxl ff_interSemiBold">
                $70 <span className=" fc_grey"> /Person</span>
              </p>
              <Button text="Book Now" />
            </div>
          </div>
          <div className="card">
            <img src={mountain_hiking} alt="" className="w-100" />
            <h3 className=" ff_interSemiBold fc_black fs_xxl pt-3 ps-2">
              Mountain Hiking Tour
            </h3>
            <p className="ff_InterReg fs_sm fc_grey ps-2">
              Mountain Hiking Tour
            </p>
            <div className="d-flex justify-content-between align-items-center ps-2">
              <p className="mb-0 fs_xxl ff_interSemiBold">
                $89 <span className=" fc_grey"> /Person</span>
              </p>
              <Button text="Book Now" />
            </div>
          </div>
        </Slider>
      </div>
    </>
  );
}

export default Destination;
