import { HeroSection } from "@/sections/HeroSection";
import LetWork from "@/sections/LetWork";
import OurProjects from "@/sections/OurProjects";
import { OurStack } from "@/sections/OurStack";
import OverView from "@/sections/OverView";
import Pricing from "@/sections/Pricing";
import WhatWeDo from "@/sections/WhatWeDo";
import WhychoseUs from "@/sections/WhychoseUs";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <OverView />
      <WhatWeDo />
      <OurStack />
      <Pricing />
      <OurProjects />
      <LetWork />
      <WhychoseUs />
    </div>
  );
}
