"use client"
import React from 'react'
import casestudy from '../../public/casestudy.webp'
import { motion } from "framer-motion";
import Image from 'next/image';

export default function CaseStudy() {
  return (
<section className="casestudy">
        <div className="title">
            <h2>Case Study</h2>
        </div>
        <div className="row">
          <div className="row-content">
            <h2>Stack Homme</h2>
            <p>
              We are dedicated to helping growing businesses realize their
              potential with our exceptional business planning services. Our
              team of experienced professionals is committed to providing
              innovative strategies for success, and we strive to help our
              clients reach their goals.
            </p>
          </div>
          <motion.div 
          initial={{scale: 0,rotate:0 }}
            whileInView={{scale: 1,rotate:360 }}
            transition={{ duration: 1 }}
            viewport={{ once:false }} 
            className="row-image">
            <Image src={casestudy} alt="case study" className="img" />
          </motion.div>

        </div>

      </section>
  )
}
