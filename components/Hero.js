import hero from "../styles/Hero.module.css";
import { motion } from "framer-motion";
const Hero = () => {
  const list = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        ease: "linear",
        delayChildren: 0,
        staggerChildren: 0.4,
      },
    },
  };

  const item = {
    hidden: { y: 200 },
    visible: { y: -10 },
  };
  return (
    <div className={hero.container}>
      <div className={hero.title}>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={list}
          className={hero.textWrapper}
        >
          <div className={hero.wordContainer}>
            <div className={hero.word}>
              <motion.h1 variants={item}>A SPACE COLLECTION</motion.h1>
            </div>
          </div>
          <div className={hero.wordContainer}>
            <div className={hero.word}>
              <motion.h1 variants={item}>DRIVEN BY STORY &</motion.h1>
            </div>
          </div>
          <div className={hero.wordContainer}>
            <div className={hero.word}>
              <motion.h1 variants={item}>COMMUNITY</motion.h1>
            </div>
          </div>
        </motion.div>
      </div>
      <div className={hero.sub_title}>
        <h5>EXPRESSIONS VIA ART</h5>
        <h5>CONNECTIONS VIA NFTS </h5>
      </div>
    </div>
  );
};

export default Hero;
