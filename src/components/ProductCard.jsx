const ProductCard = ({ item }) => {
  return (
    <div className="card">
      <div className="card-content">
        <h3>{item.title}</h3>
      </div>
      <div className="image-wrapper">
        <img src={item.image} alt={item.title} />
      </div>
    </div>
  );
};

export default ProductCard;
