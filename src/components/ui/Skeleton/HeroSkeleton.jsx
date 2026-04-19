import Skeleton from "./BaseSkeleton";

const HeroSkeleton = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <Skeleton width="300px" height="40px" style={{ margin: "0 auto 10px" }} />
      <Skeleton width="400px" height="50px" style={{ margin: "0 auto 20px" }} />
      <Skeleton width="600px" height="20px" style={{ margin: "0 auto 20px" }} />
      <Skeleton width="150px" height="45px" style={{ margin: "0 auto" }} />
    </div>
  );
};

export default HeroSkeleton;
