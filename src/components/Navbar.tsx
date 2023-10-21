import Logo from "./Logo";
import "./Navbar.css";
const Navbar = (): JSX.Element => {
  return (
    <nav className="navbar__container">
      <Logo />
    </nav>
  );
};

export default Navbar;
