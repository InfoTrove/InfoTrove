import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import SearchBarHome from "./HomeSearch";
const NavBar = () => {
  return (
    <nav className="flex bg-black text-white">
      <div>
        <img src={logo} alt="InfoTrove Logo" className=" size-20" />
      </div>
      <ul className="flex gap-9 mx-auto max-w-fit absolute right-[250px] top-[30px]">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/articles">Articles</Link></li>
        <li><Link to="/books">Books</Link></li>
        <li>Movies</li>
        <SearchBarHome />
      </ul>
    </nav>
  );
};

export default NavBar;
