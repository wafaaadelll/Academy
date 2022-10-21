import React from "react";
import { Route, Routes } from "react-router-dom";
import Footer from "../../Shared/Footer/Footer";
import HomeNavbar from "../../Shared/Nav/HomeNavbar";
import Nav from "../../Shared/Nav/Nav";
import Aboutus from "../AboutUs/Who-we-are/Aboutus";
import Error from "../Error/Error";
import Home from "../Home/Home";
import Programs from "../Programs/Programs";
import ProgramDtl from "../ProgramDtl/ProgramDtl";
import Gallery from "../Gallery/Gallery";
import Contact from "../Contact/Contact";
import InstructorDtl from "../InstructorDtl/InstructorDtl";
import Instructors from "../Instructors/Instructors";

export default function Pages() {
  return (
    <>
      {/* <HomeNavbar /> */}
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Aboutus" element={<Aboutus />} />
        <Route path="/Aboutinstructors" element={<Instructors />} />
        <Route path="/Programs" element={<Programs />} />
        <Route path="/Programs/:productId" element={<ProgramDtl />} />
        <Route
          path="/Aboutinstructors/:productId"
          element={<InstructorDtl />}
        />
        <Route path="/Gallery" element={<Gallery />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </>
  );
}
