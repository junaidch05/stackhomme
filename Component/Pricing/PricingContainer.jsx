import React from 'react'
import dynamic from "next/dynamic";
const DynamicHero= dynamic(() => import('../Common/Hero'), {
  ssr:false
});

import { heroData } from "../Common/herocontent";

import PricingCard from './PricingCard';
import Parallax from "../Common/Parallax";

export default function PricingContainer({page}) {
    const data = heroData[page] || {};
  return (
  <>

<DynamicHero
        title_1={data.title_1||""}
        title_2={data.title_2||""}
        content={data.content||""}
        image={data.image}
        btntext={data.btntext||"request a free Quote"}
      />
      <PricingCard/>
      <Parallax prop="Contact us" proplink="/contact-us"/>
    
  
  </>
  )
}
