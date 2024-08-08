import React, { useState } from "react";
import { cleanUp, generateRandomString } from "../../utils/helper";
import { motion } from "framer-motion";
import prof from "../../assets/imgs/prof-cropped.jpg";

function Card() {
  const randomString = generateRandomString(70000);

  return (
    <motion.div
      className="mx-auto max-w-[560px] text-[0.2rem] leading-[.2rem] max-h-[100svh] text-justify text-ellipsis overflow-hidden h-[90svh] text-wrap tracking-tighter bg-cover bg-center bg-no-repeat bg-clip-text text-transparent font-black"
      style={{ backgroundImage: `url(${prof})` }}
    >
      <motion.p transition={{ duration: 0.5, delay: 0.5 }}>
        {randomString}
      </motion.p>
    </motion.div>
  );
}

export default Card;
