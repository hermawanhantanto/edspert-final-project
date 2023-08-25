import { useRef } from "react";
import ProductCard from "../product/ProductCard";
import { product } from "../../assets";
import "./productCatalog.css";
import { Link } from "react-router-dom";
import { card } from "./product.js";

const ProductCatalog = () => {
  const card1 = [];
  const card2 = [];
  const card3 = [];

  for (let i = 0; i < 5; i++) {
    card1.push(card);
    card2.push(card);
    card3.push(card);
  }

  const carouselRefs = [useRef(null), useRef(null), useRef(null)];
  const scrollAmount = 500;

  const nextKlik = () => {
    carouselRefs.forEach((carouselRef) => {
      if (carouselRef.current) {
        carouselRef.current.scrollLeft += scrollAmount;
      }
    });
  };

  const prevKlik = () => {
    carouselRefs.forEach((carouselRef) => {
      if (carouselRef.current) {
        carouselRef.current.scrollLeft -= scrollAmount;
      }
    });
  };

  return (
    <section className="product-container flex flex-col w-100">
      <div className="product-carousel flex flex-col">
        <div className="carousel" ref={carouselRefs[0]}>
          {card1.map((item, index) => (
            <Link to={`/product/${item.title}`} key={index}>
              <div className="cardItem">
                <ProductCard {...item} img={product} />
              </div>
            </Link>
          ))}
        </div>
        <div className="carousel" ref={carouselRefs[1]}>
          {card2.map((item, index) => (
            <Link to={`/product/${item.title}`} key={index}>
              <div className="cardItem">
                <ProductCard {...item} img={product} />
              </div>
            </Link>
          ))}
        </div>
        <div className="carousel" ref={carouselRefs[2]}>
          {card3.map((item, index) => (
            <Link to={`/product/${item.title}`} key={index}>
              <div className="cardItem">
                <ProductCard {...item} img={product} />
              </div>
            </Link>
          ))}
        </div>
      </div>
      <div className="product-page flex flex-row sm:justify-end items-center justify-center sm:mr-16 mt-12 font-bold mb-12">
        <div
          className="previous flex flex-row items-center mr-12 cursor-pointer rounded-full justify-center"
          onClick={prevKlik}
        >
          <span>Sebelumnya</span>
        </div>
        <div
          className="next flex flex-row items-center cursor-pointer rounded-full justify-center"
          onClick={nextKlik}
        >
          <span>Selanjutnya</span>
        </div>
      </div>
    </section>
  );
};

export default ProductCatalog;
