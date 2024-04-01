import logo from "../assets/logo.png";
import github from "../assets/github.png";
import linkedin from "../assets/linkedin.png";

const Footer = ({ scrollToTop }) => {
  return (
    <>
      {/* <div className="bg-[rgb(201,158,79)] h-[325px] md:p-24"></div> */}
      <div className="flex bg-black h-[200px] ">
        <div className="items-center justify-center mt-10 ml-16 bg-black w-[4.5rem] h-16 rounded-full text-white">
          <div className="">
            <img
              data-name="logoFooter"
              src={logo}
              alt=""
              onClick={scrollToTop}
              className="w-[100px] cursor-pointer md:w-[100px]"
            />
          </div>
        </div>
        <div
          data-name="contact Info"
          className="lg:flex max-[280px]:flex-col justify-around p-1 ml-6 mt-10 mr-8 w-[71rem] h-[8.6rem] bg-[rgb(51,51,51)] border-red-600 rounded-lg text-white text-center items-center lg:mx-auto"
        >
          <div className="flex items-center gap-3 min-w-96">
            <div>
              <a
                href="https://github.com/MohamedSy1"
                className="flex items-center gap-3 hover:text-red-900"
              >
                <img
                  src={github}
                  alt="Mohamed gitHub Profile"
                  className="w-10"
                />
                <p>MohamedSy1</p>
              </a>
            </div>
            <div>
              <a
                href="https://www.linkedin.com/in/mohamed-s-179b20230/"
                className="flex items-center gap-3 hover:text-red-900"
              >
                <img
                  src={linkedin}
                  alt="Mohamed linkedIn profile"
                  className="w-10"
                />
                <p>Mohamed Sy</p>
              </a>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-3">
              <a
                href="https://github.com/AhmxdNYC"
                className="flex items-center gap-3 hover:text-red-900"
              >
                <img
                  src={github}
                  alt="Ahmad githbub profile"
                  className="w-10"
                />
                <p className="">AhmadNYC</p>
              </a>
            </div>
            <div>
              <a
                href="https://www.linkedin.com/in/ahmad-hamza-/"
                className="flex items-center gap-3 hover:text-red-900"
              >
                <img
                  src={linkedin}
                  alt="Ahmad Github profile"
                  className="w-10"
                />
                <p>Ahmad Hamza</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
