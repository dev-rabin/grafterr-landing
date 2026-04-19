import React from "react";
import { useContent } from "../hooks/useContent";
import { fetchHeroContent } from "../services/api";
import HeroSkeleton from "../components/ui/Skeleton/HeroSkeleton";

const HeroSection = () => {
  const { data, loading, error, retry } = useContent(fetchHeroContent);

  if (loading) return <HeroSkeleton />;
  if (error) return <button onClick={retry}>Retry</button>;

  return (
    <section className="hero-section">
      <h1 className="hero-head">
        {data.headlinePrefix} <br />
        <span className="grad-text">{data.headlineGradient}</span>
      </h1>

      <p className="hero-para">{data.subheadline}</p>

      <div className="hero-btn-wrapper">
        <button className="gradient-btn">{data.cta}</button>
      </div>
    </section>
  );
};

export default HeroSection;
