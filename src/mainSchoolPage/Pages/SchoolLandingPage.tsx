import React from "react";
import HomeScreen from "./HomeScreen";
import WelcomePage from "./WelcomePage";
import Gallery from "./Gallery";
import Teachers from "./Teachers";
import Footer from "./Footer";
import Header from "../Block/Header";

const SchoolLandingPage = () => {
  return (
    <div>
      <Header />
      <HomeScreen />
      <WelcomePage />
      <Gallery />
      <Teachers />
      <Footer />
    </div>
  );
};

export default SchoolLandingPage;
