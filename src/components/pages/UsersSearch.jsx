import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "../ui/dialog";

import profilePic from "../../assets/profile.svg";
import profile2 from "../../assets/profile2.svg";
import noResults from "../../assets/noResults.svg";

import { Phone, MapPin } from "lucide-react";
import { Button } from "../ui/button";
import SearchBar from "../SearchBar";

function UsersSearch() {
  const { first_name } = useParams();

  const BASE_URL =
    import.meta.env.VITE_API_BASE_URL ||
    "https://girman-assignment-backend.onrender.com";

  const { data, loading, error } = useFetch(
    `${BASE_URL}/api/users/search/?first_name=${encodeURIComponent(first_name)}`
  );

  const users = data ? data.result : [];

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="flex flex-col items-center h-full mx-auto overflow-auto">
      <div className="flex flex-col items-center h-full sm:w-3/4 md:w-full my-16 max-w-screen-lg">
        <SearchBar
          placeholder="Search"
          className="w-full mb-4 -mt-6 md:hidden"
        />
        {users.length > 0 ? (
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
            {users.map((user, i) => (
              <Card key={i} className="w-full">
                <CardHeader>
                  <div className="rounded-full border-2 border-[#F3F3F3] p-2 w-1/4 h-3/4">
                    <img
                      src={profilePic}
                      className="rounded-full w-full h-full"
                    />
                  </div>
                  <CardTitle className="w-64 text-3xl font-semibold">{`${user.first_name} ${user.last_name}`}</CardTitle>
                  <CardDescription className="text-xs text-[#425763] flex items-center">
                    <MapPin
                      className="mr-2 h-4 w-4"
                      fill="#425763"
                      fillOpacity={1}
                      stroke="white"
                    />
                    {user.city}
                  </CardDescription>
                </CardHeader>
                <CardFooter className="flex justify-between items-center">
                  <div className="flex flex-col">
                    <p className="flex items-center text-sm font-medium">
                      <Phone className="mr-1 h-4 w-3" fill="#000000" />
                      {user.contact_number}
                    </p>
                    <p className="text-gray-400 text-[12px] md:text-xs">
                      Available on phone
                    </p>
                  </div>
                  <Dialog className="max-w-full">
                    <DialogTrigger asChild>
                      <Button
                        variant="outline"
                        className="bg-zinc-900 text-white text-sm rounded-lg"
                      >
                        Fetch Details
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-[320px] md:max-w-[400px] rounded-lg">
                      <DialogHeader className="text-left">
                        <DialogTitle className="font-semibold text-xl md:text-2xl">
                          Fetch Details
                        </DialogTitle>
                        <DialogDescription className="font-normal text-zinc-500 text-xs md:text-sm">
                          Here are the details of the following employee.
                        </DialogDescription>
                      </DialogHeader>
                      <div>
                        <div className="font-medium text-sm text-zinc-950">
                          <p>Name: {user.first_name + " " + user.last_name}</p>
                          <p>Location: {user.city}</p>
                          <p>Contact Number: {user.contact_number}</p>
                        </div>
                        <div className="flex flex-col mt-2">
                          <p>Profile Image:</p>
                          <img
                            src={profile2}
                            alt="profile picture"
                            className="mt-2 w-3/4 mb-4"
                          />
                        </div>
                      </div>
                      <DialogFooter>
                        <DialogClose asChild className="hidden md:block">
                          <Button
                            type="submit"
                            className="bg-white text-black border border-zinc-200 hover:bg-white"
                          >
                            Close
                          </Button>
                        </DialogClose>
                      </DialogFooter>
                    </DialogContent>
                  </Dialog>
                </CardFooter>
              </Card>
            ))}
          </div>
        ) : (
          <>
            <SearchBar
              placeholder="Search"
              className="w-3/4 -mt-10 md:hidden z-10"
            />
            <div className="flex justify-center items-center">
              <div className="absolute inset-0 bg-gradient-to-b from-white to-[#B1CBFF] z-0"></div>

              <img
                src={noResults}
                alt="No results found"
                className="relative w-3/4 mt-32 md:mt-20"
              />
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default UsersSearch;
