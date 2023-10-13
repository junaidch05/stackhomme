import React from 'react'
import dynamic from "next/dynamic";
const DynamicHero= dynamic(() => import('../Common/Hero'), {
  ssr:false
});

import { heroData } from "../Common/herocontent";
import Parallax from "../Common/Parallax"
import ServiceContent from '../Common/ServiceContent';
import ServiceContentbox from '../Common/ServiceContentbox';

export default function WebDesignContainer({page}) {
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
      <ServiceContent page="webdesign"/>
      <ServiceContentbox page='webdesign'/>
      
      <Parallax prop="View Pricing" proplink="/pricing"/>
  </>
  )
}
