import React from 'react'
import Slider from "react-slick";
import beach from '../assets/images/png/beach.png'
import desert from '../assets/images/png/desert.png'
import mountain from "../assets/images/png/mountains.png";
import temple from "../assets/images/png/temple.png";
import tower from "../assets/images/png/tower.png";
import Pyramid from "../assets/images/png/Pyramid.png";
import Arrows from './Arrows';


function Categories() {
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
            slidesToShow: 4,
            slidesToScroll: 3,
            infinite: true,
          },
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 2,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
  return (
    <>
      <div className="container pt-5">
        <div className="d-flex flex-wrap justify-content-between justify-co ntent-center align-items-center pt-5">
          <h3 className=" fc_black fs_5xl ff_interSemiBold mb-0">Categories</h3>
          <Arrows />
        </div>
        <p className="mw_370 ff_InterReg fs_md fc_grey py-4 text-center text-sm-start">
          Here are lots of interesting destinations to visit, but don’t be
          confused—they're already grouped by category.
        </p>
        <Slider {...settings}>
          <div className=" d-flex flex-column align-items-center">
            <div className="image_overlay">
              <img src={beach} alt="" />
              <div className="text-adjust-shadow d-flex align-items-center justify-content-center">
                <p className=" fc_white ff_interSemiBold fs_lg">Visite</p>
              </div>
            </div>
            <p className=" fc_black fs_3xl ff_InterMed pt-3">Beach</p>
          </div>
          <div className=" d-flex flex-column align-items-center">
            <div className="image_overlay">
              <img src={desert} alt="" />
              <div className="text-adjust-shadow d-flex align-items-center justify-content-center">
                <p className=" fc_white ff_interSemiBold fs_lg">Visite</p>
              </div>
            </div>
            <p className=" fc_black fs_3xl ff_InterMed pt-3">Desert</p>
          </div>
          <div className=" d-flex flex-column align-items-center">
            <div className="image_overlay">
              <img src={mountain} alt="" />
              <div className="text-adjust-shadow d-flex align-items-center justify-content-center">
                <p className=" fc_white ff_interSemiBold fs_lg">Visite</p>
              </div>
            </div>
            <p className=" fc_black fs_3xl ff_InterMed pt-3">Mountain</p>
          </div>
          <div className=" d-flex flex-column align-items-center">
            <div className="image_overlay">
              <img src={temple} alt="" />
              <div className="text-adjust-shadow d-flex align-items-center justify-content-center">
                <p className=" fc_white ff_interSemiBold fs_lg">Visite</p>
              </div>
            </div>
            <p className=" fc_black fs_3xl ff_InterMed pt-3">Temple</p>
          </div>
          <div className=" d-flex flex-column align-items-center">
            <div className="image_overlay">
              <img src={tower} alt="" />
              <div className="text-adjust-shadow d-flex align-items-center justify-content-center">
                <p className=" fc_white ff_interSemiBold fs_lg">Visite</p>
              </div>
            </div>
            <p className=" fc_black fs_3xl ff_InterMed pt-3">Tower</p>
          </div>
          <div className=" d-flex flex-column align-items-center">
            <div className="image_overlay">
              <img src={Pyramid} alt="" />
              <div className="text-adjust-shadow d-flex align-items-center justify-content-center">
                <p className=" fc_white ff_interSemiBold fs_lg">Visite</p>
              </div>
            </div>
            <p className=" fc_black fs_3xl ff_InterMed pt-3">Pyramid</p>
          </div>
        </Slider>
      </div>
    </>
  );
}

export default Categories