import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="flex bg-black text-white">
      <div>
        <img src={logo} alt="InfoTrove Logo" className=" size-20" />
      </div>
      <ul className="flex gap-9 mx-auto max-w-fit absolute right-[250px] top-[30px]">
        <li><Link to="/">Home</Link></li>
        <li>Articles</li>
        <li><Link to="/books">Books</Link></li>
        <li>Movies</li>
        <li>
          <form action="">
            <label htmlFor=""></label>
            <input
              className=" bg-neutral-700 w-96 rounded-full h-8"
              type="text"
              name="search"
            />
          </form>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
