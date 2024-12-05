import Navigation from "./Navigation";
import Logo from "../assets/Logo.svg";

function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-10 flex justify-around p-6 shadow-md bg-white">
      <div>
        <img src={Logo} className="max-w-md w-4/6" />
      </div>
      <Navigation />
    </header>
  );
}

export default Header;
