import React from "react";
import { DNA } from "react-loader-spinner";
import { motion } from "framer-motion";

const LOADER_STATEMENT = "Generating Image...".split("");

function Loader() {
  return (
    <div className="flex flex-col items-center justify-center h-full">
      <DNA
        visible={true}
        height="80"
        width="80"
        ariaLabel="dna-loading"
        wrapperStyle={{}}
        wrapperClass="dna-wrapper"
      />
      <p className="text-white">
        {LOADER_STATEMENT.map((char, index) => (
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.1, delay: 0.05 * index }}
            key={index}
          >
            {char}
          </motion.span>
        ))}
      </p>
    </div>
  );
}

export default Loader;
