import "./productCard.css";

const ProductCard = ({
  title,
  subtitle,
  batch,
  mentor,
  discount,
  price,
  img,
}) => {
  return (
    <div className="card m-10 flex-col flex">
      <div className="card-header flex flex-row items-center flex-start bg-primary w-100 flex-1">
        <div className="img-product mt-6  flex-none w-100">
          <img src={img} alt="product" className="pl-8" />
        </div>
        <div className="header-content flex flex-col w-100 px-8 py-7 mt-1">
          <h4>Intensive Bootcamp</h4>
          <h3 className="text-white py-1">{title}</h3>
          <p>{`(${subtitle})`}</p>
        </div>
      </div>
      <div className="content flex-col flex-1 w-100 bg-white shadow-lg px-8 py-5">
        <h1 className="text-black mb-1">{title}</h1>
        <h2 className="text-black mb-2">({subtitle})</h2>
        <p>
          <span>Batch </span>
          {batch}
        </p>
        <p>
          <span>Mentor </span>
          {mentor[0].name}, {mentor[1].name}
        </p>
        <div className="price flex flex-row justify-end mt-3">
          {discount !== null ? (
            <p>
              <s className="mr-3">{price}</s>
              {discount}
            </p>
          ) : (
            <p>{price}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
