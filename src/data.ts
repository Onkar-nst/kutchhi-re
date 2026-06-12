// Folder of web-optimized event & food photos shipped in /public/photos
const PHOTOS = '/photos';

export const popularDishesData = [
  {
    name: 'Veg Thali',
    desc: 'A complete traditional feast featuring a variety of authentic Indian dishes',
    img: `${PHOTOS}/25.JPG`,
    featured: true
  },
  {
    name: 'Beverages',
    desc: 'Refreshing juices, mocktails, and drinks crafted for every occasion',
    img: `${PHOTOS}/6.JPG`
  },
  {
    name: 'Starters',
    desc: 'Delicious bite-sized appetizers to kickstart your dining experience',
    img: `${PHOTOS}/8.JPG`
  },
  {
    name: 'Soups & Salads',
    desc: 'Comforting soups and fresh, crisp salads for a balanced start',
    img: `${PHOTOS}/22.JPG`
  },
  {
    name: 'Main Course',
    desc: 'Rich and flavorful dishes forming the heart of your meal',
    img: `${PHOTOS}/12.JPG`
  },
  {
    name: 'Desserts',
    desc: 'Indulgent sweets and desserts to end your meal on a high note',
    img: `${PHOTOS}/9.JPG`
  },
  {
    name: 'Cuisine Counters',
    desc: 'Live counters featuring South Indian, BBQ, and global cuisines',
    img: `${PHOTOS}/3.JPG`
  }
];
const LIMIT = 20;

const formatItems = (items: string[]) => {
  if (items.length <= LIMIT) return items;
  return [...items.slice(0, LIMIT), `${items.length - LIMIT} more...`];
};

export const allMenuData = {
  'veg-thali': {
    pageTitle: 'Authentic Veg Thali',
    description: 'A glimpse into our meticulously crafted Gujarati thalis. For the complete culinary experience, our full brochure is available for download.',
    categories: [
      {
        title: 'Gujarati 1',
        items: [
          'Gulab Jamun', 'Khaman Khandvi', 'Puri, Fusi', 'Undhiyu', 
          'Raita / Kachumber', 'Papad', 'Dal Rice / Kadthi Khichadi', 'Chaash'
        ],
        image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=800&q=80'
      },
      {
        title: 'Gujarati 2',
        items: [
          'Moong Dal Halwa', 'Samosa', 'Puri / Phulka / Bakhari', 'Vaal / Chana', 
          'Bhindi / Tindora / Kobi', 'Raita / Kachumber', 'Papad', 'Dal Rice', 'Chaash'
        ],
        image: 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=800&q=80'
      }
    ]
  },

  beverages: {
    pageTitle: "Beverages & Starters",
    description: "Refreshing drinks and exciting starters to begin your event experience.",
    categories: [
      {
        title: "Juices",
        items: formatItems([
          "Kesariya Coconut",
          "Green Satin",
          "Muskmelon",
          "Litchi",
          "Red Indian",
          "Strawberry",
          "Pomegranate",
          "Black Grapes",
          "Strawberry Plum",
          "Twinkle Star",
          "Peach",
          "Plum",
          "Pineapple",
          "Peach Kiwi Pineapple",
          "White Feather",
          "Litchi Coconut Sitaphal",
          "Orange Juice",
          "Mango Juice",
          "Guava Juice",
          "Apple Juice",
          "Watermelon Juice",
          "Dragon Fruit Juice",
          "Kiwi Juice",
          "Mixed Fruit Juice"
        ]),
        image: ""
      },
      {
        title: "Mocktails",
        items: formatItems([
          "Virgin Mojito",
          "Blue Lagoon",
          "Pina Colada",
          "Strawberry Margarita",
          "Peach Ice Tea",
          "Green Apple Fizz",
          "Cranberry Punch",
          "Mint Cooler",
          "Lemon Ice Tea",
          "Berry Blast",
          "Orange Sparkle",
          "Watermelon Mojito",
          "Guava Chilli",
          "Pineapple Punch",
          "Kiwi Delight",
          "Rose Cooler",
          "Aam Panna",
          "Jaljeera",
          "Masala Soda",
          "Cola Float",
          "Energy Blast",
          "Tropical Mix"
        ]),
        image: ""
      }
    ]
  },

  starters: {
    pageTitle: "Starters",
    description: "Delicious bite-sized starters to kick off your feast.",
    categories: [
      {
        title: "Veg Starters",
        items: formatItems([
          "Paneer Tikka",
          "Paneer Hariyali",
          "Paneer Achari",
          "Hara Bhara Kabab",
          "Veg Seekh Kabab",
          "Dahi Ke Kabab",
          "Cheese Balls",
          "Spring Rolls",
          "Veg Manchurian",
          "Chilli Paneer",
          "Crispy Corn",
          "Stuffed Mushrooms",
          "Baby Corn Fry",
          "Aloo Tikki",
          "Corn Cheese Balls",
          "Veg Cutlet",
          "Schezwan Paneer",
          "Dragon Paneer",
          "Chilli Mushroom",
          "Tandoori Broccoli",
          "Veg Nuggets",
          "Peri Peri Paneer"
        ]),
        image: ""
      }
    ]
  },

  soups: {
    pageTitle: "Soups & Salads",
    description: "Warm soups and refreshing salads crafted with perfection.",
    categories: [
      {
        title: "Soups",
        items: formatItems([
          "Tomato Soup",
          "Sweet Corn Soup",
          "Hot & Sour Soup",
          "Manchow Soup",
          "Lemon Coriander Soup",
          "Veg Clear Soup",
          "Cream of Mushroom",
          "Cream of Tomato",
          "Broccoli Soup",
          "Spinach Soup",
          "Pumpkin Soup",
          "Thai Coconut Soup",
          "Veg Noodle Soup",
          "Corn Spinach Soup",
          "Garlic Soup",
          "Cheese Soup",
          "Carrot Ginger Soup",
          "Mexican Soup",
          "Italian Soup",
          "Asian Soup",
          "Herbal Soup"
        ]),
        image: ""
      },
      {
        title: "Salads",
        items: formatItems([
          "Green Salad",
          "Russian Salad",
          "Pasta Salad",
          "Fruit Salad",
          "Sprout Salad",
          "Caesar Salad",
          "Coleslaw",
          "Corn Salad",
          "Greek Salad",
          "Cucumber Salad",
          "Beetroot Salad",
          "Carrot Salad",
          "Apple Walnut Salad",
          "Mexican Salad",
          "Chickpea Salad",
          "Quinoa Salad",
          "Kachumber",
          "Aloo Chana Salad",
          "Paneer Salad",
          "Tropical Salad",
          "Dry Fruit Salad"
        ]),
        image: ""
      }
    ]
  },

  mainCourse: {
    pageTitle: "Main Course",
    description: "Rich and flavorful main course dishes for a complete dining experience.",
    categories: [
      {
        title: "Indian Sabzi",
        items: formatItems([
          "Paneer Butter Masala",
          "Paneer Tikka Masala",
          "Kadai Paneer",
          "Shahi Paneer",
          "Palak Paneer",
          "Mix Veg",
          "Veg Kolhapuri",
          "Veg Handi",
          "Malai Kofta",
          "Dum Aloo",
          "Jeera Aloo",
          "Bhindi Masala",
          "Aloo Gobi",
          "Chole Masala",
          "Rajma",
          "Dal Tadka",
          "Dal Makhani",
          "Gujarati Kadhi",
          "Undhiyu",
          "Sev Tamatar",
          "Baingan Bharta",
          "Methi Malai Mutter"
        ]),
        image: ""
      },
      {
        title: "Rice & Biryani",
        items: formatItems([
          "Plain Rice",
          "Jeera Rice",
          "Veg Pulao",
          "Kashmiri Pulao",
          "Veg Biryani",
          "Hyderabadi Biryani",
          "Paneer Biryani",
          "Peas Pulao",
          "Corn Pulao",
          "Schezwan Rice",
          "Fried Rice",
          "Curd Rice",
          "Lemon Rice",
          "Coconut Rice",
          "Tomato Rice",
          "Masala Rice",
          "Veg Khichdi",
          "Dal Khichdi",
          "Gujarati Khichdi",
          "Tawa Pulao",
          "Burnt Garlic Rice"
        ]),
        image: ""
      }
    ]
  },

  desserts: {
    pageTitle: "Sweets & Desserts",
    description: "End your meal with delightful sweets and desserts.",
    categories: [
      {
        title: "Indian Sweets",
        items: formatItems([
          "Gulab Jamun",
          "Rasmalai",
          "Rasgulla",
          "Jalebi",
          "Malpua",
          "Kaju Katli",
          "Motichoor Ladoo",
          "Besan Ladoo",
          "Peda",
          "Barfi",
          "Milk Cake",
          "Kalakand",
          "Shrikhand",
          "Amrakhand",
          "Fruit Shrikhand",
          "Moong Dal Halwa",
          "Gajar Halwa",
          "Doodhi Halwa",
          "Badam Halwa",
          "Anjeer Halwa",
          "Pineapple Halwa",
          "Dry Fruit Halwa"
        ]),
        image: ""
      },
      {
        title: "Desserts",
        items: formatItems([
          "Ice Cream",
          "Brownie",
          "Chocolate Mousse",
          "Fruit Custard",
          "Pudding",
          "Pastry",
          "Cheesecake",
          "Tiramisu",
          "Waffles",
          "Pancakes",
          "Falooda",
          "Kulfi",
          "Rabdi",
          "Ice Cream Sundae",
          "Chocolate Fountain",
          "Donuts",
          "Cupcakes",
          "Macarons",
          "Choco Lava Cake",
          "Fruit Tart",
          "Mango Delight"
        ]),
        image: ""
      }
    ]
  },

  cuisineCounters: {
    pageTitle: "Cuisine Counters",
    description: "Live counters serving global cuisines.",
    categories: [
      {
        title: "South Indian",
        items: formatItems([
          "Dosa",
          "Masala Dosa",
          "Mysore Dosa",
          "Rava Dosa",
          "Idli",
          "Vada",
          "Uttapam",
          "Appe",
          "Upma",
          "Pongal",
          "Curd Rice",
          "Lemon Rice",
          "Coconut Rice",
          "Tomato Rice",
          "Medu Vada",
          "Mini Idli",
          "Cheese Dosa",
          "Paneer Dosa",
          "Butter Dosa",
          "Onion Uttapam",
          "Set Dosa"
        ]),
        image: ""
      },
      {
        title: "Barbeque",
        items: formatItems([
          "Paneer Tikka",
          "Paneer Hariyali",
          "Paneer Achari",
          "Tandoori Aloo",
          "Baby Corn",
          "Mushroom",
          "Pineapple",
          "Veg Seekh",
          "Cheese Corn",
          "Grilled Veggies",
          "Peri Peri Paneer",
          "Malai Paneer",
          "BBQ Corn",
          "Stuffed Paneer",
          "Spicy Mushroom",
          "Tandoori Broccoli",
          "BBQ Pineapple",
          "BBQ Potato",
          "BBQ Capsicum",
          "BBQ Tomato",
          "BBQ Zucchini"
        ]),
        image: ""
      }
    ]
  }
};

export const servicesData = [
  {
    id: "wedding",
    title: "Wedding Services",
    description: "Make your special day truly memorable with our comprehensive wedding catering. We go places others wouldn't to ensure your feast is perfect.",
    fullDescription: "Your wedding day is a once-in-a-lifetime event, and we believe the food should reflect that. From traditional Gujarati feasts to contemporary fusion cuisines, we provide a tailored catering experience that will leave your guests in awe.",
    image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&q=80",
    link: "/services/wedding",
    gridSpan: "md:col-span-7",
    features: ["Custom Menu Design", "Live Counter Experience", "Full Service Staff", "Exquisite Table Settings"]
  },
  {
    id: "corporate",
    title: "Corporate",
    description: "Elevate your corporate events with premium catering designed to impress clients and colleagues.",
    fullDescription: "Whether it's a high-stakes board meeting, a product launch, or a company-wide celebration, our corporate catering services deliver professionalism and flavor in equal measure.",
    image: "https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&q=80",
    link: "/services/corporate",
    gridSpan: "md:col-span-5",
    features: ["Breakfast & Lunch Boxes", "Themed Coffee Breaks", "Executive Dining", "Gala Dinner Setup"]
  },
  {
    id: "sangeet",
    title: "Sangeet",
    description: "Vibrant mocktails, festive bites and dazzling dessert tables that keep the celebration dancing all night.",
    fullDescription: "A sangeet calls for food as lively as the music. We bring colourful mocktail bars, roaming snacks and interactive dessert stations that match the energy of every beat — keeping your guests delighted from the first dhol to the last dance.",
    image: `${PHOTOS}/7.JPG`,
    link: "/services/sangeet",
    gridSpan: "md:col-span-5",
    features: ["Signature Mocktail Bar", "Live Chaat & Snacks", "Dessert Stations", "Roaming Service"]
  },
  {
    id: "buffet",
    title: "Buffet Catering",
    description: "A grand spread of authentic Indian delicacies, offering a diverse and rich culinary experience for all your guests.",
    fullDescription: "Our buffet catering is a grand celebration of Indian culinary heritage. We offer a wide variety of dishes, from regional specialties to popular favorites, all served with the warmth and hospitality Kutchhi Caterers is known for.",
    image: `${PHOTOS}/11.JPG`,
    link: "/services/buffet",
    gridSpan: "md:col-span-7",
    features: ["Authentic Gujarati Thali", "Multi-Cuisine Options", "Elegant Buffet Setup", "Hygiene & Safety Focused"]
  }
];

/* ────────────────────────────────────────────────
   HERO SLIDER — real event photos from /public
   ──────────────────────────────────────────────── */
export const heroSlides = [
  `${PHOTOS}/10.JPG`,
  `${PHOTOS}/4.JPG`,
  `${PHOTOS}/3.JPG`,
  `${PHOTOS}/9.JPG`,
];

/* ────────────────────────────────────────────────
   VIEWABLE MENU PDFs (shipped in /public)
   encodeURI handles the spaces / parentheses in names
   ──────────────────────────────────────────────── */
const PDF_DIR = '/drive-download-20260611T075748Z-3-001';

export const menuPdfs = [
  {
    title: 'Beverages & Starters',
    desc: 'Fresh juices, mocktails and signature starters.',
    file: encodeURI(`${PDF_DIR}/beverages and starters 01_compressed (1).pdf`),
    thumb: '/menu-thumbs/beverages-starters.png',
  },
  {
    title: 'Soups & Salads',
    desc: 'Warm soups and crisp, refreshing salads.',
    file: encodeURI(`${PDF_DIR}/Soups and salads_compressed (1).pdf`),
    thumb: '/menu-thumbs/soups-salads.png',
  },
  {
    title: 'Cuisine Counters I',
    desc: 'Live counters serving global cuisines.',
    file: encodeURI(`${PDF_DIR}/cuisine counters - 1_compressed (1).pdf`),
    thumb: '/menu-thumbs/cuisine-counters-1.png',
  },
  {
    title: 'Cuisine Counters II',
    desc: 'More live stations and chef specials.',
    file: encodeURI(`${PDF_DIR}/Cuisine counters 2_compressed (1).pdf`),
    thumb: '/menu-thumbs/cuisine-counters-2.png',
  },
  {
    title: 'Sweets & Desserts',
    desc: 'Indian sweets and indulgent desserts.',
    file: encodeURI(`${PDF_DIR}/Sweets and desserts_compressed (1).pdf`),
    thumb: '/menu-thumbs/sweets-desserts.png',
  },
];

/* ────────────────────────────────────────────────
   YOUTUBE SHORTS — 4 phone mockups on the homepage
   TODO: replace these with the real @shahcaterers short
   URLs/IDs later. Each entry may be a full URL OR a bare ID.
   ──────────────────────────────────────────────── */
export const youtubeShorts = [
  'https://www.youtube.com/shorts/TmpZ6S7Bj6k',
  'https://www.youtube.com/shorts/3wShr5Q6EqM',
  'https://www.youtube.com/shorts/qiZ9cZdOxM8',
  'https://www.youtube.com/shorts/p3LXU9Ah7Cg',
];

export const youtubeChannelUrl = 'https://www.youtube.com/@shahcaterers';

// Accepts a full youtube/shorts/watch URL or a bare 11-char ID.
export const youtubeShortId = (urlOrId: string): string => {
  if (!urlOrId) return '';
  if (!urlOrId.includes('/') && !urlOrId.includes('?')) return urlOrId;
  const m = urlOrId.match(/(?:shorts\/|v=|youtu\.be\/|embed\/)([A-Za-z0-9_-]{11})/);
  return m ? m[1] : urlOrId;
};

/* ────────────────────────────────────────────────
   EVENT GALLERY — shown inside each Service detail page
   Three tabs: Wedding / Sangeet / Corporate (default Wedding)
   Each: title + description + detail + 3 stats + 10 captioned photos
   ──────────────────────────────────────────────── */
export interface GalleryPhoto { src: string; caption: string; }
export interface GalleryCategory {
  label: string;
  title: string;
  description: string;
  detail: string;
  stats: { value: string; label: string }[];
  photos: GalleryPhoto[];
}

export const galleryData: Record<'wedding' | 'sangeet' | 'corporate', GalleryCategory> = {
  wedding: {
    label: 'Wedding',
    title: 'Weddings',
    description:
      'From the mandap to the reception, we craft royal Gujarati spreads, elegant live counters and white-glove service that turn your big day into a feast your guests remember for years.',
    detail:
      'Bespoke multi-cuisine menus, themed live counters, custom dessert tables and a dedicated service team — tailored to celebrations of every scale, from intimate gatherings to grand thousand-guest affairs.',
    stats: [
      { value: '500+', label: 'Weddings Catered' },
      { value: '50k+', label: 'Happy Guests' },
      { value: '∞', label: 'Memories' },
    ],
    photos: [
      { src: `${PHOTOS}/1.jpg`, caption: 'Live buffet service in full flow' },
      { src: `${PHOTOS}/10.JPG`, caption: 'Sunset counter against a palace backdrop' },
      { src: `${PHOTOS}/3.JPG`, caption: 'Indian Mints — signature dessert station' },
      { src: `${PHOTOS}/4.JPG`, caption: 'Floral-draped soup stations' },
      { src: `${PHOTOS}/11.JPG`, caption: 'Copper handis at the grand spread' },
      { src: `${PHOTOS}/13.JPG`, caption: 'Hashbrown in wasabi with lotus stem' },
      { src: `${PHOTOS}/12.JPG`, caption: 'Shaam Savera — chef’s special' },
      { src: `${PHOTOS}/25.JPG`, caption: 'Comforting dal-chawal thali' },
      { src: `${PHOTOS}/17.JPG`, caption: 'Dry-fruit baklava rolls' },
      { src: `${PHOTOS}/2.JPG`, caption: 'From The Farm — themed counter' },
    ],
  },
  sangeet: {
    label: 'Sangeet',
    title: 'Sangeet Nights',
    description:
      'Playful mocktails, festive street-food bites and dazzling dessert tables, served by roaming staff who keep the energy high and the dance floor full all night long.',
    detail:
      'Signature mocktail bars, live chaat and tikka stations, interactive kulfi and jalebi carts, plus roaming service designed to match the rhythm of every beat — from the first dhol to the last dance.',
    stats: [
      { value: '300+', label: 'Sangeet Nights' },
      { value: '80+', label: 'Mocktail Recipes' },
      { value: '24/7', label: 'Energy' },
    ],
    photos: [
      { src: `${PHOTOS}/5.JPG`, caption: 'Blue lagoon mocktails' },
      { src: `${PHOTOS}/7.JPG`, caption: 'Berry coolers with a twist' },
      { src: `${PHOTOS}/6.JPG`, caption: 'Fresh-pressed citrus juices' },
      { src: `${PHOTOS}/18.JPG`, caption: 'Forest berry toast' },
      { src: `${PHOTOS}/9.JPG`, caption: 'Very Berry plated dessert' },
      { src: `${PHOTOS}/21.JPG`, caption: 'Chocolate & berry indulgence' },
      { src: `${PHOTOS}/26.JPG`, caption: 'Modak on a banana leaf' },
      { src: `${PHOTOS}/19.JPG`, caption: 'Dark chocolate dessert plating' },
      { src: `${PHOTOS}/8.JPG`, caption: 'Steamed dumplings with dips' },
      { src: `${PHOTOS}/24.JPG`, caption: 'Grilled pesto bites' },
    ],
  },
  corporate: {
    label: 'Corporate',
    title: 'Corporate Events',
    description:
      'Refined plating, curated global counters and impeccable timing — catering that reflects your brand and impresses clients, partners and teams at every scale of event.',
    detail:
      'Executive breakfast and lunch boxes, themed coffee breaks, plated gala dinners and branded setups, all delivered with the logistics precision corporate occasions demand.',
    stats: [
      { value: '300+', label: 'Corporate Events' },
      { value: '100+', label: 'Partner Companies' },
      { value: '5★', label: 'Service Rating' },
    ],
    photos: [
      { src: `${PHOTOS}/13.JPG`, caption: 'Hashbrown in wasabi with lotus stem' },
      { src: `${PHOTOS}/14.JPG`, caption: 'Pomodoro spaghetti' },
      { src: `${PHOTOS}/15.JPG`, caption: 'Mediterranean orzo salad' },
      { src: `${PHOTOS}/22.JPG`, caption: 'Garden vegetable soup' },
      { src: `${PHOTOS}/23.JPG`, caption: 'Creamy tomato bisque' },
      { src: `${PHOTOS}/27.JPG`, caption: 'Baked savoury soufflé cups' },
      { src: `${PHOTOS}/16.JPG`, caption: 'Pan-Asian dumpling platter' },
      { src: `${PHOTOS}/8.JPG`, caption: 'Steamed momos with trio of dips' },
      { src: `${PHOTOS}/3.JPG`, caption: 'Elegant live dessert counter' },
      { src: `${PHOTOS}/12.JPG`, caption: 'Shaam Savera — signature curry' },
    ],
  },
};
