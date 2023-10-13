"use client"
import React from "react";
import { services } from "./herocontent";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Services({ bg }) {
  const data = services;
  return (
    <>
      <section className="services" style={{ background: bg }}>
        <h2>our</h2>
        <h1>Technology Stack</h1>
        <p>We offer much more than traditional development services.</p>
        <div className="box-container">
          {data.map((data, index) => (
            <motion.div  
            initial={{ y:200, opacity:0 }}
            whileInView={{ y: 0, opacity:1 }}
             transition={{ duration: 0.5}}
             viewport={{ once: false }}
             className="box" key={index}>
              <div className="service-icon">
                <Image src={data.main_image}  priority={true}  className="servicemain" alt="icon" />
              </div>
              <h2>{data.title}</h2>
              <p>{data.desc}</p>
              <div className="stack-icon">
                {data.sec.map((icon, iconIndex) => (
                  <div className="stack-iconHolder" key={iconIndex}>
                    <Image src={icon}  priority={true}  alt="icon" className="stack-iconImage" />
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
}
