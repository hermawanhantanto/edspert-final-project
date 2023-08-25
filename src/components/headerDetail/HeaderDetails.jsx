import "./style.css";
import { card } from "../ProductCatalog/product.js";
import { spg } from "../../assets";
import { useEffect, useState } from "react";

const HeaderDetails = () => {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [delta, setDelta] = useState(100 - Math.random() * 100);
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let fullText = card.subtitle;
    let updateText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updateText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updateText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updateText === "") {
      setIsDeleting(false);
      setDelta(100);
    }
  };
  return (
    <div className="flex sm:flex-row flex-col flex-1 w-100 bg-primary sm:pl-24 px-12 sm:px-0 text-center sm:text-left">
      <div className="flex flex-col mt-16">
        <h1 className="title">{card.title}</h1>
        <h2 className="subtitle mt-2">
          <span>{text}</span>
        </h2>
        <p className="other mt-10 mb-8">Mentor</p>
        <div className="flex flex-row gap-10 sm:mb-[8rem]">
          <div className="mentor flex flex-col">
            <h3>{card.mentor[0].name}</h3>
            <p>{card.mentor[0].jobs}</p>
          </div>
          <div className="mentor flex flex-col">
            <h3>{card.mentor[1].name}</h3>
            <p>{card.mentor[1].jobs}</p>
          </div>
        </div>
      </div>
      <div className="flex flex-1 sm:flex-col flex-row sm:justify-end justify-start sm:items-end items-center w-100">
        <img className="spg" src={spg} alt="spg" />
      </div>
    </div>
  );
};

export default HeaderDetails;
