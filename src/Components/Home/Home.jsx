import React from "react";
import { Link } from "react-router-dom";
import City from "./city/City";
import Header from "./Header/Header";
import OurInstructor from "./Ourinstructor/Ourinstructor";
import Upcoming from "./Upcoming/Upcoming";

export default function Screen() {
  return (
    <div>
      <Header />
      <City />
      <Upcoming />
      <OurInstructor />
      <Link
        to={"/Aboutinstructors"}
        className="bg-head inline-block hover:bg-green text-white font-bold mt-20 py-2 w-52 border-b-4 border-green hover:border-head rounded"
      >
        Veiw Instracturs &rarr;
      </Link>
    </div>
  );
}
