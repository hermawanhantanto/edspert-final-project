import { BsArrowLeft } from "react-icons/bs";
import { GrNext } from "react-icons/gr";
import { GrPrevious } from "react-icons/gr";
import { BiChevronUp } from "react-icons/bi";
import { BiChevronDown } from "react-icons/bi";
import { useState } from "react";
import { mandiri, bca } from "../assets";
import { product } from "../assets";
import { card } from "../components/ProductCatalog/product.js";
import "./checkout.css";
import { Link } from "react-router-dom";

const Checkout = (props) => {
  const [active, setActive] = useState(false);
  const [toggle, setToggle] = useState(false);

  return (
    <div className="flex flex-col flex-1 w-100 sm:mx-24 mx-4">
      <div className="navigasi flex flex-row justify-start items-center my-[2rem] gap-2  ">
        <Link to={`/product/${card.title}`}>
          <BsArrowLeft size="1rem" />
        </Link>
        <p>Checkout</p>
        <GrNext size="0.5rem" />
        <span>Instruksi Bayar</span>
      </div>
      <h1 className="header-nav">Checkout</h1>
      <div className="flex lg:flex-row flex-col w-100 my-[2rem] ">
        <div className="metode-pembayaran flex flex-col bg-white rounded-xl shadow flex-1 py-[55px] px-[43px] lg:mr-[31px] lg:mb-0 mb-8 lg:max-w-[587px] w-100">
          <h2>Pilih Metode Pembayaran</h2>
          <div className="Bank-tf flex flex-row w-100 justify-between items-center mt-8 ">
            <div className="flex flex-col flex-1 max-w-[500px]">
              <h4>Bank Transfer (verifikasi manual)</h4>
              <div className="flex flex-row flex-1 justify-between mt-1">
                <p>
                  Pembayaran melalui Bank Transfer Mandiri atau BCA. Metode
                  bayar ini memerlukan verifikasi pembayaran manual melalui
                  Whatsapp
                </p>
                <hr />
                <div>
                  {toggle ? (
                    <BiChevronUp size={27} onClick={() => setToggle(false)} />
                  ) : (
                    <BiChevronDown size={27} onClick={() => setToggle(true)} />
                  )}
                </div>
              </div>
              {toggle && (
                <div className="flex flex-1 flex-col w-100 mt-[1rem]">
                  <div className="flex flex-row justify-between items-center border-solid border-2 rounded-xl">
                    <div className="bank  flex flex-row justify-start w-100 items-center p-8">
                      <div>
                        <img src={mandiri} alt="mandiri" />
                      </div>
                      <p className="ml-3">Bank Transfer ke Rek Bank Mandiri</p>
                    </div>
                    <div className="w-[20px] h-[20px] rounded-full bg-white border-solid border-2 mr-4"></div>
                  </div>
                  <div className="flex flex-row justify-between items-center border-solid border-2 rounded-xl mt-3">
                    <div className="bank flex flex-row justify-start w-100 items-center p-8">
                      <div>
                        <img src={bca} alt="mandiri" />
                      </div>
                      <p className="ml-3">Bank Transfer ke Rek Bank BCA</p>
                    </div>
                    <div className="w-[20px] h-[20px] rounded-full bg-white border-solid border-2 mr-4"></div>
                  </div>
                </div>
              )}
            </div>
          </div>
          <div className="Bank-tf flex flex-row w-100 justify-between items-center mt-8 ">
            <div className="flex flex-col flex-1 max-w-[500px]">
              <h4>Virtual Account (verifikasi otomatis)</h4>
              <div className="flex flex-row flex-1 justify-between mt-1">
                <p>
                  Pembayaran melalui virtual account berbagai bank. Metode bayar
                  ini akan diverifikasi secara otomatis.
                </p>
                <hr />
                <div>
                  {active ? (
                    <BiChevronUp size={27} onClick={() => setActive(false)} />
                  ) : (
                    <BiChevronDown size={27} onClick={() => setActive(true)} />
                  )}
                </div>
              </div>
              {active && (
                <div className="flex flex-1 flex-col w-100 mt-[1rem]">
                  <div className="flex flex-row justify-between items-center border-solid border-2 rounded-xl">
                    <div className="bank flex flex-row justify-start w-100 items-center p-8">
                      <div>
                        <img src={mandiri} alt="mandiri" />
                      </div>
                      <p className="ml-3">Virtual Account Mandiri</p>
                    </div>
                    <div className="w-[20px] h-[20px] rounded-full bg-white border-solid border-2 mr-4"></div>
                  </div>
                  <div className="flex flex-row justify-between items-center border-solid border-2 rounded-xl mt-3">
                    <div className="bank flex flex-row justify-start w-100 items-center p-8">
                      <div>
                        <img src={bca} alt="mandiri" />
                      </div>
                      <p className="ml-3">Virtual Account BCA</p>
                    </div>
                    <div className="w-[20px] h-[20px] rounded-full bg-white border-solid border-2 mr-4"></div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="rincian-pembayaran flex flex-col bg-white rounded-xl shadow flex-1 py-[55px] sm:px-[43px] px-5">
          <h2>Ringkasan Pesanan</h2>
          <div className="flex flex-col sm:flex-row flex-start justify-start mt-8 items-center gap-5">
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
          <h3 className="mt-8 mb-2">Kode Promo</h3>
          <div className="flex flex-row w-100">
            <input
              type="text"
              className="flex flex-1 w-100 h-[54px] border-solid border-2 p-2"
              placeholder="Masukkan kode promo"
            />
            <button className="bg-[#2A61A8] py-[10px] px-[16px] text-white ml-2">
              Terapkan
            </button>
          </div>
          <h3 className="mt-4  mb-1">Metode Pembayaran</h3>
          <p>Bank Transfer (verifikasi manual) - Mandiri</p>
          <h3 className="mt-4">Ringkasan Pembayaran</h3>
          <div className="flex flex-col w-100 gap-2">
            <div className="flex flex-row w-100 justify-between items-center mt-2">
              <p>Harga Kelas</p>
              <p>Rp. 700.000</p>
            </div>
            <div className="flex flex-row w-100 justify-between items-center">
              <p>Potongan</p>
              <p>Rp. 200.000</p>
            </div>
            <div className="flex flex-row w-100 justify-between items-center">
              <p>Promo</p>
              <p>-</p>
            </div>
            <div className="flex flex-row w-100 justify-between items-center">
              <p>Kode Unik</p>
              <p>Rp. 100.000</p>
            </div>
            <hr />
          </div>
          <div className="flex flex-row w-100 justify-between items-center mt-4">
            <h3>Total Pembayaran</h3>
            <h3>Rp. 400.000</h3>
          </div>
          <p className="mt-8 mb-12">
            Dengan menekan tombol Bayar kamu telah menyetujui syarat dan
            ketentuan yang berlaku, silahkan baca kembali{" "}
            <span className="cursor-pointer">Syarat & ketentuan</span> yang
            berlaku.
          </p>
          <div className="flex flex-row w-100 justify-between items-center">
            <Link to={`/product/${card.title}`}>
              <div className="flex flex-row justify-start items-center cursor-pointer">
                <GrPrevious />
                <p className="ml-1">Batalkan</p>
              </div>
            </Link>
            <Link to={`/pembayaran/${props.title}`}>
              <button className="flex w-[205px] h-[48px] text-white justify-center items-center rounded-full bg-[#2A61A8] cursor-pointer py-[10px] px-[16px]">
                Bayar
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
