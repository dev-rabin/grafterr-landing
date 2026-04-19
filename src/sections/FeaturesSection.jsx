import React from "react";
import TealImg from "../assets/teal.png";
import RedImg from "../assets/red.png";
import { useContent } from "../hooks/useContent";
import { fetchFeaturesContent } from "../services/api";
import Carousel from "../components/Carousel";
import FeaturesSkeleton from "../components/ui/Skeleton/FeatureSkeleton";

const FeaturesSection = () => {
  const { data, loading, error, retry } = useContent(fetchFeaturesContent);
  if (loading) return <FeaturesSkeleton/>;
  if (error) return <button onClick={retry}>Retry</button>;

  return (
    <>
      <section className="feature-section">
        <div className="sub-section">
          <div className="teal">
            <img src={TealImg} alt="Teal" />
          </div>
          <div className="feature-head">
            <h1>
              {data.title} <span className="grafterr">{data.grafterr} </span>
              <span>{data.accent}</span>
            </h1>
            <p className="feature-para">{data.subtitle}</p>
          </div>
          <div className="red">
            <img src={RedImg} alt="Red" />
          </div>
        </div>
      </section>
      <div className="carousel-wrapper">
        <Carousel items={data.products} />
      </div>
    </>
  );
};

export default FeaturesSection;
