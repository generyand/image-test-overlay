import React, { useState } from "react";
import { cleanUp, generateRandomString } from "../utils/helper";
import { motion } from "framer-motion";
import prof from "../assets/imgs/prof-cropped.jpg";

function Card({ image, tags }) {

  const tagsLength = Math.ceil(70000 / tags.length);

  // const tagStatements = Array.from({ length: tagsLength }, () => tags);
  const tagStatements = [];

  for (let i = 0; i < tagsLength; i++) {
    tagStatements.push(tags);
  }

  // const randomString = generateRandomString(70000);

  // const splitStringIntoGroups = (string, groupSize) => {
  //   const groups = [];
  //   for (let i = 0; i < string.length; i += groupSize) {
  //     groups.push(string.slice(i, i + groupSize));
  //   }
  //   return groups;
  // };

  // const randomStringGroups = splitStringIntoGroups(randomString, 500);

  return (
    <div className="px-2 mt-10">
      <div
        className="mx-auto max-w-[560px] text-[0.2rem] leading-[.2rem] max-h-[100svh] text-justify text-ellipsis overflow-hidden h-[90svh] text-wrap tracking-tighter bg-cover bg-center bg-no-repeat bg-clip-text text-transparent font-black"
        style={{ backgroundImage: `url(${image})`, filter: "grayscale(100%)" }}
      >
        <p style={{ writingMode: "sideways-rl" }}>
          {/* {randomString} */}
          {tagStatements.map((group, index) => (
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.1, delay: 0.01 * index }}
              key={index}
              className="rotate-90"
            >
              {tags}
            </motion.span>
          ))}
        </p>
      </div>
    </div>
  );
}

// writing-mode: tb-rl;
// transform: rotate(-180deg);

export default Card;
