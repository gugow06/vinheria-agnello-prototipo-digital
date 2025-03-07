
export interface Wine {
  id: number;
  name: string;
  image: string;
  price: number;
  rating: number;
  type: string;
  description: string;
  origin: string;
  year: number;
}

export const wines: Wine[] = [
  {
    id: 1,
    name: "Château Margaux Bordeaux",
    image: "/placeholder.svg",
    price: 89.99,
    rating: 4.8,
    type: "Red Wine",
    description: "This prestigious red wine from Bordeaux offers an elegant bouquet of dark fruits, cassis, and subtle oak notes. Full-bodied with silky tannins and a long, complex finish.",
    origin: "France",
    year: 2018
  },
  {
    id: 2,
    name: "Cloudy Bay Sauvignon Blanc",
    image: "/placeholder.svg",
    price: 34.99,
    rating: 4.5,
    type: "White Wine",
    description: "A vibrant and crisp Sauvignon Blanc with intense tropical fruit flavors, zesty lime, and a hint of herbaceousness. Refreshing acidity and a clean, mineral finish.",
    origin: "New Zealand",
    year: 2021
  },
  {
    id: 3,
    name: "Antinori Tignanello",
    image: "/placeholder.svg",
    price: 124.99,
    rating: 4.9,
    type: "Red Wine",
    description: "An iconic Super Tuscan blend showcasing rich cherries, plums, and spices. Sophisticated structure with velvety tannins and exquisite balance of fruit and oak.",
    origin: "Italy",
    year: 2019
  },
  {
    id: 4,
    name: "Veuve Clicquot Brut",
    image: "/placeholder.svg",
    price: 59.99,
    rating: 4.7,
    type: "Champagne",
    description: "Classic champagne with perfect harmony of fruit and toasty brioche notes. Fine bubbles and a creamy texture deliver elegance and finesse in every sip.",
    origin: "France",
    year: 2017
  },
  {
    id: 5,
    name: "Penfolds Grange",
    image: "/placeholder.svg",
    price: 499.99,
    rating: 4.9,
    type: "Red Wine",
    description: "Australia's most celebrated wine, offering concentrated blackberry, licorice, and dark chocolate notes. Powerful yet refined with exceptional aging potential.",
    origin: "Australia",
    year: 2016
  },
  {
    id: 6,
    name: "Caymus Napa Valley Cabernet",
    image: "/placeholder.svg",
    price: 79.99,
    rating: 4.6,
    type: "Red Wine",
    description: "A bold, luxurious Cabernet with rich black cherry, cocoa, and vanilla flavors. Smooth, velvety texture with opulent fruit and a long, satisfying finish.",
    origin: "USA",
    year: 2020
  },
  {
    id: 7,
    name: "Moët & Chandon Rosé Imperial",
    image: "/placeholder.svg",
    price: 64.99,
    rating: 4.5,
    type: "Champagne",
    description: "Elegant rosé champagne with fresh red berry notes and a touch of peach. Lively mousse and refreshing acidity balanced with subtle sweetness.",
    origin: "France",
    year: 2018
  },
  {
    id: 8,
    name: "Whispering Angel Rosé",
    image: "/placeholder.svg",
    price: 21.99,
    rating: 4.3,
    type: "Rosé Wine",
    description: "The world's most popular rosé, offering delicate strawberry and red berry flavors. Bone dry with crisp acidity and a refreshing, clean finish.",
    origin: "France",
    year: 2022
  }
];
