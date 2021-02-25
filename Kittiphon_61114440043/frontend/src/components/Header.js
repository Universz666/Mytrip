import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="header">
      <div className="brand">
        <button onclick="openMenu()">
          &#9776;
        </button>
        <Link to="/">My Trip</Link>
      </div>
      <div className="header-links">
        <a href="signin.html">Sign In</a>
      </div>
    </header>
  );
}

export default Header;
