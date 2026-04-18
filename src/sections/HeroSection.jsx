import React from "react";

const HeroSection = () => {
  return (
    <>
      <section className="hero-section">
        <h1 className="hero-head">
          Looking for a new <br />
          <span className="grad-text">technology provider?</span>
        </h1>

        <p className="hero-para">
          Explore our <strong>success stories</strong> to see how businesses
          like yours have transformed with Grafterr's technology.
        </p>
        <div className="hero-btn-wrapper">
          <button className="gradient-btn">Learn more</button>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
