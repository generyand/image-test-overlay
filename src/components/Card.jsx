import { useCallback, useRef } from "react";
import { motion } from "framer-motion";
// import html2canvas from "html2canvas";
// import domtoimage from "dom-to-image";
import { toPng } from "html-to-image";
import { MdOutlineFileDownload } from "react-icons/md";

function Card({ item }) {
  const tagsLength = Math.ceil(70000 / item.tags.length);
  const tagStatements = [];
  const ref = useRef(null);

  for (let i = 0; i < tagsLength; i++) {
    tagStatements.push(item.tags);
  }

  const handleDownload = useCallback(() => {
    if (ref.current === null) {
      return;
    }

    toPng(ref.current, {
      cacheBust: true,
      backgroundColor: "black",
      style: {
        objectFit: "contain",
        filter: "grayscale(100%)",
        // backgroundSize: "cover",
        // backgroundPosition: "center",
        // backgroundRepeat: "no-repeat",
        fontWeight: "black",
      },
    })
      .then((dataUrl) => {
        const link = document.createElement("a");
        link.download = `${item.name}.png`;
        link.href = dataUrl;
        link.click();
      })
      .catch((err) => {
        console.log(err);
      });
  }, [ref]);

  return (
    <>
      <div id="card" className="bg-black">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mx-auto max-w-[560px] text-[0.4rem] leading-[0.35rem] max-h-[100svh] text-justify text-ellipsis overflow-hidden h-[90svh] text-wrap tracking-tighter bg-contain bg-center bg-no-repeat bg-clip-text text-transparent font-black px-2"
          style={{
            backgroundImage: `url(${item.image})`,
            filter: "grayscale(100%)",
          }}
        >
          <p>
            {tagStatements.map((group, index) => (
              <span className="bg-transparent" key={index}>
                {item.tags}
              </span>
            ))}
          </p>
        </motion.div>
      </div>
      <button
        className="px-4 py-2 font-semibold text-gray-800  bg-neutral-300 border border-gray-400 rounded-lg shadow active:bg-cyan-500 fixed bottom-5 right-[50%] translate-x-[50%] flex items-center gap-2"
        onClick={handleDownload}
      >
        <MdOutlineFileDownload className="w-6 h-6" />
        Download
      </button>
    </>
  );
}

export default Card;
