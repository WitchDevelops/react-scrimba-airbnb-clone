import Logo from "./Logo";
import "./Navbar.css";
const Navbar = (): JSX.Element => {
  return (
    <nav className="navbar__container">
      <div className="navbar__content">
         <Logo />
      </div>
     
    </nav>
  );
};

export default Navbar;
