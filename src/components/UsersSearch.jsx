import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../components/ui/card";

import profilePic from "../assets/profile.svg";

import { Phone, MapPin } from "lucide-react";
import { Button } from "../components/ui/button";

function UsersSearch() {
  const { first_name } = useParams();

  const { data, loading, error } = useFetch(
    `http://127.0.0.1:8000/api/users/search/?first_name=${encodeURIComponent(
      first_name
    )}`
  );

  const users = data ? data.result : [];

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="flex flex-col items-center justify-center h-full mx-auto overflow-scroll">
      <div className="flex flex-col items-center h-full sm:w-3/4 md:w-full my-16 max-w-screen-lg">
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
                  <Button
                    variant="outline"
                    className="bg-zinc-900 text-white text-sm rounded-lg"
                  >
                    Fetch Details
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        ) : (
          <p>No results found.</p>
        )}
      </div>
    </div>
  );
}

export default UsersSearch;
