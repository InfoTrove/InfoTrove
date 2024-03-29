import logo from "../assets/logo.png";
import github from "../assets/github.png";
import linkedin from "../assets/linkedin.png";
const Footer = ({ scrollToTop }) => {
  return (
    <>
      {/* <div className="bg-[rgb(201,158,79)] h-[325px] md:p-24"></div> */}
      <div className="flex bg-[rgb(204,172,171)] h-[200px] ">
        <div className="flex items-center justify-center mt-10 ml-16 bg-black w-16 h-16 rounded-full text-white">
          <img
            data-name="logoFooter"
            src={logo}
            alt=""
            onClick={scrollToTop}
            className="cursor-pointer"
          />
        </div>

        <div
          data-name="contact Info"
          className="flex flex-col justify-around p-1 ml-6 mt-10 mr-8 w-[21rem] h-[8.6rem] bg-[rgb(51,51,51)] border-red-600 rounded-lg text-white text-center"
        >
          {/* <p>Contacts :</p>
          <p>Creators :</p> */}
          <div className="flex items-center gap-3">
            <div>
              <a
                href="https://github.com/MohamedSy1"
                className="flex items-center gap-3"
              >
                <img src={github} alt="Mohamed gitHub Profile" className="w-10" />
                <p>MohamedSy1</p>
              </a>
            </div>
            <div>
              <a
                href="https://www.linkedin.com/in/mohamed-s-179b20230/"
                className="flex items-center gap-3"
              >
                <img src={linkedin} alt="Mohamed linkedIn profile" className="w-10" />
                <p>Mohamed Sy</p>
              </a>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-3">
              <a
                href="https://github.com/AhmxdNYC"
                className="flex items-center gap-3"
              >
                <img src={github} alt="Ahmad githbub profile" className="w-10" />
                <p>AhmadNYC</p>
              </a>
            </div>
            <div>
              <a
                href="https://www.linkedin.com/in/ahmad-hamza-/"
                className="flex items-center gap-3"
              >
                <img src={linkedin} alt="Ahmad Github profile" className="w-10" />
                <p>Ahmad Hamza</p>
              </a>
            </div>
          </div>
        </div>
        <div
          data-name="Info General"
          className="flex flex-col justify-around p-1 mt-10 mx-8 w-[21rem] h-[8.6rem] bg-[rgb(51,51,51)] border-red-600 rounded-lg text-white text-center"
        >
          <p>Info :</p>
          <p>Data : New York Times API</p>
        </div>
        <div
          data-name="etc"
          className="flex flex-col justify-around p-1 mt-10 mx-8 w-[21rem] h-[8.6rem] bg-[rgb(51,51,51)] border-red-600 rounded-lg text-white text-center"
        >
          <p>Etc :</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
