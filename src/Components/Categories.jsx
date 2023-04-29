import React, { useRef } from "react";
import Slider from "react-slick";
import beach from "../assets/images/png/beach.png";
import desert from "../assets/images/png/desert.png";
import mountain from "../assets/images/png/mountains.png";
import temple from "../assets/images/png/temple.png";
import tower from "../assets/images/png/tower.png";
import Pyramid from "../assets/images/png/Pyramid.png";
import Arrows from "./Arrows";

function Categories() {
  const myBtn = useRef();
  var settings = {
    dots: false,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 550,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 380,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <div className="container myContainer pt-5">
        <div className="d-flex flex-wrap justify-content-between justify-content-center align-items-center pt-5">
          <h3 className=" fc_black fs_5xl ff_interSemiBold mb-0">Categories</h3>
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
        <p className="mw_370 ff_InterReg fs_md fc_grey py-4 text-center text-sm-start mb-4">
          Here are lots of interesting destinations to visit, but don’t be
          confused—they're already grouped by category.
        </p>

        <Slider {...settings}>
          <div className="px_15 d-flex flex-column align-items-center">
            <div className=" position-relative image_overlay">
              <img src={beach} alt="" className="rounded-pill" />
            </div>
            <p className=" fc_black fs_3xl ff_InterMed pt-3">Beach</p>
          </div>
          <div className="px_15 d-flex flex-column align-items-center">
            <div className=" position-relative image_overlay">
              <img src={desert} alt="" className="rounded-pill" />
            </div>
            <p className=" fc_black fs_3xl ff_InterMed pt-3">Desert</p>
          </div>
          <div className="px_15 d-flex flex-column align-items-center">
            <div className=" position-relative image_overlay">
              <img src={mountain} alt="" className="rounded-pill" />
            </div>
            <p className=" fc_black fs_3xl ff_InterMed pt-3">Mountain</p>
          </div>
          <div className="px_15 d-flex flex-column align-items-center">
            <div className=" position-relative image_overlay">
              <img src={temple} alt="" className="rounded-pill" />
            </div>
            <p className=" fc_black fs_3xl ff_InterMed pt-3">Temple</p>
          </div>
          <div className="px_15 d-flex flex-column align-items-center">
            <div className=" position-relative image_overlay">
              <img src={tower} alt="" className="rounded-pill" />
            </div>
            <p className=" fc_black fs_3xl ff_InterMed pt-3">Tower</p>
          </div>
          <div className="px_15 d-flex flex-column align-items-center">
            <div className=" position-relative image_overlay">
              <img src={Pyramid} alt="" className="rounded-pill" />
            </div>
            <p className=" fc_black fs_3xl ff_InterMed pt-3">Pyramid</p>
          </div>
        </Slider>
      </div>
    </>
  );
}

export default Categories;
