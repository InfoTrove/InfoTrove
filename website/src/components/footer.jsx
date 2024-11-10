import logo from "../assets/logo.png";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";

const profiles = [
  [
    "Mohamed Sy",
    "https://github.com/MohamedSy1",
    "https://www.linkedin.com/in/mohamed-s-179b20230/",
  ],
  [
    "Ahmad Hamza",
    "https://github.com/AhmxdNYC",
    "https://www.linkedin.com/in/ahmad-hamza-/",
  ],
];

const Footer = ({ scrollToTop }) => {
  return (
    <>
      {/* <div className="bg-[rgb(201,158,79)] h-[325px] md:p-24"></div> */}
      <div className="flex-cols flex justify-evenly bg-black md:gap-10">
        <img
          src={logo}
          alt="info trove logo"
          onClick={scrollToTop}
          className="max-w-[100px] cursor-pointer"
        />

        {profiles.map((item) => (
          <div className="flex items-center text-nowrap">
            <span className="pr-1">{item[0]}</span>
            <div className="flex">
              <a href={item[1]}>
                <FaGithub className="hover:scale-[1.24]" />
              </a>
              <a href={item[2]}>
                <FaLinkedin className="hover:scale-[1.24]" />
              </a>
            </div>
            <span>|</span>
          </div>
        ))}
      </div>
    </>
  );
};

export default Footer;
