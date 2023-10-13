import React from 'react'
import Parallax from "../Common/Parallax";
import dynamic from "next/dynamic";
const DynamicHero= dynamic(() => import('../Common/Hero'), {
  ssr:false
});

import { heroData } from "../Common/herocontent";
import ContactForm from './ContactForm';

export default function ContactContainer({ page }) {
    const data = heroData[page] || {};
  return (
<>
<DynamicHero
        title_1={data.title_1||""}
        title_2={data.title_2||""}
        content={data.content||""}
        btntext={data.btntext||"request a free Quote"}
        image={data.image}
      />
      <ContactForm/>
      <Parallax prop="View Pricing" proplink="/pricing"/>

</>
  )
}
