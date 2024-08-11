import React from "react";

function Card({ item }) {
  const tagsLength = Math.ceil(70000 / item.tags.length);

  // const tagStatements = Array.from({ length: tagsLength }, () => tags);
  const tagStatements = [];

  for (let i = 0; i < tagsLength; i++) {
    tagStatements.push(item.tags);
  }

  return (
    <div
      className="mx-auto max-w-[560px] text-[0.2rem] sm:text-[0.4rem] leading-[.2rem] sm:lead-[.5rem] sm:tracking-wide max-h-[100svh] text-justify text-ellipsis overflow-hidden h-[90svh] text-wrap tracking-tighter bg-contain bg-center bg-no-repeat bg-clip-text text-transparent font-black px-2"
      style={{
        backgroundImage: `url(${item.image})`,
        filter: "grayscale(100%)",
      }}
    >
      <p>
        {/* {randomString} */}
        {/* {tagStatements.map((group, index) => (
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.1, delay: 0.01 * index }}
            key={index}
            className="rotate-90"
          >
            {tags}
          </motion.span>
        ))} */}
        {tagStatements.map((group, index) => (
          <span key={index} className="rotate-90">
            {item.tags}
          </span>
        ))}
      </p>
    </div>
  );
}

export default Card;
