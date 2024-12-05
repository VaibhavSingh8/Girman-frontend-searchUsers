import Navigation from "./Navigation";
import Logo from "../assets/Logo.svg";

function Header() {
  return (
    <header className="flex justify-around p-6 shadow-md bg-white">
      <div>
        <img src={Logo} className="max-w-md w-4/6" />
      </div>
      <Navigation />
    </header>
  );
}

export default Header;
