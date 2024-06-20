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
        <Domo/>
        <Services/>
        <Images/>
        <Pricing/>
        <Contact/>
        <Location/>
    </div>
  );
}
