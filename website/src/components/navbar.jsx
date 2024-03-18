import logo from "../assets/logo.png"

const NavBar = () => {
  return (
    <nav className="">
      <div>
        <img src={logo} alt="InfoTrove Logo" />
      </div>
      <ul>
        <li>Articles</li>
        <li>Books</li>
        <li>Movies</li>
      </ul>
    </nav>
  );
};

export default NavBar;
