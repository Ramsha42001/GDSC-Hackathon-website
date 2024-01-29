import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Heading from "../components/Heading/Heading";
import AboutUs from "../components/AboutUs/AboutUs";
import GameCodex from "../components/GameCodex/GameCodex";
import Event from "../components/Events/Event";
import Hero from "../components/Hero/Hero";
import Timeline from "../components/TimeLine/Timeline";

const Home = () => {
  return (
    <div className="bg-black">
      {/* <Navbar /> */}
      <Hero />
      {/* <Heading /> */}
      <AboutUs />
      <GameCodex />
      <Event />
      <Timeline/>
    </div>
  );
};

export default Home;
