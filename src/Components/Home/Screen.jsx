import React from "react";
import City from "./city/City";
import Header from "./Header/Header";
import Instructors from "./Instructors/Instructors";
import Upcoming from "./Upcoming/Upcoming";

export default function Screen() {
  return (
    <div>
      <Header />
      <City />
      <Upcoming />
      <Instructors />
    </div>
  );
}
