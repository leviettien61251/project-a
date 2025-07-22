interface Product {
  id: number;
  name: string;
  price: number;
  detail: string;
  quantity: number;
  image: string;
  category: string;
  size: string[];
  color: string[];
}



const list: Product[] = [
  {
    id: 1,
    name: "SolarGlow Lantern",
    price: 29.99,
    detail: "Portable solar-powered lantern, ideal for camping",
    quantity: 150,
    image: "/caro_blue_white.jpg",
    category: "Outdoor Gear",
    size: ["S", "M", "L", "XL", "XXL"],
    color: ["Blue", "White"],
  },
  {
    id: 2,
    name: "VelvetBrew Coffee",
    price: 14.5,
    detail: "Premium dark roast ground coffee, 500g bag",
    quantity: 320,
    image: "/Classic_Corduroy.jpg",
    category: "Food & Beverage",
    size: ["S", "M", "L", "XL", "XXL"],
    color: ["Brown", "Black"],
  },
  {
    id: 3,
    name: "AeroTune Headphones",
    price: 89.0,
    detail: "Wireless noise-canceling over-ear headphones",
    quantity: 85,
    image: "/clothes.jpg",
    category: "Electronics",
    size: ["S", "M", "L", "XL", "XXL"],
    color: ["Black", "Silver"],
  },
  {
    id: 4,
    name: "BreezeMist Fan",
    price: 24.95,
    detail: "USB mini desk fan with misting feature",
    quantity: 240,
    image: "/color_blue_flower.jpg",
    category: "Home Appliances",
    size: ["S", "M", "L", "XL", "XXL"],
    color: ["Blue", "White"],
  },
  {
    id: 5,
    name: "AquaPure Bottle",
    price: 18.75,
    detail: "BPA-free 1L water bottle with built-in purifier",
    quantity: 500,
    image: "/Discover_timeless_elegance.jpg",
    category: "Health & Wellness",
    size: ["S", "M", "L", "XL", "XXL"],
    color: ["Clear", "Green"],
  },
  {
    id: 6,
    name: "PixelSketch Tablet",
    price: 215.0,
    detail: '10" drawing tablet with stylus and pressure sensitivity',
    quantity: 60,
    image: "/Erhöhen_Sie_Ihre.jpg",
    category: "Electronics",
    size: ["S", "M", "L", "XL", "XXL"],
    color: ["Black", "Gray"],
  },
  {
    id: 7,
    name: "PlushNest Blanket",
    price: 34.9,
    detail: "Ultra-soft throw blanket, 150x200cm, machine washable",
    quantity: 130,
    image: "/PetiteKnit_Stockholm_Sweater.jpg",
    category: "Home & Living",
    size: ["S", "M", "L", "XL", "XXL"],
    color: ["Cream", "Gray"],
  },
  {
    id: 8,
    name: "SnapChef Blender",
    price: 52.8,
    detail: "Compact blender with 5 speed settings, 1.2L capacity",
    quantity: 95,
    image: "/Rave_Mommy_T_Shirt.jpg",
    category: "Kitchen Appliances",
    size: ["S", "M", "L", "XL", "XXL"],
    color: ["White", "Red"],
  },
  {
    id: 9,
    name: "GlowSkin Serum",
    price: 22.6,
    detail: "Vitamin C + hyaluronic acid brightening serum",
    quantity: 210,
    image: "/whitess.jpg",
    category: "Beauty & Personal Care",
    size: ["S", "M", "L", "XL", "XXL"],
    color: ["Clear", "Gold"],
  },
  {
    id: 10,
    name: "ZenNote Journal",
    price: 12.45,
    detail: "Hardcover wellness journal with guided prompts",
    quantity: 400,
    image: "/blahk.jpg",
    category: "Stationery",
    size: ["S", "M", "L", "XL", "XXL"],
    color: ["Black", "Beige"],
  },
];

export default list;
