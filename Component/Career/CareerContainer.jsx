import React from "react";
import { heroData } from "../Common/herocontent";
import Parallax from "../Common/Parallax";
import CareerContent from "./CareerContent";
import dynamic from "next/dynamic";
const DynamicHero= dynamic(() => import('../Common/Hero'), {
  ssr:false
});


export default function CareerContainer({ page }) {
  const data = heroData[page] || {};
  return (
    <>
      <DynamicHero
        title_1={data.title_1}
        title_2={data.title_2}
        content={data.content}
        image={data.image}
        btntext={data.btntext||"request a free Quote"}
      />
      <CareerContent />
      <Parallax prop="Contact Us" proplink="/contact-us" />
    </>
  );
}
