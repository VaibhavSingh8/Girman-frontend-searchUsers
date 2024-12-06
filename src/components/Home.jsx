import { useState } from "react";
import bgImage from "../assets/bgImage.svg";
import inputLogo from "../assets/inputLogo.svg";
import { Input } from "../components/ui/input";
import { Search } from "lucide-react";
import { useNavigate } from "react-router-dom";

function Home() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    if (e.key === "Enter" && query.trim()) {
      navigate(`/search/users/${encodeURIComponent(query)}`);
    }
  };

  return (
    <div className="relative flex flex-col h-screen overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-white to-[#B1CBFF] z-0"></div>
      <img
        src={bgImage}
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />

      <div className="flex flex-col items-center justify-center z-10 mx-auto my-36 max-w-lg">
        <img src={inputLogo} alt="Input Logo" className="h-28 mb-8" />

        <div className="relative w-full">
          <Input
            className="border border-[#D7D7EA] bg-[#FFFFFF] pl-10 focus-visible:ring-zinc-200 active:shadow-lg focus:shadow-md w-full"
            type="text"
            placeholder="Search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={handleSearch}
          />
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
        </div>
      </div>
    </div>
  );
}

export default Home;
