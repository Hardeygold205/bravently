import { HeroSection } from "@/sections/HeroSection";
import LetWork from "@/sections/LetWork";
import { OurStack } from "@/sections/OurStack";
import Pricing from "@/sections/Pricing";
import WhatWeDo from "@/sections/WhatWeDo";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <WhatWeDo />
      <OurStack />
      <Pricing />
      <LetWork />
    </div>
  );
}
