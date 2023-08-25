import "./style.css";
import { useState } from "react";
import { materi, fasilitas } from "./data.js";
import { BsFillCheckSquareFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const ProductInfo = (props) => {
  const [active, setActive] = useState("");
  return (
    <div className="flex flex-col">
      <div className="flex flex-1 sm:flex-row flex-col sm:items-start items-center mt-12 sm:mx-24">
        <div className="flex flex-1 flex-row justify-start w-100 bg-white max-w-[308px] max-h-[286px] rounded-xl mb-8 ">
          <div className="flex flex-col">
            <div className="judul py-4  ">
              <h3
                className={`${
                  active === "Materi" ? "test" : ""
                } py-[10px] w-100 cursor-pointer pl-12`}
                onClick={() => {
                  if (active === "Materi") setActive("");
                  else setActive("Materi");
                }}
              >
                Materi
              </h3>
              <h3
                className={`${
                  active === "Fasilitas" ? "test" : ""
                } py-[10px] w-100 cursor-pointer pl-12`}
                onClick={() => {
                  if (active === "Fasilitas") setActive("");
                  else setActive("Fasilitas");
                }}
              >
                Fasilitas
              </h3>
            </div>
            <hr className="min-w-[308px]" />
            <div className="prices flex flex-row px-4 items-center justify-between py-4">
              <s>Rp.125.000</s>
              <p>Rp. 99.000</p>
            </div>
            <div className="btn flex justify-center py-4">
              <Link
                to={`/checkout/${props.title}`}
                className="rounded-full bg-[#FFCD29] text-center p-4 w-[250px] text-white"
              >
                Daftar Kelas
              </Link>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-100 gap-10">
          <div className="materi flex flex-1 flex-col mx-8 bg-white p-[40px] w-100 justify-start items-start rounded-xl shadow">
            <h1 className="mb-4">Materi</h1>
            {materi[0].content.map((item, index) => (
              <div key={materi[0].id && index}>
                <div className="flex flex-row justify-start items-center mt-[1rem]">
                  <BsFillCheckSquareFill color="#FFCD29" />
                  <h2 className="ml-[10px]">{item.title}</h2>
                </div>
                <p className="mt-2">{item.body}</p>
              </div>
            ))}
          </div>
          <div className="fasilitas flex flex-1 flex-col mx-8 bg-white p-[40px] w-100 justify-start items-start rounded-xl shadow">
            <h1 className="mb-4">Fasilitas</h1>
            {fasilitas.map((item) => (
              <div key={item.id}>
                <div className="flex flex-row justify-start items-center mt-[1rem]">
                  <BsFillCheckSquareFill color="#FFCD29" />
                  <h2 className="ml-[10px]">{item.name}</h2>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="newslatter flex flex-col justify-center items-center w-100 bg-primary py-[6rem] mt-[8rem] text-center">
        <h1>Sudah siap bergabung?</h1>
        <div className="btn flex justify-center py-4">
          <Link
            to={`/checkout/${props.title}`}
            className="rounded-full bg-[#FFCD29] text-center p-4 w-[250px] text-white mt-[4rem]"
          >
            Daftar Kelas
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;
