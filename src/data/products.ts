export interface ProductSpec {
  label: string;
  value: string;
}

export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  image: string;
  description: string;
  specifications: ProductSpec[]; // <-- Added this
}

export const featuredProducts: Product[] = [
  {
    id: "smart-bulb-pro",
    name: "Smart Bulb Pro",
    category: "Smart Lighting",
    price: 1999,
    image: "/products/smart lighting.png",
    description: "Color-changing LED bulb with Matter support",
    specifications: [
      { label: "Colors", value: "16 Million RGB" },
      { label: "Protocol", value: "Matter / WiFi" },
      { label: "Lifespan", value: "25,000 Hours" },
    ],
  },
  {
    id: "smart-switch-v2",
    name: "Smart Switches",
    category: "Smart Switches",
    price: 1499,
    image: "/products/smart switches.png",
    description: "WiFi switch with energy monitoring",
    specifications: [
      { label: "Max Load", value: "15 Amps" },
      { label: "Tracking", value: "Live Energy Usage" },
      { label: "Voice", value: "Alexa & Google" },
    ],
  },
  {
    id: "climate-hub",
    name: "Climate Hub",
    category: "Climate Control",
    price: 3999,
    image: "/products/climate control.png",
    description: "AC + fan controller with temperature sensors",
    specifications: [
      { label: "Sensors", value: "Temp & Humidity" },
      { label: "Range", value: "Up to 30 meters" },
      { label: "Display", value: "OLED Touch" },
    ],
  },
   {
    id: "smart-controller",
    name: "Smart Controller",
    category: "Smart Controller",
    price: 1499,
    image: "/products/smart-controller.png",
    description: "WiFi switch with energy monitoring",
    specifications: [
      { label: "Sensors", value: "Temp & Humidity" },
      { label: "Range", value: "Up to 30 meters" },
      { label: "Display", value: "OLED Touch" },
    ],
  },
   {
    id: "smart-security",
    name: "Smart Security",
    category: "Smart Security",
    price: 2999,
    image: "/products/smart-security.png",
    description: "Wireless security system with motion detection",
    specifications: [
      { label: "Sensors", value: "Temp & Humidity" },
      { label: "Range", value: "Up to 30 meters" },
      { label: "Display", value: "OLED Touch" },
    ],
  },
  // Add specifications to your other products...
];