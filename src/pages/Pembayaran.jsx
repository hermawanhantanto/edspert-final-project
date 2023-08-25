import { BsArrowLeft } from "react-icons/bs";
import { GrNext } from "react-icons/gr";
import { Link } from "react-router-dom";
import { card } from "../components/ProductCatalog/product.js";
import { mandiri, product } from "../assets/index.js";
import { GoCopy } from "react-icons/go";
import "./pembayaran.css";
import { useState } from "react";
import { ATM, IB, MB } from "./pembayaran.js";
const Pembayaran = () => {
  const [active, setActive] = useState("ATM");
  return (
    <div className="flex flex-col flex-1 w-100 lg:mx-24 mx-4">
      <div className="navigasi flex flex-row justify-start items-center my-[2rem] gap-2  ">
        <Link to={`/checkout/:title`}>
          <BsArrowLeft size="1rem" />
        </Link>
        <span>Checkout</span>
        <GrNext size="0.5rem" />
        <p>Instruksi Bayar</p>
      </div>
      <h1 className="header-nav">Instruksi Bayar</h1>
      <div className="pembayaran flex flex-col w-100 flex-1 bg-white pt-12 my-12 shadow">
        <div className="flex sm:flex-row flex-col w-100 justify-between">
          <div className="flex-col flex lg:pl-24 px-4 sm:text-left text-center sm:mb-0 mb-8">
            <div className="flex flex-start lg:flex-row flex-col justify-start lg:items-center gap-5">
              <div className="produk-img w-[119px] h-[110px] bg-primary flex flex-row justify-center items-center rounded-xl ">
                <img src={product} alt="produk" className="p-7" />
              </div>
              <div className="product-section flex flex-col w-100 flex-1">
                <h1>{card.title}</h1>
                <h2 className="mt-1">{card.subtitle}</h2>
                <div className="flex flex-row items-center justify-start mt-3">
                  <small>Batch</small>
                  <p className="ml-[18px]">{card.batch}</p>
                </div>
                <div className="flex flex-row items-center justify-start">
                  <small>Mentor</small>
                  <p className="ml-3">
                    {card.mentor[0].name}, {card.mentor[1].name}
                  </p>
                </div>
              </div>
            </div>
            <h3 className="my-3">Metode Pembayaran</h3>
            <p>Bank Transfer (verifikasi manual) - Mandiri</p>
            <div className="flex flex-row justify-start items-center my-4">
              <img src={mandiri} alt="mandiri" className="mr-4" />
              <div className="flex flex-col w-100">
                <div className="flex flex-row w-100 items-center">
                  <span className="mr-2">No Rek. 137000299089</span>
                  <div className="cursor-pointer flex flex-row items-center">
                    <GoCopy color="#1097E7" />
                    <small className="ml-1">salin</small>
                  </div>
                </div>
                <p>a.n. PT Widya Kreasi Bangsa</p>
              </div>
            </div>
            <p>Nominal yang harus dibayar senilai:</p>
            <h3 className="mt-3">Rp. 400.000</h3>
          </div>
          <div className="flex flex-col justify-start lg:mr-[8rem] sm:text-left text-center">
            <h3>Instruksi Pembayaran</h3>
            <div className="flex flex-row gap-4 mt-8 items-center sm:justify-start justify-center">
              <p
                className={`${
                  active === "ATM" ? "banksOn" : "banksOff"
                } cursor-pointer`}
                onClick={() => setActive("ATM")}
              >
                ATM
              </p>
              <p
                className={`${
                  active === "IB" ? "banksOn" : "banksOff"
                } cursor-pointer`}
                onClick={() => setActive("IB")}
              >
                Internet Banking
              </p>
              <p
                className={`${
                  active === "MB" ? "banksOn" : "banksOff"
                } cursor-pointer`}
                onClick={() => setActive("MB")}
              >
                M-Banking
              </p>
            </div>
            <div className="step flex w-100 flex-col max-w-[395px] mt-4">
              <ul>
                {active === "ATM" &&
                  ATM.map((item, index) => (
                    <li key={index}>
                      {index + 1}. {item}
                    </li>
                  ))}
                {active === "IB" &&
                  IB.map((item, index) => (
                    <li key={index}>
                      {index + 1}. {item}
                    </li>
                  ))}
                {active === "MB" &&
                  MB.map((item, index) => (
                    <li key={index}>
                      {index + 1}. {item}
                    </li>
                  ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="verifikasi flex flex-col justify-center items-center w-100 bg-primary py-[6rem] mt-[8rem] text-center">
          <h1 className="px-3">
            Sudah Transfer? Lakukan verifikasi pembayaran segera!
          </h1>
          <div className="btn flex justify-center py-4">
            <button className="rounded-full bg-[#FCBC30] text-center p-4 w-[250px] text-white mt-[1rem]">
              Verifikasi Pembayaran
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pembayaran;
