import logo from "../assets/logo.png";
const Footer = ({ scrollToTop }) => {
  return (
    <>
      <div className="bg-[rgb(201,158,79)] h-[325px] md:p-24"></div>
      <div className="flex bg-[rgb(204,172,171)] h-[200px] ">
        <div className="flex items-center justify-center mt-10 ml-16 bg-black w-16 h-16 rounded-full text-white">
          <img data-name="logoFooter" src={logo} alt="" onClick={scrollToTop} className="cursor-pointer" />
        </div>

        <div
          data-name="contact Info"
          className="flex flex-col justify-around p-1 ml-6 mt-10 mr-8 w-[21rem] h-[8.6rem] bg-[rgb(51,51,51)] border-red-600 rounded-lg text-white text-center"
        >
          <p>Contacts :</p>
          <p>Creators :</p>
          <p>Ahmad Hamza - ahmadhamza052005@gmail.com</p>
          <p>Mohamed Sy - mo@gmail.com</p>
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
