import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Navigation from "./Navigation";
import Logo from "../assets/Logo.svg";
import { Menu } from "lucide-react";
import SearchBar from "./SearchBar";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const isUserSearchPage = location.pathname.startsWith("/search/users/");

  return (
    <header className="top-0 left-0 right-0 z-10 flex justify-between px-8 md:justify-around items-center p-4 bg-white shadow-md fixed">
      <Link to="/">
        <img src={Logo} alt="Logo" className="h-12" />
      </Link>
      {isUserSearchPage ? (
        <SearchBar
          placeholder="Search"
          className="relative w-full max-w-md hidden md:block"
        />
      ) : (
        <div className="hidden md:flex">
          <Navigation />
        </div>
      )}
      <div className="md:hidden relative">
        <button
          onClick={handleMenuToggle}
          className="text-black flex items-center"
        >
          <Menu className="w-6 h-6" />
        </button>

        {isMenuOpen && (
          <div className="absolute -left-28 top-full mt-2 w-32 bg-white shadow-lg rounded-md border">
            <Navigation className="flex-col py-2" />
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;
