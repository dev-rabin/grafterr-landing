import Skeleton from "./BaseSkeleton";


const FeaturesSkeleton = () => {
  return (
    <div>
      <Skeleton width="400px" height="40px" style={{ margin: "0 auto 20px" }} />
      <Skeleton width="600px" height="20px" style={{ margin: "0 auto 40px" }} />

      <div style={{ display: "flex", gap: "20px", justifyContent: "center" }}>
        {[1, 2, 3].map((_, i) => (
          <div key={i}>
            <Skeleton width="350px" height="420px" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturesSkeleton