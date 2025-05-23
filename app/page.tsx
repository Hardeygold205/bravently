import { HeroSection } from "@/sections/HeroSection";
import LetWork from "@/sections/LetWork";
import { WhatWeDo } from "@/sections/WhatWeDo";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <WhatWeDo />
      <LetWork />
    </div>
  );
}
