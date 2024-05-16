import featured from "../styles/Featured.module.css";
import Image from "next/image";

import Link from "next/link";
import { motion } from "framer-motion";

//import menuInfoPic from "../public/mint-info.webp";
import menuInfoPic from "../public/mint-info.jpg";
import menuLorePic from "../public/lore.jpg";
import menuGalleryPic from "../public/gallery.png";
import menuStakingPic from "../public/staking.png";
//import menuGalleryPic from "../public/gallery.webp";
//import menuStakingPic from "../public/staking.webp";
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
            placeholder="blur"
        
            alt="Allow List & Mint Information"
            src={menuInfoPic}
            width="816"
            height="816"
          />
          <h5>Allow List & Mint Information</h5>
        </Link>
        <p>1-00</p>
      </motion.div>

      <motion.div
        variants={item}
        onMouseEnter={lockedEnter}
        onMouseLeave={justLeave}
      >
        <Link href="/">
          <Image alt="Staking" src={menuStakingPic} width="816" height="816" />
          <h5>Staking</h5>
        </Link>
        <p>2-00</p>
      </motion.div>

      <motion.div
        variants={item}
        onMouseEnter={lockedEnter}
        onMouseLeave={justLeave}
      >
        <Link href="/">
          <Image alt="Lore" src={menuLorePic} width="816" height="816" />
          <h5>Lore</h5>
        </Link>
        <p>3-00</p>
      </motion.div>

      <motion.div
        variants={item}
        onMouseEnter={lockedEnter}
        onMouseLeave={justLeave}
      >
        <Link href="/">
          <Image alt="Gallery" src={menuGalleryPic} width="816" height="816" />
          <h5>Gallery</h5>
        </Link>
        <p>4-00</p>
      </motion.div>
    </motion.div>
  );
};

export default Featured;
