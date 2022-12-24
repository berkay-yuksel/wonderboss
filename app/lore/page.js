"use client";
import Image from "next/image";

import lore from "../../styles/Lore.module.css";
import { motion } from "framer-motion";
const Lore = () => {
  return (
    <div>
      <motion.div className={lore.box1} whileTap={{ scale: 2 }}>
        <Image
          src="/deneme.jpg"
          alt="Picture of the author"
          width="100vw"
          // blurDataURL="data:..." automatically provided
          placeholder=""
        />
        <motion.div>asdasd asdşlkasşd</motion.div>
      </motion.div>
    </div>
  );
};

export default Lore;
