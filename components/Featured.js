import featured from "../styles/Featured.module.css";
import Image from "next/image";

import Link from "next/link";
import { motion } from "framer-motion";

const Featured = ({
  justLeave,
  textEnter,
  onMouseEnter,
  onMouseLeave,
  lockedEnter,
}) => {
  const list = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0,
        staggerChildren: 0.5,
      },
    },
  };

  const item = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={list}
      className={featured.container}
    >
      <motion.div
        variants={item}
        onMouseEnter={textEnter}
        onMouseLeave={justLeave}
      >
        <Link href="/mint-info">
          <Image
            alt="leeerob"
            src="/deneme.jpg"
            width="816"
            height="816"
            placeholder=""
          />
          <h5>Mint Information</h5>
        </Link>
        <p>1-00</p>
      </motion.div>

      <motion.div
        variants={item}
        onMouseEnter={lockedEnter}
        onMouseLeave={justLeave}
      >
        <Link href="/staking">
          <Image
            alt="leeerob"
            src="/deneme.jpg"
            width="816"
            height="816"
            placeholder=""
          />
          <h5>Staking</h5>
        </Link>
        <p>2-00</p>
      </motion.div>

      <motion.div
        variants={item}
        onMouseEnter={textEnter}
        onMouseLeave={justLeave}
      >
        <Link href="/lore">
          <Image
            alt="leeerob"
            src="/deneme.jpg"
            width="816"
            height="816"
            placeholder=""
          />
          <h5>Lore</h5>
        </Link>
        <p>3-00</p>
      </motion.div>

      <motion.div
        variants={item}
        onMouseEnter={textEnter}
        onMouseLeave={justLeave}
      >
        <Link href="/gallery">
          <Image
            alt="leeerob"
            src="/deneme.jpg"
            width="816"
            height="816"
            placeholder=""
          />
          <h5>Gallery</h5>
        </Link>
        <p>4-00</p>
      </motion.div>
    </motion.div>
  );
};

export default Featured;
