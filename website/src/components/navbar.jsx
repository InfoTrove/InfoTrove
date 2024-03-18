import {Link} from 'react-router-dom';
const NavBar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/Home">Main</Link>
        </li>
        <li>
          <Link to="/Contact">Side</Link>
        </li>
      </ul>
    </nav>
  );
};
export default NavBar;

