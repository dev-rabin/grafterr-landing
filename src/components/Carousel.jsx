import React, { useEffect, useState } from "react";
import { useCarousel } from "../hooks/useCarousel";

const Carousel = ({ items }) => {
  const [itemsPerView, setItemsPerView] = useState(3);

  useEffect(() => {
    const update = () => {
      if (window.innerWidth < 768) setItemsPerView(1);
      else if (window.innerWidth < 1024) setItemsPerView(2);
      else setItemsPerView(3);
    };

    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const { index, next, prev } = useCarousel(items.length, itemsPerView);

  return (
    <div className="carousel">
      <div className="carousel-indicator">
        <div
          className="indicator-progress"
          style={{
            width: `${(itemsPerView / items.length) * 100}%`,
            transform: `translateX(${(index / items.length) * 100}%)`,
          }}
        />
      </div>
      <div className="carousel-window">
        <div
          className="carousel-track"
          style={{
            transform: `translateX(-${index * (100 / itemsPerView)}%)`,
          }}
        >
          {items.map((item, i) => (
            <div
              className="carousel-item"
              key={i}
              style={{ flex: `0 0 ${100 / itemsPerView}%` }}
            >
              <div className="card">
                <div className="card-content">
                  <h3>{item.title}</h3>
                </div>

                <div className="image-wrapper">
                  <img src={item.image} alt={item.title} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="carousel-arrows">
        <button onClick={prev}>←</button>
        <button onClick={next}>→</button>
      </div>
    </div>
  );
};

export default Carousel;
