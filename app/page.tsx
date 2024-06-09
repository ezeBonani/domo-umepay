"use client"
import {Fade} from "react-awesome-reveal"

import Contact from "@/components/Contact";
import Domo from "@/components/Domo";
import Hero from "@/components/Hero";
import Images from "@/components/Images";
import Location from "@/components/Location";
import Pricing from "@/components/Pricing";
import Services from "@/components/Services";

export default function Home() {
  return (
    <div>
        <Hero/>
      <Fade delay={200} duration={1500} fraction={0.15} cascade damping={0.1} triggerOnce={true} >
        <Domo/>
        <Services/>
        <Images/>
        <Pricing/>
        <Contact/>
        <Location/>
      </Fade>
    </div>
  );
}
