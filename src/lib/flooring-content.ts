// Long-form, SEO-targeted content for each flooring landing page.
// Rendered by src/pages/flooring/[slug].astro. Each entry is written to
// stand alone for a specific keyword cluster (e.g. "carpet Murphy NC").
//
// NOTE: Vinyl Plank and Vinyl Flooring are intentionally treated as two
// DIFFERENT products — different install, longevity and feel. Their copy and
// "related" links never pair them together as variants of the same thing.

export type FlooringDetail = {
  slug: string;
  name: string;
  metaTitle: string;
  metaDescription: string;
  heroEyebrow: string;
  heroHeading: string;
  heroLead: string;
  heroImage: string;
  heroImageAlt: string;
  priceNote: string;
  intro: string[];
  bestFor: string[];
  options: { name: string; desc: string }[];
  considerations: { title: string; body: string }[];
  localAngle: string;
  faqs: { question: string; answer: string }[];
  related: string[]; // slugs
};

export const FLOORING_DETAILS: Record<string, FlooringDetail> = {
  carpet: {
    slug: 'carpet',
    name: 'Carpet',
    metaTitle: 'Carpet in Murphy, NC | Plush, Berber & Pet-Friendly — Carpet Mart',
    metaDescription:
      'Shop carpet in Murphy, NC at Carpet Mart. Plush, textured, berber and stain-resistant pet-friendly carpet with professional installation. Free estimates — (828) 837-7491.',
    heroEyebrow: 'Soft, warm & quiet',
    heroHeading: 'Carpet that makes a mountain house feel like home',
    heroLead:
      'Warm underfoot on cold mornings, soft for kids and quiet on the stairs — carpet is still the most comfortable floor you can put in a bedroom. We carry a deep selection of name-brand carpet in Murphy, with styles and prices for every room and budget.',
    heroImage: '/images/showroom-1.avif',
    heroImageAlt: 'Rolls of carpet on display at Carpet Mart in Murphy, North Carolina',
    priceNote: 'Budget-friendly to premium — most rooms install in a day.',
    intro: [
      'Carpet remains the go-to floor for bedrooms, family rooms, stairs and basements because nothing else is as warm, soft and quiet. In the mountains of far Western North Carolina, that comfort matters — a carpeted bedroom is a lot kinder on bare feet in January than a hard floor.',
      'At Carpet Mart we have been selling and installing carpet in Murphy since 1973. We keep a large in-stock selection so you can feel the difference between a dense plush and a tough textured loop before you decide, and our team will help you match the right fiber and pad to how each room actually gets used.',
    ],
    bestFor: ['Bedrooms', 'Family & living rooms', 'Stairs & hallways', 'Finished basements', 'Home offices', 'Rental bedrooms'],
    options: [
      { name: 'Plush / Saxony', desc: 'A smooth, luxurious surface that shows footprints — beautiful in formal bedrooms and low-traffic rooms.' },
      { name: 'Textured', desc: 'The most popular all-purpose carpet. The twisted fibers hide footprints and vacuum marks, making it great for busy households.' },
      { name: 'Berber / Loop', desc: 'Dense looped fibers that stand up to heavy traffic — ideal for stairs, hallways, basements and rentals.' },
      { name: 'Pet & stain resistant', desc: 'Solution-dyed and treated fibers that resist stains, odor and wear. The smart pick for homes with dogs, cats and kids.' },
      { name: 'Polyester (PET)', desc: 'Soft, color-rich and budget-friendly. A comfortable choice for bedrooms that are not high traffic.' },
      { name: 'Nylon', desc: 'The most durable and resilient fiber. Worth it in rooms and stairs that see the most foot traffic.' },
    ],
    considerations: [
      { title: 'Don\'t skimp on the pad', body: 'A good carpet pad does more for comfort and lifespan than almost anything else. We\'ll recommend the right thickness and density for the room — a thick pad in a bedroom, a firmer pad on stairs.' },
      { title: 'Match the fiber to the traffic', body: 'A soft polyester is perfect for a guest bedroom but won\'t hold up in a hallway. Nylon and tight berber loops are the answer for stairs and high-traffic paths.' },
      { title: 'Think about pets and kids', body: 'If you have animals or young children, a solution-dyed, stain-resistant carpet is worth every penny — spills and accidents clean up instead of setting in.' },
    ],
    localAngle:
      'Whether you\'re re-carpeting a full-time home in Murphy, a rental in Andrews, or a getaway cabin near Hayesville or Blue Ridge, we\'ll measure, recommend and install with local crews who know mountain homes. Bring your room sizes by the showroom on US-64 and we\'ll put real numbers to it.',
    faqs: [
      { question: 'How much does carpet cost installed in Murphy, NC?', answer: 'Installed carpet pricing depends on the fiber, the pad and the square footage, plus any old-flooring removal. Budget textured carpet is very affordable, while premium nylon and pet-proof lines cost more. Bring your measurements in for a free, exact quote.' },
      { question: 'What is the best carpet for pets?', answer: 'A solution-dyed nylon or PET carpet with a built-in stain and moisture barrier is best for pets. The color goes all the way through the fiber, so it resists staining and cleans up well after accidents.' },
      { question: 'How long does carpet installation take?', answer: 'Most homes are installed in a single day once the carpet is in. We coordinate the measure, order and install so there\'s as little disruption as possible.' },
      { question: 'Can you install carpet on stairs?', answer: 'Yes — stairs are one of the most common carpet jobs we do. A tight textured or berber carpet over a firm pad wears best on steps.' },
    ],
    related: ['vinyl-plank', 'laminate', 'hardwood'],
  },

  'vinyl-plank': {
    slug: 'vinyl-plank',
    name: 'Vinyl Plank',
    metaTitle: 'Vinyl Plank Flooring in Murphy, NC | Waterproof LVP — Carpet Mart',
    metaDescription:
      'Waterproof vinyl plank flooring (LVP) in Murphy, NC that looks and feels like real hardwood. Rigid-core planks, professionally installed. Free quote — (828) 837-7491.',
    heroEyebrow: 'Premium & waterproof',
    heroHeading: 'Waterproof vinyl plank that looks like real wood',
    heroLead:
      'Vinyl plank is the floor everyone wants right now — and for good reason. These rigid, engineered planks are 100% waterproof, incredibly tough, and look and feel remarkably like real hardwood. It\'s a premium floor you can put in any room and not think twice about.',
    heroImage: '/images/showroom-3.avif',
    heroImageAlt: 'Vinyl plank flooring samples on display at Carpet Mart in Murphy, NC',
    priceNote: 'A premium, long-lasting floor — installs in most rooms of the home.',
    intro: [
      'Vinyl plank — often called luxury vinyl plank, or LVP — is a thick, rigid floor board built in layers around a stone- or wood-based core. That solid core is what sets it apart: it lays flat, feels substantial underfoot, and clicks or glues together into a floor that can last for decades. The printed wood-grain surface and embossed texture are so convincing most people can\'t tell it from real hardwood.',
      'Because it\'s fully waterproof and extremely durable, vinyl plank is the floor we recommend most often for living areas, kitchens and whole-home installs. At Carpet Mart we stock a wide range of plank thicknesses and wear layers in Murphy, and our crews handle the subfloor prep and installation that make the difference between a good plank floor and a great one.',
    ],
    bestFor: ['Living & family rooms', 'Kitchens', 'Whole-home installs', 'Basements', 'Cabins & lake homes', 'High-traffic areas'],
    options: [
      { name: 'Rigid core (SPC/WPC)', desc: 'A dense stone- or wood-plastic composite core that stays flat, feels solid underfoot and hides minor subfloor imperfections. The premium standard for plank flooring.' },
      { name: 'Click-lock floating', desc: 'Planks lock together and float over the subfloor — a clean, fast install that can often go right over existing hard flooring.' },
      { name: 'Glue-down plank', desc: 'A solid, permanent installation favored for large open spans and the highest-traffic areas.' },
      { name: 'Wood-look visuals', desc: 'Realistic oak, hickory and walnut looks in wide, long planks for an authentic hardwood appearance.' },
      { name: 'Attached pad', desc: 'Planks with a built-in underlayment add warmth and quiet underfoot — especially nice over concrete and in basements.' },
      { name: 'Thick wear layers', desc: 'A heavier clear wear layer for homes with pets, kids and heavy traffic, so the floor shrugs off scratches and dents.' },
    ],
    considerations: [
      { title: 'The wear layer drives durability', body: 'The clear top layer (measured in mils) is what resists scratches and dents. A thicker wear layer costs a little more and is well worth it for pets, kids and busy households.' },
      { title: 'Core thickness affects feel', body: 'A thicker rigid core feels more solid and quiet underfoot and bridges minor subfloor flaws better. We\'ll help you choose the right thickness for each room.' },
      { title: 'Subfloor prep still matters', body: 'Rigid planks are forgiving, but a clean, flat subfloor gives the best, quietest result. Our crews handle the prep so your floor performs for the long haul.' },
    ],
    localAngle:
      'From full-time homes in Murphy to lake places around Lake Chatuge and cabins toward Blue Ridge, vinyl plank is our most-recommended floor for the way people live up here. Come feel the planks in our US-64 showroom — the weight and texture are hard to appreciate from a photo.',
    faqs: [
      { question: 'Is vinyl plank really waterproof?', answer: 'Yes — quality rigid-core vinyl plank is 100% waterproof and won\'t swell or warp from water, which is why it works in kitchens, baths, basements and busy entries. We\'ll still recommend the right install method for the wettest rooms.' },
      { question: 'How long does vinyl plank last?', answer: 'A good rigid-core plank floor with a heavy wear layer can last 20 years or more in a home, even with pets and heavy traffic. It\'s one of the most durable floors you can buy.' },
      { question: 'Does vinyl plank feel like real wood?', answer: 'The best rigid-core planks have realistic wood-grain printing and embossed texture, and they feel solid and substantial underfoot — far closer to hardwood than older vinyl ever was.' },
      { question: 'Can vinyl plank go over my existing floor?', answer: 'Often, yes. Floating click-lock planks can frequently install over existing hard floors that are flat and sound. We\'ll check your subfloor during the free measure.' },
    ],
    related: ['hardwood', 'laminate', 'carpet'],
  },

  hardwood: {
    slug: 'hardwood',
    name: 'Hardwood',
    metaTitle: 'Hardwood Flooring in Murphy, NC | Solid & Engineered — Carpet Mart',
    metaDescription:
      'Solid and engineered hardwood flooring in Murphy, NC. Oak, hickory and maple that add lasting value to mountain homes and cabins. Free estimates — (828) 837-7491.',
    heroEyebrow: 'Timeless & lasting',
    heroHeading: 'Real hardwood that adds value for decades',
    heroLead:
      'Nothing else has the warmth, character and lasting value of a genuine wood floor. Solid and engineered hardwood can be refinished, lasts for generations, and is exactly the look buyers want in a Western North Carolina home or cabin.',
    heroImage: '/images/showroom-2.avif',
    heroImageAlt: 'Hardwood flooring samples and displays at Carpet Mart in Murphy, NC',
    priceNote: 'A lasting investment — refinishable for generations.',
    intro: [
      'Hardwood is the floor people fall in love with. It brings real warmth and texture to a room, it never goes out of style, and a solid wood floor can be sanded and refinished several times over its life — so it can outlast the house. For resale, few features say "quality" to a buyer like genuine hardwood.',
      'At Carpet Mart we help Murphy-area homeowners choose between solid and engineered hardwood and match the species, color and finish to their home. Engineered hardwood, with its stable plywood core, is often the smarter choice for our mountain climate and for installations over concrete or in basements.',
    ],
    bestFor: ['Living & dining rooms', 'Hallways & entries', 'Main-level open floor plans', 'Bedrooms', 'Cabins & lodges', 'Whole-home resale upgrades'],
    options: [
      { name: 'Solid hardwood', desc: 'A single solid piece of wood, typically 3/4" thick. Can be refinished many times — the longest-lasting option for main-level rooms.' },
      { name: 'Engineered hardwood', desc: 'A real-wood top layer over a stable plywood core. More resistant to humidity swings and can be installed over concrete or in basements.' },
      { name: 'Oak', desc: 'The classic American hardwood. Hard, takes stain beautifully, and the grain hides everyday wear.' },
      { name: 'Hickory', desc: 'One of the hardest domestic woods, with bold grain and character — excellent for busy homes and a rustic mountain look.' },
      { name: 'Maple', desc: 'A smooth, clean grain and a lighter, contemporary look. Very hard and durable.' },
    ],
    considerations: [
      { title: 'Solid vs. engineered', body: 'Solid wood refinishes more times; engineered handles humidity and concrete subfloors better. In our climate, engineered is often the practical winner — we\'ll walk you through it.' },
      { title: 'Humidity and the mountains', body: 'Wood moves with the seasons. We\'ll talk through acclimation and the right product for cabins that sit empty and swing in temperature and humidity.' },
      { title: 'Finish and hardness', body: 'A harder species and a tough factory finish stand up better to dogs, furniture and grit tracked in from the trail. We\'ll match the wood to your lifestyle.' },
    ],
    localAngle:
      'Hardwood is a favorite for lodges, full-time homes and higher-end cabins around Murphy, Andrews and Robbinsville. Stop by our US-64 showroom to compare species and finishes in person — samples never quite capture how a floor looks across a whole room.',
    faqs: [
      { question: 'Is hardwood a good choice for a mountain cabin?', answer: 'It can be beautiful in a cabin, but because cabins swing in temperature and humidity, engineered hardwood is often more forgiving than solid wood. We\'ll help you weigh the look you want against how the cabin is used.' },
      { question: 'What\'s the difference between solid and engineered hardwood?', answer: 'Solid hardwood is one solid piece of wood and can be refinished many times. Engineered hardwood is a real-wood veneer over a stable core; it resists humidity better and can go over concrete or in basements.' },
      { question: 'Can hardwood floors be refinished?', answer: 'Yes. Solid hardwood can be sanded and refinished several times over its life. Engineered floors can usually be refinished once or twice depending on the thickness of the wear layer.' },
      { question: 'How much does hardwood flooring cost?', answer: 'Hardwood costs more up front than vinyl or laminate, but it lasts for decades and adds resale value. Pricing varies by species and grade — bring your room sizes by for a quote.' },
    ],
    related: ['vinyl-plank', 'carpet', 'laminate'],
  },

  'vinyl-flooring': {
    slug: 'vinyl-flooring',
    name: 'Vinyl Flooring',
    metaTitle: 'Vinyl Flooring in Murphy, NC | Waterproof & Seamless — Carpet Mart',
    metaDescription:
      'Seamless, waterproof vinyl flooring in Murphy, NC — a practical, budget-friendly floor for bathrooms, laundry rooms, kitchens and rentals. Installed by Carpet Mart. Call (828) 837-7491.',
    heroEyebrow: 'Seamless & practical',
    heroHeading: 'Seamless, waterproof vinyl flooring',
    heroLead:
      'When you want a floor that simply doesn\'t mind water, vinyl flooring is hard to beat. It installs in wide, continuous pieces with few or no seams, so spills, splashes and mop water have nowhere to go. It\'s soft underfoot, easy to clean, and one of the most economical floors you can buy.',
    heroImage: '/images/vinyl-rolls-1.avif',
    heroImageAlt: 'Vinyl flooring stocked on racks at Carpet Mart in Murphy, North Carolina',
    priceNote: 'Economical, fully waterproof and quick to install.',
    intro: [
      'Vinyl flooring is the practical workhorse of the home. Because it comes in wide, continuous pieces rather than individual boards, a finished floor has few or no seams — which makes it genuinely waterproof and incredibly easy to keep clean. For bathrooms, laundry rooms, kitchens and utility spaces, that seamless, worry-free surface is exactly what you want.',
      'It\'s also one of the most budget-friendly floors we carry, with a soft, forgiving feel underfoot and a huge range of looks — from wood and stone to clean solid colors. At Carpet Mart we stock vinyl flooring in Murphy in several backings and widths, and our installers cut and fit it cleanly around every fixture for a tidy, lasting result.',
    ],
    bestFor: ['Bathrooms', 'Laundry rooms', 'Kitchens', 'Mudrooms & utility rooms', 'Rentals & flips', 'Basements'],
    options: [
      { name: 'Wood-look', desc: 'Warm oak and hickory looks that bring the appearance of a wood floor to wet rooms without any worry about moisture.' },
      { name: 'Tile & stone looks', desc: 'Convincing ceramic, slate and stone patterns — a clean, classic look for baths and laundries.' },
      { name: 'Solid & neutral colors', desc: 'Simple, hard-wearing colors that work in utility spaces, rentals and workshops.' },
      { name: 'Cushioned backing', desc: 'A padded backing adds a soft, forgiving feel underfoot and a little extra warmth — easy on the legs in a kitchen or laundry.' },
      { name: 'Fiberglass-backed', desc: 'A flatter, more dimensionally stable option that lies down clean and resists curling.' },
      { name: 'Loose-lay & glue-down', desc: 'Installed loose-lay or fully adhered depending on the room — both give you a smooth, sealed, easy-clean surface.' },
    ],
    considerations: [
      { title: 'Seamless means worry-free in wet rooms', body: 'Because there are few or no seams, water from a tub, shower or washer simply wipes up — there are no joints for it to seep into. That\'s why it\'s a favorite for bathrooms and laundries.' },
      { title: 'Soft and quiet underfoot', body: 'Vinyl flooring is more forgiving to stand on than a hard plank or tile and helps deaden sound — comfortable in rooms where you\'re on your feet.' },
      { title: 'A clean install is everything', body: 'The value of this floor comes from a tidy, well-fitted installation around tubs, toilets and cabinets. Our crews template and cut it for crisp edges and a sealed result.' },
    ],
    localAngle:
      'For the bathrooms, laundry rooms and rental turnovers all over Cherokee County and into North Georgia, vinyl flooring is a smart, economical pick that just works. Bring your room dimensions to our Murphy showroom and we\'ll help you choose a look and get it installed.',
    faqs: [
      { question: 'Is vinyl flooring waterproof?', answer: 'Yes. Because it installs in wide, continuous pieces with few or no seams, vinyl flooring is fully waterproof — ideal for bathrooms, laundry rooms and other spaces that see water.' },
      { question: 'Is vinyl flooring a good budget option?', answer: 'It\'s one of the most economical floors we carry, which makes it popular for rentals, laundry rooms, utility spaces and any project where you want a clean, waterproof floor without a big spend.' },
      { question: 'Is vinyl flooring comfortable to stand on?', answer: 'Yes — it has a softer, more forgiving feel than hard plank or tile, especially with a cushioned backing, so it\'s easy on your legs in kitchens and laundry rooms.' },
      { question: 'Can you install vinyl flooring in a bathroom?', answer: 'Absolutely — bathrooms are one of the most common rooms for it. Installed cleanly around the tub and toilet, the seamless surface keeps water out and wipes up in seconds.' },
    ],
    related: ['laminate', 'carpet', 'hardwood'],
  },

  laminate: {
    slug: 'laminate',
    name: 'Laminate',
    metaTitle: 'Laminate Flooring in Murphy, NC | Tough & Affordable — Carpet Mart',
    metaDescription:
      'Scratch-resistant laminate flooring in Murphy, NC. The look of hardwood for less, built for busy families and high-traffic rooms. Free estimates — (828) 837-7491.',
    heroEyebrow: 'Tough on a budget',
    heroHeading: 'The hardwood look for a fraction of the price',
    heroLead:
      'Laminate gives you a convincing wood look with a tough, scratch-resistant surface — at one of the lowest prices in flooring. For busy families, playrooms and high-traffic spaces where you want style without babying the floor, it\'s tough to beat.',
    heroImage: '/images/showroom-entrance.avif',
    heroImageAlt: 'Laminate and wood-look flooring near the entrance of Carpet Mart in Murphy',
    priceNote: 'Hard-wearing, easy to clean and budget-friendly.',
    intro: [
      'Modern laminate is a long way from the floors of twenty years ago. Today\'s laminate has deep, realistic wood textures and a tough wear layer that resists scratches, dents and fading — often better than real wood. For the look of hardwood at a budget price, laminate is a smart, practical choice.',
      'Carpet Mart stocks laminate flooring in Murphy in a wide range of wood looks and durability ratings, including water-resistant lines for kitchens and entries. We\'ll help you choose an AC traffic rating that matches your home and install it for you.',
    ],
    bestFor: ['Living & family rooms', 'Bedrooms', 'Hallways', 'Playrooms', 'Home offices', 'Rentals'],
    options: [
      { name: 'Classic wood-look', desc: 'Realistic oak, hickory and walnut visuals with embossed texture you can feel — the look of hardwood for less.' },
      { name: 'Water-resistant laminate', desc: 'Sealed edges and treated cores that handle spills and damp mopping, suitable for kitchens and entries.' },
      { name: 'High-AC-rating (commercial)', desc: 'Heavy-duty wear layers (AC4–AC5) for the busiest homes and light commercial use.' },
      { name: 'Attached pad', desc: 'Planks with built-in underlayment for a quieter, softer step and faster installation.' },
      { name: 'Wide-plank styles', desc: 'Longer, wider boards for a modern, open look that makes rooms feel larger.' },
    ],
    considerations: [
      { title: 'Check the AC rating', body: 'Laminate is graded AC1–AC5 for wear. A higher rating costs a little more but holds up far better in hallways, kitchens and homes with pets. We\'ll match the rating to your rooms.' },
      { title: 'Where moisture is a concern', body: 'Standard laminate resists spills if wiped up, but it isn\'t made for standing water. For bathrooms and laundry rooms, we\'ll usually point you to vinyl flooring or waterproof vinyl plank instead.' },
      { title: 'Floating floor comfort', body: 'Laminate floats over a pad, so it\'s comfortable and quiet when installed right. A quality underlayment makes a real difference underfoot.' },
    ],
    localAngle:
      'For full-time homes and rentals around Murphy, Andrews and Hayesville where the budget matters but the floor still needs to take a beating, laminate is one of our best values. See and walk on the samples in our showroom to feel the texture and quality for yourself.',
    faqs: [
      { question: 'Is laminate flooring waterproof?', answer: 'Standard laminate is water-resistant, not waterproof — it handles spills if wiped up promptly, but it isn\'t made for standing water. For bathrooms, laundry rooms and basements, vinyl flooring or waterproof vinyl plank is the better choice.' },
      { question: 'Is laminate cheaper than hardwood or vinyl plank?', answer: 'Laminate is one of the most affordable wood-look floors and typically costs less than hardwood or premium vinyl plank. The right choice comes down to how much waterproofing and durability you need.' },
      { question: 'How durable is laminate flooring?', answer: 'Very — a quality laminate with a high AC rating resists scratches, dents and fading better than many real-wood floors, which makes it great for kids, pets and high-traffic rooms.' },
      { question: 'Do you install laminate flooring?', answer: 'Yes. We measure, supply and professionally install laminate throughout the area, and we\'ll advise on the right underlayment and AC rating for each room.' },
    ],
    related: ['vinyl-plank', 'carpet', 'hardwood'],
  },
};

export const FLOORING_SLUGS = Object.keys(FLOORING_DETAILS);
