// Single source of truth for business info (NAP), navigation, and content data.
// Update SITE.url here AND `site` in astro.config.mjs before launch.

export const SITE = {
  name: 'Carpet Mart',
  legalName: 'Carpet Mart',
  tagline: 'Flooring Sales & Installation',
  url: 'https://carpetmartfloors.com',
  description:
    'Carpet Mart is a full-service flooring and cabinet store in Murphy, NC. We help homeowners choose, measure and professionally install carpet, vinyl plank, hardwood, vinyl flooring, laminate and cabinets — handling the whole project from first quote to final install for homes within 80 miles.',
  foundedYear: 1973,
  serviceRadiusMiles: 80,
  email: 'info@carpetmartfloors.com',
  phone: '(828) 837-7491',
  phoneHref: '+18288377491',
  address: {
    street: '1395 US Hwy 64 W',
    city: 'Murphy',
    region: 'NC',
    regionName: 'North Carolina',
    postalCode: '28906',
    country: 'US',
  },
  geo: {
    // Approximate — Murphy, NC. Refine with the exact storefront coordinates.
    latitude: 35.1056,
    longitude: -84.0735,
  },
  maps: 'https://maps.google.com/?q=Carpet+Mart+1395+US+Hwy+64+W+Murphy+NC+28906',
  hours: [
    { days: 'Monday – Friday', time: '8:00 AM – 5:30 PM' },
    { days: 'Saturday', time: '9:00 AM – 4:00 PM' },
    { days: 'Sunday', time: 'Closed' },
  ],
  // Machine-readable hours for schema.org
  hoursSpec: [
    { dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'], opens: '08:00', closes: '17:30' },
    { dayOfWeek: ['Saturday'], opens: '09:00', closes: '16:00' },
  ],
  priceRange: '$$',
} as const;

export const ADDRESS_LINE = `${SITE.address.street}, ${SITE.address.city}, ${SITE.address.region} ${SITE.address.postalCode}`;

export const YEARS_IN_BUSINESS = new Date().getFullYear() - SITE.foundedYear;

export const NAV_LINKS = [
  { href: '/flooring', label: 'Flooring' },
  { href: '/cabinets', label: 'Cabinets' },
  { href: '/about', label: 'About' },
  { href: '/meet-the-team', label: 'Team' },
  { href: '/areas-we-serve', label: 'Service Area' },
  { href: '/flooring-guides', label: 'Blog' },
  { href: '/contact', label: 'Contact' },
] as const;

export type FlooringCategory = {
  slug: string;
  name: string;
  short: string;
  blurb: string;
  image: string;
  imageAlt: string;
};

export const FLOORING_CATEGORIES: FlooringCategory[] = [
  {
    slug: 'carpet',
    name: 'Carpet',
    short: 'Soft, warm and quiet',
    blurb:
      'Plush, textured, berber and pet-friendly carpet for bedrooms, stairs and living rooms — soft underfoot and built for mountain winters.',
    image: '/images/showroom-1.avif',
    imageAlt: 'Rolls of carpet on display in the Carpet Mart showroom in Murphy, NC',
  },
  {
    slug: 'vinyl-plank',
    name: 'Vinyl Plank',
    short: 'Premium & waterproof',
    blurb:
      'Rigid-core vinyl plank that looks and feels like real hardwood — 100% waterproof, incredibly durable, and built to last for decades in any room.',
    image: '/images/showroom-3.avif',
    imageAlt: 'Vinyl plank flooring samples on display at Carpet Mart in Murphy, NC',
  },
  {
    slug: 'hardwood',
    name: 'Hardwood',
    short: 'Timeless & lasting',
    blurb:
      'Solid and engineered hardwood in oak, hickory and maple — the classic choice that adds lasting value to Western NC homes and cabins.',
    image: '/images/showroom-2.avif',
    imageAlt: 'Hardwood and flooring samples inside the Carpet Mart showroom',
  },
  {
    slug: 'vinyl-flooring',
    name: 'Vinyl Flooring',
    short: 'Seamless & practical',
    blurb:
      'Wide, seamless vinyl flooring that is completely waterproof and easy to clean — a practical, budget-friendly choice for baths, laundries and busy spaces.',
    image: '/images/vinyl-rolls-1.avif',
    imageAlt: 'Vinyl flooring stocked on racks at Carpet Mart in Murphy, North Carolina',
  },
  {
    slug: 'laminate',
    name: 'Laminate',
    short: 'Tough on a budget',
    blurb:
      'Scratch- and dent-resistant laminate that gives you the look of wood for less — a smart pick for busy families and high-traffic rooms.',
    image: '/images/showroom-entrance.avif',
    imageAlt: 'Flooring selection near the front entrance of Carpet Mart in Murphy',
  },
];

export type CabinetLine = {
  name: string;
  desc: string;
  image?: string;
  imageAlt?: string;
};

// Cabinets are a separate product/service line (not flooring).
// Images are placeholders in public/images/cabinets/ — swap in real photos
// using the same filenames.
export const CABINET_ROOMS: CabinetLine[] = [
  {
    name: 'Kitchen cabinets',
    desc: 'The heart of the project — base cabinets, wall cabinets, pantries and islands sized and laid out for how you actually cook and gather.',
    image: '/images/cabinets/kitchen.jpg',
    imageAlt: 'Kitchen cabinets from Carpet Mart in Murphy, NC',
  },
  {
    name: 'Bathroom vanities',
    desc: 'Single and double vanities with the storage, counters and sink options to fit primary baths, guest baths and powder rooms.',
    image: '/images/cabinets/bath.jpg',
    imageAlt: 'Bathroom vanity cabinets from Carpet Mart in Murphy, NC',
  },
  {
    name: 'Laundry & mudroom',
    desc: 'Hard-working storage, lockers, fold counters and utility cabinets that keep the busiest rooms in the house organized.',
    image: '/images/cabinets/laundry.jpg',
    imageAlt: 'Laundry and mudroom cabinets from Carpet Mart in Murphy, NC',
  },
  {
    name: 'Built-ins & more',
    desc: 'Office built-ins, entertainment walls, bars and bench seating to match the cabinetry throughout your home.',
    image: '/images/cabinets/built-ins.jpg',
    imageAlt: 'Custom built-in cabinetry from Carpet Mart in Murphy, NC',
  },
];

export const CABINET_TIERS: CabinetLine[] = [
  {
    name: 'Stock',
    desc: 'In-stock sizes and finishes for the fastest turnaround and the friendliest price — a great fit for rentals, flips and straightforward layouts.',
  },
  {
    name: 'Semi-custom',
    desc: 'A wide range of door styles, finishes, sizes and modifications to fit your space and taste without full-custom lead times.',
  },
  {
    name: 'Custom',
    desc: 'Built to your exact dimensions and design when a kitchen has unusual angles, special storage needs or a one-of-a-kind look.',
  },
];

export const CABINET_STYLES: CabinetLine[] = [
  { name: 'Shaker', desc: 'Clean, square-framed doors that suit nearly any home — easily our most-requested style.' },
  { name: 'Raised panel', desc: 'A traditional, dimensional door with timeless detail for classic kitchens.' },
  { name: 'Flat / slab', desc: 'Smooth, frameless doors for a modern, streamlined look.' },
  { name: 'Painted & stained', desc: 'From bright whites and soft grays to warm wood stains — finished to match your floors and counters.' },
];

// NOTE: the service-area location hierarchy (counties + towns) now lives in
// src/lib/service-areas.ts and powers the /areas-we-serve pages.

// NOTE: the service-area location hierarchy (counties + towns) now lives in
// src/lib/service-areas.ts and powers the /areas-we-serve pages.

export type TeamMember = {
  name: string;
  role: string;
  image: string;
  imageAlt: string;
  bio: string;
};

// Real team — the Cook family. Portrait photos are placeholders for now;
// drop real ones (portrait orientation, ~600x750) into public/images/team/
// using the same filenames. Bios are starter drafts — edit freely.
// Order matters: Jason is listed first; the founders Bill & Barbara are kept
// last (they show at the bottom when stacked, far right when in a row).
export const TEAM: TeamMember[] = [
  {
    name: 'Jason Cook',
    role: 'Store Lead',
    image: '/images/team/jason-cook.jpg',
    imageAlt: 'Jason Cook, store lead at Carpet Mart in Murphy, NC',
    bio: 'Bill and Barbara\'s son, Jason runs Carpet Mart day to day. He keeps orders, measures and installs on track and knows the current product inside and out — if you have a question about a floor or a project, he\'s your guy.',
  },
  {
    name: 'Jeff Cook',
    role: 'Sales',
    image: '/images/team/jeff-cook.jpg',
    imageAlt: 'Jeff Cook, sales at Carpet Mart in Murphy, NC',
    bio: 'Jeff helps customers find the right floor for their rooms, their budget and the way they live — no pressure, just straight answers.',
  },
  {
    name: 'Kevin Cook',
    role: 'Sales',
    image: '/images/team/kevin-cook.jpg',
    imageAlt: 'Kevin Cook, sales at Carpet Mart in Murphy, NC',
    bio: 'Kevin walks customers through their options and coordinates the details, from picking a product to setting an install date.',
  },
  {
    name: 'Bill Cook',
    role: 'Founder',
    image: '/images/team/bill-cook.jpg',
    imageAlt: 'Bill Cook, founder of Carpet Mart in Murphy, NC',
    bio: 'Bill founded Carpet Mart in 1973 and built its reputation over five decades. He has handed the day-to-day over to his son Jason, but he\'s still in every morning, keeping an eye on the business and lending a hand whenever something out of the ordinary comes up.',
  },
  {
    name: 'Barbara Cook',
    role: 'Founder',
    image: '/images/team/barbara-cook.jpg',
    imageAlt: 'Barbara Cook, founder of Carpet Mart in Murphy, NC',
    bio: 'Barbara co-founded Carpet Mart alongside Bill in 1973. She has stepped back from running the store — that\'s Jason\'s job now — but you\'ll still find her in most days, helping with the bigger decisions and the occasional tricky situation.',
  },
];

export type Testimonial = {
  quote: string;
  name: string;
  location: string;
  rating: number;
};

// Representative of the kind of feedback a 50-year local store earns.
// Swap with verified Google/Yelp reviews before launch.
export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      'They came out, measured the whole upstairs, helped us pick a carpet we actually love, and installed it a few days later. We never had to lift a finger.',
    name: 'Dale R.',
    location: 'Hayesville, NC',
    rating: 5,
  },
  {
    quote:
      'Put waterproof vinyl through our whole cabin before we listed it as a rental. Honest advice, no upsell, and the install crew left it spotless.',
    name: 'Marie & Tom K.',
    location: 'Blue Ridge, GA',
    rating: 5,
  },
  {
    quote:
      'Been coming here since the 90s. Same family, and they handle everything start to finish. They even remember what we put in our last house.',
    name: 'Wanda S.',
    location: 'Murphy, NC',
    rating: 5,
  },
];
