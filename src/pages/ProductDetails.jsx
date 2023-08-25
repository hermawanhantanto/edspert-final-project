import HeaderDetails from "../components/headerDetail/HeaderDetails.jsx";
import ProductInfo from "../components/productInfo/ProductInfo.jsx";
import { card } from "../components/ProductCatalog/product.js";
const ProductDetails = () => {
  return (
    <div>
      <HeaderDetails />
      <ProductInfo title={card.title} />
    </div>
  );
};

export default ProductDetails;
