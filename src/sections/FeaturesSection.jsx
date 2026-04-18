import React from "react";
import TealImg from "../assets/teal.png";
import RedImg from "../assets/red.png";

const FeaturesSection = () => {
  return (
    <>
      <section className="feature-section">
        <div className="sub-section">
          <div className="teal">
            <img src={TealImg} alt="Teal" />
          </div>
          <div className="feature-head">
            <h1>
              More ways <span className="grafterr">Grafterr </span>
              <span>can help you grow your business</span>
            </h1>
            <p className="feature-para">
              An award-winning, end-to-end restaurant technology & payments
              platform, designed to streamline food service and automate complex
              venue operations
            </p>
          </div>
          <div className="red">
            <img src={RedImg} alt="Red" />
          </div>
        </div>
      </section>
    </>
  );
};

export default FeaturesSection;
