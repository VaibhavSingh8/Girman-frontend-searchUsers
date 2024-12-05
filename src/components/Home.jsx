import bgImage from "../assets/bgImage.svg";
import inputLogo from "../assets/inputLogo.svg";
import { Input } from "../components/ui/input";
import { Search } from "lucide-react";

function Home() {
  return (
    <div className="overflow-hidden flex flex-col h-full relative">
      <div className="absolute inset-0 bg-gradient-to-b from-white from-20% to-[#B1CBFF] z-0"></div>

      <div className="flex flex-col items-center justify-center z-20 my-28 mx-auto max-w-[42rem] min-h-64">
        <img src={inputLogo} alt="input logo" className="max-w-[42rem] h-28" />

        <div className="relative mt-8">
          <Input
            className="border border-[#D7D7EA] bg-[#FFFFFF] pl-10 focus-visible:ring-zinc-200 active:shadow-lg focus:shadow-md min-w-[42rem]"
            type="text"
            placeholder="Search"
          />
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-300" />
        </div>
      </div>

      <div className="absolute inset-0 z-0">
        <img
          src={bgImage}
          alt="Background Gradient image"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}

export default Home;
