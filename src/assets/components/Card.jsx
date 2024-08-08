import React, { useState } from "react";
import { cleanUp, generateRandomString } from "../../utils/helper";
import { motion } from "framer-motion";
import prof from "../../assets/imgs/prof-cropped.jpg";

function Card() {
  const randomString = generateRandomString(70000);

  const splitStringIntoGroups = (string, groupSize) => {
    const groups = [];
    for (let i = 0; i < string.length; i += groupSize) {
      groups.push(string.slice(i, i + groupSize));
    }
    return groups;
  };

  const randomStringGroups = splitStringIntoGroups(randomString, 500);

  return (
    <div
      className="mx-auto max-w-[560px] text-[0.2rem] leading-[.2rem] max-h-[100svh] text-justify text-ellipsis overflow-hidden h-[90svh] text-wrap tracking-tighter bg-cover bg-center bg-no-repeat bg-clip-text text-transparent font-black"
      style={{ backgroundImage: `url(${prof})` }}
    >
      <p>
        {/* {randomString} */}
        {randomStringGroups.map((group, index) => (
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.05 * index }}
            key={index}
            className=""
          >
            {cleanUp(group)}
          </motion.span>
        ))}
      </p>
    </div>
  );
}

export default Card;
