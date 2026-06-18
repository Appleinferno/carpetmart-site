// Location hierarchy for local SEO: counties (parent pages) → towns (child pages).
// Every town has genuinely unique copy referencing real local geography — never
// templated "flooring in {town}" boilerplate (which Google penalizes as doorway pages).
//
// VERIFY before launch: local details (lakes, parks, communities) are written from
// general knowledge of the area; confirm they're accurate for your marketing.

export type Town = {
  name: string;
  slug: string; // includes state, e.g. "murphy-nc"
  state: 'NC' | 'GA' | 'TN';
  intro: string; // 2-4 sentences, unique, location-specific
  highlights: string[]; // local landmarks / communities we reference
};

export type County = {
  name: string;
  slug: string; // e.g. "cherokee-county-nc"
  state: 'NC' | 'GA' | 'TN';
  stateName: string;
  seat: string;
  overview: string;
  driveNote: string;
  towns: Town[];
};

export const COUNTIES: County[] = [
  {
    name: 'Cherokee County',
    slug: 'cherokee-county-nc',
    state: 'NC',
    stateName: 'North Carolina',
    seat: 'Murphy',
    overview:
      'Cherokee County is our home turf. Our showroom sits on US-64 in Murphy, the county seat, which means we know these homes — from historic downtown houses to new builds and weekend cabins tucked up the gravel roads. We sell and install every type of flooring here, usually with the shortest turnaround of anywhere we serve.',
    driveNote: 'Minutes from the showroom — same-week measures are common.',
    towns: [
      {
        name: 'Murphy',
        slug: 'murphy-nc',
        state: 'NC',
        intro:
          'Murphy is where we\'ve been for over 50 years, right where the Hiwassee and Valley rivers meet. We\'ve floored everything in town from the old homes around the courthouse square to lake places out toward Hanging Dog and new construction near the Valley River. Because you\'re close, we can often measure, order and install faster here than anywhere.',
        highlights: ['Downtown courthouse square', 'Hanging Dog & Hiwassee Lake', 'Valley River corridor'],
      },
      {
        name: 'Andrews',
        slug: 'andrews-nc',
        state: 'NC',
        intro:
          'Andrews sits in the broad Valley River valley between the Snowbird and Valley River mountains, a short run up US-19/74 from the showroom. We handle a lot of full-time homes and rental cabins here, and vinyl plank is a popular pick for the valley\'s older houses and the cabins up toward Junaluska.',
        highlights: ['Andrews Valley', 'US-19/74 corridor', 'Cabins toward Nantahala'],
      },
      {
        name: 'Marble',
        slug: 'marble-nc',
        state: 'NC',
        intro:
          'Marble is the small community between Murphy and Andrews that gave the area its name from the local quarrying history. It\'s an easy stop for our crews on the way up the valley, and we install everything from carpet in farmhouses to vinyl plank and vinyl flooring in updated homes along US-19/74.',
        highlights: ['Valley River', 'US-19/74', 'Regal / Marble area'],
      },
      {
        name: 'Brasstown',
        slug: 'brasstown-nc',
        state: 'NC',
        intro:
          'Brasstown straddles the Cherokee–Clay county line and is best known as the home of the John C. Campbell Folk School. The mix of craftsman cottages, cabins and homesteads here calls for everything from warm hardwood to easy-care vinyl, and we\'re glad to bring samples out to this corner of the mountains.',
        highlights: ['John C. Campbell Folk School', 'Cherokee–Clay county line'],
      },
    ],
  },
  {
    name: 'Clay County',
    slug: 'clay-county-nc',
    state: 'NC',
    stateName: 'North Carolina',
    seat: 'Hayesville',
    overview:
      'Clay County wraps around Lake Chatuge and the Hiwassee River, a quick drive east of Murphy on US-64. Between the lake homes, the historic square in Hayesville and the cabins up in the hills, we install a lot of vinyl plank and vinyl flooring here — floors built to handle lake life, wet boots and seasonal use.',
    driveNote: 'About 20–30 minutes east on US-64.',
    towns: [
      {
        name: 'Hayesville',
        slug: 'hayesville-nc',
        state: 'NC',
        intro:
          'Hayesville is the Clay County seat, set just above Lake Chatuge with one of the prettiest downtown squares in the mountains. We do a steady business in lake homes around Chatuge and Jackrabbit Mountain — where vinyl plank and vinyl flooring earn their keep — as well as carpet and hardwood in the historic homes near the square.',
        highlights: ['Lake Chatuge', 'Jackrabbit Mountain', 'Historic town square'],
      },
      {
        name: 'Warne',
        slug: 'warne-nc',
        state: 'NC',
        intro:
          'Warne is a quiet Clay County community down toward the Georgia line and the lower end of Lake Chatuge. It\'s mostly homes, small farms and lake places, and we regularly bring flooring out this way — vinyl and laminate are popular for their durability in homes that see seasonal use.',
        highlights: ['Lower Lake Chatuge', 'NC–GA line', 'Shooting Creek nearby'],
      },
    ],
  },
  {
    name: 'Graham County',
    slug: 'graham-county-nc',
    state: 'NC',
    stateName: 'North Carolina',
    seat: 'Robbinsville',
    overview:
      'Graham County is some of the most remote, beautiful country we serve — home to Lake Santeetlah, the Cherohala Skyway and Joyce Kilmer Memorial Forest. It\'s a longer drive, but we make the trip for the many cabins and lake homes here, where waterproof, low-maintenance flooring is almost always the right call.',
    driveNote: 'A scenic haul north — worth it for the cabins and lake homes.',
    towns: [
      {
        name: 'Robbinsville',
        slug: 'robbinsville-nc',
        state: 'NC',
        intro:
          'Robbinsville is the Graham County seat, a basecamp for Lake Santeetlah, the Cherohala Skyway and the Tail of the Dragon. Tourism and rentals drive a lot of the flooring work here, and we lean toward thick-wear-layer vinyl plank that can take wet boots, dogs and constant guest turnover.',
        highlights: ['Lake Santeetlah', 'Cherohala Skyway', 'Joyce Kilmer Forest'],
      },
      {
        name: 'Fontana',
        slug: 'fontana-nc',
        state: 'NC',
        intro:
          'Up around Fontana Dam and Fontana Lake, it\'s cabins, vacation rentals and getaways tucked into the edge of the Smokies. These places sit empty through cold snaps and fill up in season, so we steer owners toward waterproof, dimensionally stable floors that won\'t mind the swings in temperature and humidity.',
        highlights: ['Fontana Lake & Dam', 'Fontana Village', 'Smokies gateway'],
      },
    ],
  },
  {
    name: 'Macon County',
    slug: 'macon-county-nc',
    state: 'NC',
    stateName: 'North Carolina',
    seat: 'Franklin',
    overview:
      'Macon County runs from the gem-mining town of Franklin down through the Nantahala Gorge. It\'s a broad mix — in-town homes, river cabins and mountain retreats — and we cover it with the full range of flooring, matching the floor to whether a place is lived in year-round or rented by the weekend.',
    driveNote: 'East toward Franklin and the Nantahala Gorge.',
    towns: [
      {
        name: 'Franklin',
        slug: 'franklin-nc',
        state: 'NC',
        intro:
          'Franklin, the Macon County seat, is known as a gem-mining town and sits along the Little Tennessee River. We work on a real range of homes here, from established neighborhoods in town to newer builds on the ridges — carpet and hardwood inside, and waterproof vinyl plank wherever moisture and traffic are a concern.',
        highlights: ['Little Tennessee River', 'Gem mines', 'Downtown Franklin'],
      },
      {
        name: 'Nantahala',
        slug: 'nantahala-nc',
        state: 'NC',
        intro:
          'The Nantahala area is whitewater country — the gorge, the river and the rafting outposts draw visitors all season, and the cabins above them stay busy. For rental owners here, we almost always recommend tough, waterproof vinyl plank that shrugs off wet gear, river mud and back-to-back guests.',
        highlights: ['Nantahala Gorge & River', 'Whitewater rentals', 'Mountain cabins'],
      },
    ],
  },
  {
    name: 'Union County',
    slug: 'union-county-ga',
    state: 'GA',
    stateName: 'Georgia',
    seat: 'Blairsville',
    overview:
      'Just over the state line, Union County, Georgia is an easy run south from Murphy on US-19. Between Lake Nottely, Vogel State Park and Brasstown Bald — Georgia\'s highest point — there\'s a steady flow of cabins, lake homes and full-time residents, and plenty of folks who find it\'s worth the short drive to shop with us.',
    driveNote: 'About 45 minutes south on US-19.',
    towns: [
      {
        name: 'Blairsville',
        slug: 'blairsville-ga',
        state: 'GA',
        intro:
          'Blairsville is the Union County seat, ringed by Lake Nottely, Vogel State Park and Brasstown Bald. It\'s one of our busiest Georgia communities — we install plenty of waterproof vinyl plank in lake homes and rentals, and hardwood and carpet in the full-time houses around town and out toward Suches.',
        highlights: ['Lake Nottely', 'Vogel State Park', 'Brasstown Bald'],
      },
      {
        name: 'Suches',
        slug: 'suches-ga',
        state: 'GA',
        intro:
          'Suches calls itself the "Valley Above the Clouds," a high, remote pocket of Union County popular with riders, hikers and cabin owners. Homes up here see real mountain weather, so we point owners toward durable, stable flooring — vinyl plank and quality laminate that hold up to the elevation and seasonal use.',
        highlights: ['Valley Above the Clouds', 'Appalachian Trail access', 'Lake Winfield Scott'],
      },
    ],
  },
  {
    name: 'Towns County',
    slug: 'towns-county-ga',
    state: 'GA',
    stateName: 'Georgia',
    seat: 'Hiawassee',
    overview:
      'Towns County, Georgia shares Lake Chatuge with North Carolina and centers on Hiawassee and Young Harris. Lake living defines a lot of the flooring work here — waterproof, easy-care surfaces for homes that host family all summer — and we\'re a short, familiar drive away.',
    driveNote: 'A short drive south around Lake Chatuge.',
    towns: [
      {
        name: 'Hiawassee',
        slug: 'hiawassee-ga',
        state: 'GA',
        intro:
          'Hiawassee sits right on the Georgia side of Lake Chatuge and hosts the Georgia Mountain Fairgrounds. With so many lake homes and seasonal places, vinyl plank and vinyl flooring are the workhorses here, though we install plenty of cozy carpet in the bedrooms of full-time homes too.',
        highlights: ['Lake Chatuge', 'Georgia Mountain Fairgrounds', 'Bell Mountain'],
      },
      {
        name: 'Young Harris',
        slug: 'young-harris-ga',
        state: 'GA',
        intro:
          'Young Harris is a college town in the shadow of Brasstown Bald, home to Young Harris College and the Brasstown Valley resort area. We see a mix of campus-area rentals, retirement homes and mountain getaways — and match the floor accordingly, from durable vinyl in rentals to hardwood in the nicer homes.',
        highlights: ['Young Harris College', 'Brasstown Valley', 'Lake Chatuge access'],
      },
    ],
  },
  {
    name: 'Fannin County',
    slug: 'fannin-county-ga',
    state: 'GA',
    stateName: 'Georgia',
    seat: 'Blue Ridge',
    overview:
      'Fannin County, Georgia is cabin-rental country — Blue Ridge, its scenic railway and Lake Blue Ridge draw weekend crowds, and the hills are full of rental cabins. That makes waterproof, heavy-duty flooring the name of the game, and we install a lot of it from Blue Ridge down to the Toccoa River.',
    driveNote: 'South into the heart of Georgia\'s cabin country.',
    towns: [
      {
        name: 'Blue Ridge',
        slug: 'blue-ridge-ga',
        state: 'GA',
        intro:
          'Blue Ridge is the Fannin County seat and one of the busiest vacation-rental markets in the North Georgia mountains, with its downtown shops, the Scenic Railway and Lake Blue Ridge. Rental turnover is brutal on floors, so we equip these cabins with thick-wear-layer vinyl plank that looks great in listing photos and survives the guests.',
        highlights: ['Blue Ridge Scenic Railway', 'Lake Blue Ridge', 'Downtown shops'],
      },
      {
        name: 'McCaysville',
        slug: 'mccaysville-ga',
        state: 'GA',
        intro:
          'McCaysville sits right on the Georgia–Tennessee line — its sister city is Copperhill, and the famous "blue line" runs through downtown. With the Toccoa/Ocoee River running through and a wave of renovations on the older homes here, we install a lot of vinyl plank and vinyl flooring that suits both river-town living and updated rentals.',
        highlights: ['GA–TN state line', 'Toccoa / Ocoee River', 'The Blue Line'],
      },
    ],
  },
  {
    name: 'Polk County',
    slug: 'polk-county-tn',
    state: 'TN',
    stateName: 'Tennessee',
    seat: 'Benton',
    overview:
      'Across the line in Tennessee, Polk County is the old Copper Basin — Copperhill and Ducktown — plus the whitewater of the Ocoee. It\'s the western edge of our service area, an easy drive from Murphy, and we bring the same full-service approach: we measure, we supply, and we install.',
    driveNote: 'West into the Tennessee Copper Basin.',
    towns: [
      {
        name: 'Copperhill',
        slug: 'copperhill-tn',
        state: 'TN',
        intro:
          'Copperhill shares a downtown with McCaysville right on the state line, with roots in the region\'s copper-mining history. As the old storefronts and homes here get new life, we\'re a go-to for durable flooring — vinyl plank and vinyl flooring that fit a historic river town and stand up to everyday use.',
        highlights: ['GA–TN twin city', 'Copper Basin history', 'Toccoa / Ocoee River'],
      },
      {
        name: 'Ducktown',
        slug: 'ducktown-tn',
        state: 'TN',
        intro:
          'Ducktown sits at the heart of the historic Copper Basin, near the Burra Burra Mine and the Ocoee whitewater corridor. Between full-time homes and getaways for the rafting season, we install practical, hard-wearing floors here — and we\'re happy to make the short trip over from Murphy to measure.',
        highlights: ['Burra Burra Mine', 'Ocoee River', 'Copper Basin'],
      },
    ],
  },
];

// --- Helpers ---------------------------------------------------------------

export const countyPath = (c: Pick<County, 'slug'>) => `/areas-we-serve/${c.slug}/`;
export const townPath = (c: Pick<County, 'slug'>, t: Pick<Town, 'slug'>) =>
  `/areas-we-serve/${c.slug}/${t.slug}/`;

export const getCounty = (slug: string) => COUNTIES.find((c) => c.slug === slug);

// Flattened towns with a back-reference to their county (for routing & chips).
export const ALL_TOWNS = COUNTIES.flatMap((c) =>
  c.towns.map((t) => ({ town: t, county: c }))
);

export const COUNTIES_BY_STATE = COUNTIES.reduce<Record<string, County[]>>((acc, c) => {
  (acc[c.stateName] ??= []).push(c);
  return acc;
}, {});

export const TOTAL_TOWNS = ALL_TOWNS.length;
export const TOTAL_COUNTIES = COUNTIES.length;
