import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Input } from "../components/ui/input";
import { Search } from "lucide-react";

// eslint-disable-next-line react/prop-types
function SearchBar({ placeholder = "Search...", className }) {
  const [query, setQuery] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    if (e.key === "Enter") {
      if (query.trim() === "") {
        setError("Search cannot be empty.");
      } else {
        setError("");
        navigate(`/search/users/${encodeURIComponent(query)}`);
      }
    }
  };

  const handleChange = (e) => {
    setError("");
    setQuery(e.target.value);
  };

  return (
    <div className={`${className}`}>
      <div className="relative w-full">
        <Input
          className="border border-[#D7D7EA] bg-[#FFFFFF] pl-10 focus-visible:ring-zinc-200 active:shadow-lg focus:shadow-md w-full"
          type="text"
          placeholder={placeholder}
          value={query}
          onChange={handleChange}
          onKeyDown={handleSearch}
        />
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
      </div>

      {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
    </div>
  );
}

export default SearchBar;
