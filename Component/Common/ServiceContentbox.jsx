"use client"
import React from 'react'
import { servicescontentbox } from './herocontent'
import { motion } from "framer-motion";
import Image from 'next/image';

export default function ServiceContentbox({page}) {
    const data = servicescontentbox[page]||{}
    
  return (
    <section className="services">
    <div className="box-container">
      
      {data.map((data, index) => (
        <motion.div  initial={{ y:200, opacity:0 }}
        whileInView={{ y: 0, opacity:1 }}
         transition={{ duration: 0.5}}
         viewport={{ once: false }} className="box" key={index}>
          <div className="service-icon">
            <Image src={data.main_image}  priority={true}  className='servicemain' alt="icon" />
          </div>
          <h2>{data.title}</h2>
          <p>{data.desc}</p>
        </motion.div>
      ))}
    </div>
  </section>
  )
}
