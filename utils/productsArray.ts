export type Product = {
  id: number;
  img: string;
  title: string;
  description: string;
  color: string;
  price: string;
  category: string;
};

const productsArray: Product[] = [
  {
    id: 1,
    img: "/images/img-iphone-1.webp",
    title: "iPhone 15",
    description: "128 Gb",
    color: "blue",
    price: "750",
    category: "iphone",
  },
  {
    id: 2,
    img: "/images/img-macbook-1.webp",
    title: "Macbook Pro",
    description: "512 Gb",
    color: "space gray",
    price: "1750",
    category: "macbook",
  },
  {
    id: 3,
    img: "/images/img-watch-1.webp",
    title: "Apple Watch SE",
    description: "41 mm",
    color: "white",
    price: "550",
    category: "watch",
  },
  {
    id: 4,
    img: "/images/img-iphone-2.webp",
    title: "iPhone 14 Pro",
    description: "512 Gb",
    color: "blue",
    price: "650",
    category: "iphone",
  },
  {
    id: 5,
    img: "/images/img-macbook-2.webp",
    title: "Macbook Air",
    description: "128 Gb",
    color: "black",
    price: "1050",
    category: "macbook",
  },
  {
    id: 6,
    img: "/images/img-watch-2.webp",
    title: "Apple Watch Ultra",
    description: "48 mm",
    color: "blue",
    price: "750",
    category: "watch",
  },
  {
    id: 7,
    img: "/images/img-iphone-3.webp",
    title: "iPhone 15 Pro Max",
    description: "256 Gb",
    color: "pink",
    price: "1000",
    category: "iphone",
  },
  {
    id: 8,
    img: "/images/img-macbook-3.webp",
    title: "Macbook Pro",
    description: "512 Gb",
    color: "white",
    price: "1250",
    category: "macbook",
  },
  {
    id: 9,
    img: "/images/img-watch-3.webp",
    title: "Apple Watch SE",
    description: "40 mm",
    color: "black",
    price: "750",
    category: "watch",
  },
];

export default productsArray;
