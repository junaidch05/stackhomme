"use client"
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

function Parallax({ prop,proplink }) {
  return (
    <>
      <section className="parallax">
        <motion.h2
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: false }}
        >
          Let Us Know What You’re Looking for We’ll Build it for You
        </motion.h2>

        <motion.button
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: false }}
          className="btn"
        >
          <Link href={proplink} className="parallex-link">
          {prop}
          </Link>
      
        </motion.button>
      </section>
    </>
  );
}

export default Parallax;
