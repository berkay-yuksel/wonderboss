"use client";
import { useEffect, useState, useRef } from "react";
import "../styles/globals.css";

import Navbar from "../components/Navbar.js";
import Hero from "../components/Hero.js";
import Featured from "../components/Featured.js";
import About from "../components/About.js";
import Roadmap from "../components/Roadmap.js";
/* import Info from "../components/Info.js"; */
import Faq from "../components/Faq.js";
import Story from "../components/Story.js";
import Footer from "../components/Footer.js";
import Preloader from "../components/Preloader";
import Rewards from "../components/Rewards.js";

import {
  motion,
  useScroll,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import FooterBottom from "../components/FooterBottom.js";

const Home = () => {
  //big pics animation
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end end"],
  });

  //custom cursor
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, { stiffness: 300, damping: 30 });
  const springY = useSpring(mouseY, { stiffness: 300, damping: 30 });

  const offsetX = useTransform(springX, (value) => value - 8);
  const offsetY = useTransform(springY, (value) => value - 8);

  const [cursorVariant, setCursorVariant] = useState("default");

  useEffect(() => {
    const mouseMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener("mousemove", mouseMove);
    return () => window.removeEventListener("mousemove", mouseMove);
  }, []);

  // loaderr
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);

  //loaderr
  const variants = {
    default: {
      width: 16,
      height: 16,
      backgroundColor: "rgba(233,233,233,0.4)",
      borderRadius: "50%",
    },
    text: {
      width: 140,
      height: 40,
      backgroundImage: "url(/explore.webp)",
      backgroundRepeat: "no-repeat",
      backgroundSize: "auto",
      borderRadius: "0%",
    },
    locked: {
      width: 190,
      height: 40,
      backgroundImage: "url(/stuned.webp)",
      backgroundRepeat: "no-repeat",
      backgroundSize: "auto",
      borderRadius: "0%",
      marginLeft: "15px",
      marginTop: "-15px",
    },
    clickable: {
      width: 20,
      height: 20,
      border: "2px solid darkgrey",
      backgroundColor: "transparent",
    },
    scroll: {
      width: 122,
      height: 40,
      backgroundImage: "url(/scroll.png)",
      backgroundRepeat: "no-repeat",
      backgroundSize: "auto",
      borderRadius: "0%",
      marginLeft: "15px",
      marginTop: "-15px",
    },
  };

  const justLeave = () => setCursorVariant("default");
  const textEnter = () => setCursorVariant("text");
  const lockedEnter = () => setCursorVariant("locked");
  const clickableEnter = () => setCursorVariant("clickable");
  const scrollEnter = () => setCursorVariant("scroll");

  return (
    <motion.div>
      <motion.div>
        <motion.div
          className="cursor"
          variants={variants}
          animate={cursorVariant}
          style={{
            translateX: offsetX,
            translateY: offsetY,
          }}
        ></motion.div>

        <Navbar
          clickableEnter={clickableEnter}
          justLeave={justLeave}
          lockedEnter={lockedEnter}
          onMouseEnter
          onMouseLeave
        />
        <Hero />
        {/* <Rewards /> */}
        <Featured
          textEnter={textEnter}
          justLeave={justLeave}
          lockedEnter={lockedEnter}
          onMouseEnter
          onMouseLeave
        />
        <About
          clickableEnter={clickableEnter}
          justLeave={justLeave}
          onMouseEnter
          onMouseLeave
        />

        <Roadmap />

        {/* <Info /> */}
        <Faq
          clickableEnter={clickableEnter}
          justLeave={justLeave}
          lockedEnter={lockedEnter}
          onMouseEnter
          onMouseLeave
        />
        <Story
          scrollEnter={scrollEnter}
          justLeave={justLeave}
          onMouseEnter
          onMouseLeave
        />
        <Footer
          clickableEnter={clickableEnter}
          justLeave={justLeave}
          onMouseEnter
          onMouseLeave
        />
        <FooterBottom
          clickableEnter={clickableEnter}
          justLeave={justLeave}
          onMouseEnter
          onMouseLeave
        />
      </motion.div>
    </motion.div>
  );
};

export default Home;
