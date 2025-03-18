import images from "./images";

export const cards = [
  {
    id: 1,
    title: "Riqus Hotel",
    image: images.hotel_3,
    price: "$499",
    location: "Athens, Greece",
    category: "Hotel",
    rating: 4.5,
    description: "Riqus Hotel is a cozy hotel in the heart of Athens, offering modern rooms, excellent service, and close proximity to the city's main attractions. Perfect for tourists and business travelers."
  },
  {
    id: 2,
    title: "Panorama Villa",
    image: images.hotel_2,
    price: "$749",
    location: "Athens, Greece",
    category: "Villa",
    rating: 4.9,
    description: "A luxurious villa with a breathtaking coastal view. Features a private pool, spacious apartments, a terrace, and top-notch service. Ideal for a secluded retreat in Greece."
  },
  {
    id: 3,
    title: "Trebo Hotel",
    image: images.hotel_1,
    price: "$1399",
    location: "Budapest, Hungary",
    category: "Hotel",
    rating: 4.2,
    description: "An elegant hotel in the heart of Budapest. Guests can enjoy premium-class rooms, a restaurant serving Hungarian cuisine, and convenient access to the city's main attractions."
  },
  {
    id: 4,
    title: "Burj Al Arab",
    image: images.burj_al_arab,
    price: "$4999",
    location: "Dubai, UAE",
    category: "Hotel",
    rating: 4.9,
    description: "The iconic seven-star hotel, a symbol of luxury and comfort. Its unique architectural design, incredible service, and panoramic views of the Persian Gulf make it a dream destination for every traveler."
  },
  {
    id: 5,
    title: "The Plaza Hotel",
    image: images.plaza_hotel,
    price: "$3599",
    location: "New York, USA",
    category: "Hotel",
    rating: 4.8,
    description: "A world-famous five-star hotel in the heart of Manhattan. Elegant rooms, first-class service, historical heritage, and a prime location near Central Park."
  },
  {
    id: 6,
    title: "Four Seasons Bora Bora",
    image: images.four_seasons_bora_bora,
    price: "$4299",
    location: "Bora Bora, French Polynesia",
    category: "Villa",
    rating: 4.9,
    description: "The perfect place for a romantic getaway. Overwater villas, a crystal-clear lagoon, personalized service, and the unique atmosphere of a paradise on Earth."
  },
  {
    id: 7,
    title: "Villa Leopolda",
    image: images.villa_leopolda,
    price: "$5200",
    location: "Villefranche-sur-Mer, France",
    category: "Villa",
    rating: 5.0,
    description: "One of the most expensive villas in the world with a rich history, incredible gardens, panoramic views of the French Riviera, and a level of luxury comparable to royal palaces."
  },
];

export const category = [
  { title: "All", category: "All" },
  { title: "Hotels", category: "Hotel" },
  { title: "Villas", category: "Villa" },
  { title: "Studios", category: "Studio" },
  { title: "Townhouses", category: "Townhouse" },
];
