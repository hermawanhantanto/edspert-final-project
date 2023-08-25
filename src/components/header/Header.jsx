import { hero } from "../../assets";
import "./header.css";

const Header = () => {
  return (
    <section className="header-section flex flex-col lg:flex-row  justify-between sm:items-start items-center w-100 bg-primary sm:pt-10 pb-0 sm:px-24 py-5 px-12 mx-auto text-center xl:text-left">
      <div className="header-content flex-column items-start justify-start mt-8">
        <h1 className="text-white mb-10">Jadi expert bersama edspert.id</h1>
        <p className="text-white w-100 mb-3">
          Tingkatkan skill dan pengetahuan bersama para mentor terbaik di
          bidangnya, untuk siapkan karir impian anda.
        </p>
      </div>
      <div className="header-img w-100 h-100 flex-row items-center justify-center">
        <img src={hero} alt="hero-image" />
      </div>
    </section>
  );
};

export default Header;
