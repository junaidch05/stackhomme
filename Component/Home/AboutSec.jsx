"use client"
import React from "react";
import about from "../../public/case.webp";
import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutSec() {
  return (
    <>
      <section className="about">
        <div className="row">
          <motion.div
            initial={{  scale: 0 }}
            whileInView={{scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once:true }}
            className="row-content"
          >
            <h2>Why Choose</h2>
            <h2>Stack Homme</h2>
            <h4>
              Delivering results anchored in data. Empowering business startup
              strategies is the Strength of STACK Homme.
            </h4>
            <p>
              Devoted to nurturing the growth of businesses, we offer
              exceptional business planning services that unveil untapped
              potential. Our team of seasoned professionals is resolute in
              formulating innovative success strategies, driving our clients
              towards the pinnacle of their aspirations.
            </p>
            <p>
              Our adeptness spans various technology stacks and programming
              languages, enabling us to deploy specialized application
              development teams and accomplished software engineers. Their
              unwavering dedication is solely directed towards your project,
              ensuring unparalleled commitment and expertise..
            </p>
          </motion.div>
          <motion.div  initial={{scale: 0,rotate:0 }}
            whileInView={{scale: 1,rotate:360 }}
            transition={{ duration: 1 }}
            viewport={{ once:false }} className="row-image">
            <Image src={about} alt="about us" className="img" />
          </motion.div>
        </div>
      </section>
    </>
  );
}
