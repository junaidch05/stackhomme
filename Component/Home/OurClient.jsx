"use client"
import React from 'react'
import foodnet from '../../public/foodnet.webp'
import klim from '../../public/klim.webp'
import bakewell from '../../public/bakewell.webp'
import Image from 'next/image'
import { motion } from "framer-motion";
export default function OurClient() {
  return (
    <section className="client">
        <div className="content">
            <h2>Some of our clients</h2>
            <p>Elevate Your Digital Presence with Stack Homme</p>
        </div>
        <div className="imagerow">
            <motion.div
               initial={{ y:200, opacity:0 }}
               whileInView={{ y: 0, opacity:1 }}
                transition={{ duration: 0.5}}
                viewport={{ once: false }}
            className="imagebox">
                <Image src={klim} className='clientimage' alt="food net" />
            </motion.div>
            <motion.div
               initial={{ y:200, opacity:0 }}
               whileInView={{ y: 0, opacity:1 }}
                transition={{ duration: 0.5}}
                viewport={{ once: false }}
            className="imagebox">
                <Image src={foodnet} className='clientimage' alt="food net" />
            </motion.div>
            <motion.div
               initial={{ y:200, opacity:0 }}
               whileInView={{ y: 0, opacity:1 }}
                transition={{ duration: 0.5}}
                viewport={{ once: false }}
            className="imagebox">
                <Image src={bakewell} className='clientimage' alt="food net" />
            </motion.div>
        </div>
    </section>
  )
}
