import jamieDenise from "../assets/imgs/jamie-denise.webp";

const data = [
  {
    id: 1,
    name: "Jamie Denise",
    image: jamieDenise,
    email: "yNf6t@example.com",
    tags: "No other significant findings — still you. "
  },
  // {
  //   id: 2,
  //   name: "sarah",
  //   image: image1,
  //   tags: "No other significant findings — still you. "
  // },
];

data.forEach((item) => {
  item.path = item.name.split(" ").join("-").toLowerCase()
})

export default data