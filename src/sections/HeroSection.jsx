import React from "react";
import { useContent } from "../hooks/useContent";
import { fetchHeroContent } from "../services/api";
import HeroSkeleton from "../components/ui/Skeleton/HeroSkeleton";
import GradientText from "../components/ui/GradientText";
import GradientButton from "../components/ui/GradientButton";

const HeroSection = () => {
  const { data, loading, error, retry } = useContent(fetchHeroContent);

  if (loading) return <HeroSkeleton />;
  if (error) return <button onClick={retry}>Retry</button>;

  return (
    <section className="hero-section">
      <h1 className="hero-head">
        {data.headlinePrefix} <br />
        <GradientText children={data.headlineGradient} />
      </h1>

      <p className="hero-para">{data.subheadline}</p>

      <div className="hero-btn-wrapper">
        <GradientButton children={data.cta} />
      </div>
    </section>
  );
};

export default HeroSection;
