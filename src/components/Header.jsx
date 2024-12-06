import { useState } from "react";
import { useLocation } from "react-router-dom";
import Navigation from "./Navigation";
import Logo from "../assets/Logo.svg";
import { Input } from "../components/ui/input";
import { Search, Menu } from "lucide-react";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const isUserSearchPage = location.pathname.startsWith("/search/users/");

  return (
    <header className="top-0 left-0 right-0 z-10 flex justify-between px-8 md:justify-around items-center p-4 bg-white shadow-md fixed">
      <img src={Logo} alt="Logo" className="h-12" />

      {isUserSearchPage ? (
        <div className="relative w-full max-w-md hidden md:block">
          <Input
            className="border border-[#D7D7EA] bg-[#FFFFFF] pl-10 focus-visible:ring-zinc-200 active:shadow-lg focus:shadow-md w-full"
            type="text"
            placeholder="Search"
          />
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
        </div>
      ) : (
        <>
          <div className="md:hidden relative">
            <button
              onClick={handleMenuToggle}
              className="text-black flex items-center"
            >
              <Menu className="w-6 h-6" />
            </button>

            {isMenuOpen && (
              <div className="absolute -left-28 top-full mt-2 w-36 bg-white shadow-lg rounded-md border">
                <Navigation className="flex-col p-2 space-y-2" />
              </div>
            )}
          </div>

          <div className="hidden md:flex">
            <Navigation />
          </div>
        </>
      )}
    </header>
  );
}

export default Header;
