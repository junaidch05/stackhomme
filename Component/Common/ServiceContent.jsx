import React from 'react'
import { servicescontent } from './herocontent'
import Image from 'next/image'
export default function ServiceContent({page}) {
    const data = servicescontent[page]||{}
  return (
 <>
<section className="servicecontent">
 <h2>{data.text1}</h2>
 <h2>{data.text2}</h2>
 <h4>{data.text3}</h4>
 <p>{data.para}</p>
 <div className="stack-icon">
   {data.img.map((icon,iconIndex)=>(
    <div className="stack-iconHolder" key={iconIndex}>
    <Image src={icon}  priority={true}  alt="icon" className='stack-iconImage' />
    </div>
   ))} 
   </div>
</section>
 </>
  )
}
