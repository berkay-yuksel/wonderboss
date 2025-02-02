import { motion } from "framer-motion";
import preloader from "../styles/Preloader.module.css";

const loaderVariants = {
  animatonOne: {
    scale: [2, 1],
    y: [-110, 0],
    transition: {
      scale: {
        duration: 3,
      },
      y: {
        duration: 4,
      },
    },
  },
};

const Preloader = () => {
  return (
    <motion.div
      className={preloader.container}
      animate={{ y: -2000 }}
      transition={{ duration: 2, delay: 4, ease: [0.87, 0, 0.13, 1] }}
    >
      <h1>wonder boss</h1>
    </motion.div>
  );
};

export default Preloader;
