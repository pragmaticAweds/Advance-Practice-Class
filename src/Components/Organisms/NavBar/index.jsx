import "./NavBar-Style.css";
import CartIcon from "../../Atoms/Vectors/CartIcon";
import SearchIcon from "../../Atoms/Vectors/SearchIcon";
import UserIcon from "../../Atoms/Vectors/UserIcon";

const NavBar = () => {
  const navLinks = ["Shop", "Artists", "About", "FAQs", "Sell"];
  return (
    <nav>
      <span className="text-[2.125rem] text-white">Good Mood</span>
      <div className="nav-spacing">
        {navLinks.map((link, i) => (
          <span key={"nav-link" + i} className="nav-link">
            {link}
          </span>
        ))}
      </div>
      <div className="nav-spacing">
        <SearchIcon />
        <UserIcon />
        <CartIcon />
      </div>
    </nav>
  );
};

export default NavBar;
