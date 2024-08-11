import jamieDenise from "../assets/imgs/jamie-denise.webp";
import geneRyan from "../assets/imgs/gene-ryan.jpg";
import justinBieber from "../assets/imgs/justin-bieber.webp";

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
    tags: "No other significant findings ht "
  },
  {
    id: 3,
    name: "Justin Bieber",
    image: justinBieber,
    tags: "Never say never. "
  }
];

data.forEach((item) => {
  item.path = item.name.split(" ").join("-").toLowerCase()
})

export default data