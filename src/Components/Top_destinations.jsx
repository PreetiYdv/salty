import React from "react";
import Button from "./Button";
import veitnam1 from "../assets/images/png/veitnam1.png";
import veitnam2 from "../assets/images/png/veitnam2.png";
import yellow_house from "../assets/images/png/yellow_house.png";
import bridge from "../assets/images/png/bridge.png";
import tower from "../assets/images/png/camera.png";
import tower2 from "../assets/images/png/tower2.png";

function Top_destinations() {
  return (
    <div>
      <div className="container py-5">
        <h2 className=" text-center fc_black fs_5xl ff_interSemiBold">
          Top Destinations
        </h2>
        <p className=" text-center fc_grey ff_InterReg fs_md">
          Sost Brilliant reasons Entrada should be your one-stop-shop!
        </p>
        <div className="d-flex align-items-center justify-content-center gap-3 flex-wrap">
          <Button text="London" fontFamily="ff_poppinsReg" />
          <Button text="Bangkok" fontFamily="ff_poppinsReg" />
          <Button text="England" fontFamily="ff_poppinsReg" />
          <Button text="Singapore" fontFamily="ff_poppinsReg" />
          <Button text="Italy" fontFamily="ff_poppinsReg" />
        </div>
        <div className="grid_container mt-5">
          <div className="grid_item grid_item1">
            <img src={veitnam1} alt="" />
            <div class="overlay">
              <div className="d-flex flex-column justify-content-between align-items-start h-100 w-100 p-4 text">
                <div className="rating">3.5</div>
                <div>
                  <h3 className="fc_white ff_interSemiBold fs_lg">Vientam</h3>
                  <p className="fc_white ff_InterReg fs_sm">Worefall</p>
                </div>
              </div>
            </div>
          </div>
          <div className="grid_item grid_item2">
            <img src={veitnam2} alt="" />
            <div class="overlay">
              <div className="d-flex flex-column justify-content-between align-items-start h-100 w-100 p-4 text">
                <div className="rating">3.5</div>
                <div>
                  <h3 className="fc_white ff_interSemiBold fs_lg">Vientam</h3>
                  <p className="fc_white ff_InterReg fs_sm">Worefall</p>
                </div>
              </div>
            </div>
          </div>
          <div className="grid_item grid_item3">
            <img src={yellow_house} alt="" />
            <div class="overlay">
              <div className="d-flex flex-column justify-content-between align-items-start h-100 w-100 p-4 text">
                <div className="rating">3.5</div>
                <div>
                  <h3 className="fc_white ff_interSemiBold fs_lg">Vientam</h3>
                  <p className="fc_white ff_InterReg fs_sm">Worefall</p>
                </div>
              </div>
            </div>
          </div>
          <div className="grid_item grid_item4">
            <img src={bridge} alt="" />
            <div class="overlay">
              <div className="d-flex flex-column justify-content-between align-items-start h-100 w-100 p-4 text">
                <div className="rating">3.5</div>
                <div>
                  <h3 className="fc_white ff_interSemiBold fs_lg">Vientam</h3>
                  <p className="fc_white ff_InterReg fs_sm">Worefall</p>
                </div>
              </div>
            </div>
          </div>
          <div className="grid_item grid_item5">
            <img src={tower} alt="" />
            <div class="overlay">
              <div className="d-flex flex-column justify-content-between align-items-start h-100 w-100 p-4 text">
                <div className="rating">3.5</div>
                <div>
                  <h3 className="fc_white ff_interSemiBold fs_lg">Vientam</h3>
                  <p className="fc_white ff_InterReg fs_sm">Worefall</p>
                </div>
              </div>
            </div>
          </div>
          <div className="grid_item grid_item6">
            <img src={tower2} alt="" />
            <div class="overlay">
              <div className="d-flex flex-column justify-content-between align-items-start h-100 w-100 p-4 text">
                <div className="rating">3.5</div>
                <div>
                  <h3 className="fc_white ff_interSemiBold fs_lg">Vientam</h3>
                  <p className="fc_white ff_InterReg fs_sm">Worefall</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Top_destinations;
