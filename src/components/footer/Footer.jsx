import { footLink } from "./footer.js";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer bg-white flex flex-1 w-100 sm:flex-row flex-col justify-start sm:px-24 px-12 sm:py-12">
      <div className="tagline flex flex-col justify-start py-12 ">
        <h1>Edspert</h1>
        <p className="max-w-[411px] sm:mt-4">
          Jl. Watugede No.58, Wonorejo, Sariharjo, Kec. Ngaglik, Kabupaten
          Sleman, Daerah Istimewa Yogyakarta 55581
        </p>
      </div>
      <div className="footer-container flex flex-1 flex-col w-100 sm:px-10 sm:ml-[12rem]">
        <div className="footer-nav flex sm:flex-row flex-col flex-1 w-100  items-start  sm:py-12 justify-start sm:gap-20 gap-10">
          {footLink.map((item) => (
            <div
              key={item.id}
              className="flex flex-col gap-2 items-start justify-start"
            >
              <h1 className="foot-title font-bold ">{item.title}</h1>
              {item.sublink.map((item, index) => (
                <a key={index} href="#" className="foot-text mt-2">
                  {item.name}
                </a>
              ))}
            </div>
          ))}
        </div>
        <div className="footer-foot flex w-100 items-center sm:py-10 py-12 ">
          <h4>Edspert, copyright. All Rights Reserved.</h4>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
