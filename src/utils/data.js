import jamieDenise from "../assets/imgs/jamie-denise.webp";
import geneRyan from "../assets/imgs/gene-ryan.jpg";

const data = [
  {
    id: 1,
    name: "Jamie Denise",
    image: jamieDenise,
    email: "yNf6t@example.com",
    tags: "No other significant findings (still you). "
  },
  {
    id: 2,
    name: "Gene Ryan",
    image: geneRyan,
    tags: "No other significant findings. "
  },
];

data.forEach((item) => {
  item.path = item.name.split(" ").join("-").toLowerCase()
})

export default data