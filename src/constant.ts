import { Herr_Von_Muellerhoff } from "next/font/google";
import css from "styled-jsx/css";

export const menuItems = [
  {
    id: 1,
    title: "Shop",
    href: "/shop",
  },
  {
    id: 2,
    title: "Gallery",
    href: "/gallery",
  },
  {
    id: 3,
    title: "About",
    href: "/about",
  },
  {
    id: 4,
    title: "Contact",
    href: "/contact",
  },
];

export const shopItems = [
  {
    id: 1,
    image: "/flowers/flower1.jpg",
    productName: "Ruysch Arrangement",
    productDescription:
      "Here is a description of your product. Pellentesque quis enim ac tortor malesuada tempus. Proin imperdiet, sem sed consequat consequat, erat nunc lobortis elit, id varius elit urna eget nibh. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque tincidunt pulvinar sodales. Aliquam sapien leo, scelerisque vel nisi id, porta elementum sem.",
    productPrice: "Rs.200",
    availability: true,
  },
  {
    id: 2,
    image: "/flowers/flower2.jpg",
    productName: "De Heem Bouquet",
    productDescription:
      "Here is a description of your product. Pellentesque quis enim ac tortor malesuada tempus. Proin imperdiet, sem sed consequat consequat, erat nunc lobortis elit, id varius elit urna eget nibh. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque tincidunt pulvinar sodales. Aliquam sapien leo, scelerisque vel nisi id, porta elementum sem.",
    productPrice: "Rs.200",
    availability: true,
  },
  {
    id: 3,
    image: "/flowers/flower3.jpg",
    productName: "Van Alest Bouquet",
    productDescription:
      "Here is a description of your product. Pellentesque quis enim ac tortor malesuada tempus. Proin imperdiet, sem sed consequat consequat, erat nunc lobortis elit, id varius elit urna eget nibh. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque tincidunt pulvinar sodales. Aliquam sapien leo, scelerisque vel nisi id, porta elementum sem.",
    productPrice: "Rs.200",
    availability: false,
  },
  {
    id: 4,
    image: "/flowers/flower4.jpg",
    productName: "Ruysch Arrangement",
    productDescription:
      "Here is a description of your product. Pellentesque quis enim ac tortor malesuada tempus. Proin imperdiet, sem sed consequat consequat, erat nunc lobortis elit, id varius elit urna eget nibh. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque tincidunt pulvinar sodales. Aliquam sapien leo, scelerisque vel nisi id, porta elementum sem.",
    productPrice: "Rs.150",
    availability: true,
  },
  {
    id: 5,
    image: "/flowers/flower2.jpg",
    productName: "Vosmayer Agement",
    productDescription:
      "Here is a description of your product. Pellentesque quis enim ac tortor malesuada tempus. Proin imperdiet, sem sed consequat consequat, erat nunc lobortis elit, id varius elit urna eget nibh. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque tincidunt pulvinar sodales. Aliquam sapien leo, scelerisque vel nisi id, porta elementum sem.",
    productPrice: "Rs.500",
    availability: true,
  },
];
export const homePageGridItems = [
  {
    id: 1,
    image:
      "https://plus.unsplash.com/premium_photo-1674986176795-5b8a45a38f6c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YXN0aGV0aWMlMjBmbG93ZXJzfGVufDB8fDB8fHww",
    text: "Asthetic Flower Arrangements",
    cssId: "box-1",
    link: "/flower-arrangement",
  },
  {
    id: 2,
    image:
      "https://plus.unsplash.com/premium_photo-1673569481316-116fb85d82d6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Zmxvd2VyJTIwZGVjb3JhdGlvbnN8ZW58MHx8MHx8fDA%3D",
    text: "Flowers",
    cssId: "box-2",
    link: "/shop",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1555447405-057915b40299?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGluZGlhbiUyMHdlZGRpbmd8ZW58MHx8MHx8fDA%3D",
    text: "Memorable Weddings",
    cssId: "box-3",
    link: "/wedding",
  },
  {
    id: 4,
    image:
      "https://images.unsplash.com/photo-1635866319966-00eef422cf64?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Ym91cWV0c3xlbnwwfHwwfHx8MA%3D%3D",
    text: "Beautiful Bouquets",
    cssId: "box-4",
    link: "/bouquet",
  },
  {
    id: 5,
    image:
      "https://images.unsplash.com/photo-1556125574-d7f27ec36a06?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZXZlbnRzfGVufDB8fDB8fHww",
    text: "Events and Celebrations",
    cssId: "box-5",
    link: "/event",
  },
  {
    id: 6,
    image:
      "https://images.unsplash.com/photo-1556125574-d7f27ec36a06?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZXZlbnRzfGVufDB8fDB8fHww",
    text: "Events and Celebrations",
    cssId: "box-6",
    link: "/event",
  },
];
export const blogSectionItems = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1556125574-d7f27ec36a06?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZXZlbnRzfGVufDB8fDB8fHww",
    text: "lily",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1556125574-d7f27ec36a06?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZXZlbnRzfGVufDB8fDB8fHww",
    text: "lily",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1556125574-d7f27ec36a06?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZXZlbnRzfGVufDB8fDB8fHww",
    text: "lily",
  },
];
