import React from "react";
import { heroData } from "../Common/herocontent";
import AboutSec from "./AboutSec";
import Parallax from "../Common/Parallax";
import CaseStudy from "./CaseStudy";
import Services from "../Common/Services";
import OurClient from "./OurClient";
import dynamic from 'next/dynamic';
const DynamicHero= dynamic(() => import('../Common/Hero'), {
  ssr:false
});

export default function HomeContainer({ page }) {
  const data = heroData[page] || {};
  return (
    <>
      <DynamicHero
        title_1={data.title_1}
        title_2={data.title_2||""}
        content={data.content||""}
        image={data.image}
      />
      <AboutSec/>
      <Services bg="#F0F0F0"/>
      <Parallax prop="View Pricing" proplink="/pricing"/>
      <CaseStudy/>
      <OurClient/>



    </>
  );
}
