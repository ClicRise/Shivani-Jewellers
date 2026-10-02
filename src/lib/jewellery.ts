import piece1 from "@/assets/jewellery-1.png.asset.json";
import piece2 from "@/assets/jewellery-2.png.asset.json";
import piece3 from "@/assets/jewellery-3.png.asset.json";
import piece4 from "@/assets/jewellery-4.png.asset.json";
import piece5 from "@/assets/jewellery-5.png.asset.json";
import piece6 from "@/assets/jewellery-6.png.asset.json";
import piece7 from "@/assets/jewellery-7.png.asset.json";
import piece8 from "@/assets/jewellery-8.png.asset.json";
import piece9 from "@/assets/jewellery-9.png.asset.json";
import piece10 from "@/assets/jewellery-10.png.asset.json";
import piece11 from "@/assets/jewellery-11.png.asset.json";

export const PHONE = "9719026425";
export const INSTAGRAM = "https://www.instagram.com/shivanijewellers1996/";
export const DIRECTIONS = "https://maps.app.goo.gl/Yzcok1H4EmZes6NS7";
export const ADDRESS = "Mansa Devi Rd, Sector 6, Jagriti Vihar, Meerut, Uttar Pradesh 250004";

export function whatsappUrl(productName?: string) {
  const message = productName
    ? `Hello, I would like to know the price of ${productName}.`
    : "Hello, I would like to enquire about your jewellery collection.";
  return `https://wa.me/91${PHONE}?text=${encodeURIComponent(message)}`;
}

export type Product = {
  id: number;
  name: string;
  category: "Necklaces" | "Rings" | "Earrings";
  image: string;
  description: string;
};

export const products: Product[] = [
  { id: 1, name: "Heritage Gold Choker Set", category: "Necklaces", image: piece1.url, description: "An ornate gold choker with pearl drops and colourful stonework, paired with matching earrings." },
  { id: 2, name: "Temple Peacock Necklace Set", category: "Necklaces", image: piece3.url, description: "Temple-inspired craftsmanship with peacock motifs and a statement centrepiece." },
  { id: 3, name: "Floral Gold Choker Set", category: "Necklaces", image: piece11.url, description: "A richly detailed floral choker with pearl drops and matching earrings." },
  { id: 4, name: "Temple Peacock Earrings", category: "Earrings", image: piece2.url, description: "Intricate gold earrings with vivid blue accents and delicate hanging details." },
  { id: 5, name: "Ruby Floral Gold Ring", category: "Rings", image: piece4.url, description: "A round, intricately worked ring with ruby-toned stones and a bright centre." },
  { id: 6, name: "Sunburst Gold Ring", category: "Rings", image: piece5.url, description: "A radiant circular floral design with a luminous centre stone." },
  { id: 7, name: "Paisley Ruby Gold Ring", category: "Rings", image: piece6.url, description: "A sculpted paisley design accented by a ruby-toned stone." },
  { id: 8, name: "Enamel Bloom Gold Ring", category: "Rings", image: piece7.url, description: "A softly shaped floral ring with pale enamel detailing and a red centre." },
  { id: 9, name: "Emerald Flower Gold Ring", category: "Rings", image: piece8.url, description: "A bold floral silhouette with fine engraving and a green centre stone." },
  { id: 10, name: "Ruby Petal Gold Ring", category: "Rings", image: piece9.url, description: "A charming petal-shaped gold ring with red and white accents." },
  { id: 11, name: "Emerald Peacock Gold Ring", category: "Rings", image: piece10.url, description: "A playful flower form with peacock-inspired detailing and a green accent." },
];