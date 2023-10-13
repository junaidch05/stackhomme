"use client"
import React from 'react'
import { motion } from 'framer-motion';
import Bgparticles from './Bgparticles';
import dynamic from 'next/dynamic';
import Image from 'next/image';
const DynamicBgparticles = dynamic(() => import('./Bgparticles'), {
  ssr:false
});
export default function Hero({title_1,title_2,content,image}) {

  const variants = {
    animate: {
      y: [0, -20, 0], // Values for up, mid, and down positions
      transition: {
        y: { repeat: Infinity, duration: 2, repeatType: 'reverse', ease: 'linear' },
      },
    },
  };

  return (
   <>
   
   <section className="banner">
   <DynamicBgparticles/>
   <div className="banner-container">
 <motion.div
 initial={{ x:500, opacity:0 }}
 whileInView={{ x: 0, opacity:1 }}
  transition={{ duration: 0.9}}
  viewport={{ once: true }}
 
 className="content">
  <h2>{title_1}</h2>
  <h2 id='second'>{title_2}</h2>
  <p>{content}</p>
 
 </motion.div>

 <motion.div 
  initial="animate"
  animate="animate"
  variants={variants}
 
 className="imageHolder">
  <Image src={image} alt="Banner Image" priority={true} className="image"/>
 </motion.div>
 
   </div>

   </section>
 
   </>
  )
}
