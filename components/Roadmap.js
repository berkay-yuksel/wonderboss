"use client";
import roadmap from "../styles/Roadmap.module.css";

import { motion, useScroll } from "framer-motion";
import { useState, useRef } from "react";

const Roadmap = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end end"],
  });
  console.log(scrollYProgress);

  return (
    <motion.div ref={ref} style={{ scale: scrollYProgress }}>
      <div className={roadmap.container}></div>{" "}
    </motion.div>
  );
};

export default Roadmap;
