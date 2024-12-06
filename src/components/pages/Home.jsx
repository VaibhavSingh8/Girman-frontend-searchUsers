import bgImage from "../../assets/bgImage.svg";
import inputLogo from "../../assets/inputLogo.svg";
import SearchBar from "../SearchBar";

function Home() {
  return (
    <div className="relative flex flex-col h-screen overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-white to-[#B1CBFF] z-0"></div>
      <img
        src={bgImage}
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="flex flex-col items-center justify-center z-10 mx-auto my-36 max-w-lg">
        <img
          src={inputLogo}
          alt="Input Logo"
          className="w-11/12 md:w-full md:h-28 mb-8"
        />

        <SearchBar
          placeholder="Search"
          className="relative w-11/12 md:w-full"
        />
      </div>
    </div>
  );
}

export default Home;
