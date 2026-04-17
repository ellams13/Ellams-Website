export type Product = {
  slug: string;
  name: string;
  category: "Clothing" | "Posters" | "Objects";
  price: number;
  image: string;
  imagePosition?: string;
  description: string;
};

export const products: Product[] = [
  {
    slug: "wool-overshirt",
    name: "Wool Overshirt",
    category: "Clothing",
    price: 280,
    image: "/images/selected/screenshot-1.png",
    imagePosition: "center 35%",
    description:
      "Heavyweight brushed wool with a relaxed silhouette. Unlined, single chest pocket, horn buttons.",
  },
  {
    slug: "cotton-tee",
    name: "Cotton Tee",
    category: "Clothing",
    price: 65,
    image: "/images/selected/screenshot-3.png",
    imagePosition: "center 60%",
    description:
      "Mid-weight organic cotton, boxy cut. Garment-dyed in off-white.",
  },
  {
    slug: "wide-trousers",
    name: "Wide Trousers",
    category: "Clothing",
    price: 195,
    image: "/images/selected/screenshot-2.png",
    imagePosition: "center 70%",
    description:
      "Linen-cotton blend with a wide leg and elastic waist. Two slant pockets.",
  },
  {
    slug: "brutalist-poster",
    name: "Brutalist No. 1",
    category: "Posters",
    price: 45,
    image: "/images/selected/screenshot-2.png",
    imagePosition: "center 20%",
    description:
      "Risograph print on 150gsm uncoated stock. Edition of 100. 500 × 700mm.",
  },
  {
    slug: "form-study-poster",
    name: "Form Study",
    category: "Posters",
    price: 45,
    image: "/images/selected/screenshot-1.png",
    imagePosition: "left center",
    description:
      "Two-colour screen print on recycled paper. 420 × 594mm.",
  },
  {
    slug: "grid-poster",
    name: "Grid Systems",
    category: "Posters",
    price: 50,
    image: "/images/selected/screenshot-3.png",
    imagePosition: "right center",
    description:
      "Offset lithograph celebrating modular typography. 500 × 700mm.",
  },
  {
    slug: "ceramic-vessel",
    name: "Ceramic Vessel",
    category: "Objects",
    price: 120,
    image: "/images/selected/screenshot-3.png",
    imagePosition: "center 30%",
    description:
      "Hand-thrown stoneware with matte ash glaze. Approx. 18cm tall.",
  },
  {
    slug: "desk-weight",
    name: "Desk Weight",
    category: "Objects",
    price: 85,
    image: "/images/selected/screenshot-2.png",
    imagePosition: "center 85%",
    description:
      "Solid brass paperweight, sand-cast and hand-polished. 8cm diameter.",
  },
  {
    slug: "incense-holder",
    name: "Incense Holder",
    category: "Objects",
    price: 55,
    image: "/images/selected/screenshot-1.png",
    imagePosition: "right 70%",
    description:
      "Blackened steel tray with a single ash-catch channel. 22cm long.",
  },
];
