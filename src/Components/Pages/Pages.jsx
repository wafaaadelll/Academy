import React from "react";
import { Route, Routes } from "react-router-dom";
import Footer from "../../Shared/Footer/Footer";
import Nav from "../../Shared/Nav/Nav";
import Screen from "../Home/Screen";

export default function Pages() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Screen />} />
        <Route path="/home" element={<Screen />} />
      </Routes>
      <Footer />
    </>
  );
}
