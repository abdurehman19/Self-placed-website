// ============================================================
// SAARI WEBSITE KI DETAILS YAHAN SE EDIT KAREIN
// Poori site is aik file se control hoti hai.
// ============================================================

const content = {
  // ---- Basic Info ----
  name: "Sikandar Ali",
  title: "Wood Craft & Furniture",
  tagline: "Lakri ka kaam, apki manzoori se",
  city: "Karachi",

  phone: "0303-2493740",
  whatsapp: "923032493740",
  experienceYears: "20",

  // ---- Hero / Intro (Home page — English) ----
  eyebrow: "Karachi · Custom Woodwork",
  heroLine1: "Two decades of craftsmanship,",
  heroLine2: "built into your home",
  heroSub:
    "Wardrobes, full kitchens, or any custom furniture — Sikandar Ali visits your home in person, quotes an honest price, and completes every piece with his own hands, only after you approve.",

  heroStats: [
    { value: "9", label: "Work categories" },
    { value: "20+", label: "Years of experience", featured: true },
    { value: "100%", label: "Quotes given on-site" },
  ],

  // ---- Meet the craftsman (Home page) ----
  craftsmanEyebrow: "Meet the Craftsman",
  craftsmanDesc:
    "Sikandar Ali has been working with wood for over two decades — with his own hands, through his own hard work. No big showroom, no showmanship — just honest work he stands behind, from the first measurement to the final finish.",
  craftsmanQuote: "The price I quote after seeing your home is final — no hidden costs.",

  // ---- How it works (real sequence, so numbered) ----
  process: [
    {
      step: "01",
      title: "Call or message",
      desc: "Tell us what you need — a wardrobe, kitchen, door, or any custom piece.",
    },
    {
      step: "02",
      title: "Home visit",
      desc: "Sikandar Ali visits in person, takes measurements, and understands the space.",
    },
    {
      step: "03",
      title: "Honest quote",
      desc: "A clear price based on the wood quality and design — no hidden costs.",
    },
    {
      step: "04",
      title: "Work begins",
      desc: "Once you approve, materials are purchased and work starts by hand.",
    },
  ],

  // ---- Services (home page preview) ----
  services: [
    {
      name: "Wardrobes",
      desc: "Custom bedroom wardrobes for any home — from simple 2-door units to sliding designs.",
    },
    {
      name: "Kitchens",
      desc: "Complete kitchen cabinets, counters, and crockery units, built in solid wood.",
    },
    {
      name: "Doors",
      desc: "Interior and exterior doors — solid wood and panel designs.",
    },
    {
      name: "Beds & Furniture",
      desc: "Beds, dressing tables, sofa frames, and the rest of your home furniture.",
    },
  ],

  materials: [
    { name: "Sheesham", desc: "The strongest, longest-lasting wood — ideal for premium furniture." },
    { name: "Deodar (Diyar)", desc: "Lightweight and termite-resistant — excellent for doors and frames." },
    { name: "Plywood / MDF", desc: "Budget-friendly with a clean finish — used inside wardrobes and kitchens." },
    { name: "Partal / Kail", desc: "Mid-range wood — a good balance of strength and cost." },
  ],

  // ---- About page ----
  aboutBody: [
    "Sikandar Ali pichle 20 saal se lakri ka kaam kar rahe hain — apne haath se, apni mehnat se. Koi bara showroom nahi, koi dikhawa nahi — bas kaam par yaqeen aur mustaqil mehnat.",
    "Jab bhi koi call karta hai, sabse pehle khud ghar ja kar jagah dekhte hain aur sahi naap lete hain. Har ghar ka naksha alag hota hai, is liye har kaam ko usi hisaab se samjha jata hai — koi copy-paste design nahi hota.",
    "Rate batane ke baad koi jaldi nahi hoti. Jab client raazi ho, tab hi saman liya jata hai aur kaam shuru hota hai. Kaam mukammal hone tak khud nigrani karte hain, aur akhri finishing bhi apne haath se karte hain.",
    "20 saal mein Karachi ke alag alag ilaqon mein sainkron ghar ke liye almariyan, kitchen, darwaze aur furniture banaya hai — har baar wahi mehnat aur wahi sachai ke saath.",
  ],

  aboutValues: [
    { title: "Sachai", desc: "Jo rate ghar par visit ke baad bataya jaye, wahi final hota hai — koi chupi hui cost nahi." },
    { title: "Mehnat", desc: "Har kaam apne haath se hota hai, jaldi mein nahi — chahe kitna bhi choota kaam ho." },
    { title: "Sunwai", desc: "Pehle sunte hain aap kya chahte hain, phir us hisaab se design aur kaam karte hain." },
    { title: "Tajurba", desc: "20+ saal ka kaam — har wood type aur har design ka andaza hai." },
  ],

  aboutSkills: [
    "Custom almariyan (2-door, 3-door, sliding)",
    "Poori kitchen — cabinets, counters, crockery units",
    "Solid wood darwaze aur frames",
    "Bed, dressing table aur bedroom furniture",
    "Sofa frame aur living room furniture",
    "Purane furniture ki marammat aur polish",
  ],

  // ---- Rates: researched Karachi market starting rates, organized by category ----
  ratesNote:
    "Ye rates Karachi ke current lakri kaam ke market ke mutabiq andaza (starting) rates hain — asal rate lakri ki quality (sheesham, deodar, plywood/MDF), size aur design ke hisaab se tay hota hai. Sahi aur final rate hamesha ghar par visit ke baad hi bataya jata hai.",

  rateCategories: ["Sab", "Almariyan", "Kitchen", "Darwaze", "Bed", "Dressing Table", "Sofa", "TV Console", "Tables", "Rack"],

  rates: [
    // Almariyan
    { category: "Almariyan", item: "2-Door Wardrobe (Plywood/MDF)", price: "35,000", unit: "shuru se" },
    { category: "Almariyan", item: "3-Door Wardrobe", price: "55,000", unit: "shuru se" },
    { category: "Almariyan", item: "Sliding Door Wardrobe", price: "75,000", unit: "shuru se" },
    { category: "Almariyan", item: "Sheesham Wood Wardrobe (Premium)", price: "1,20,000", unit: "shuru se" },

    // Kitchen
    { category: "Kitchen", item: "Kitchen Cabinets (MDF/Laminate)", price: "18,000", unit: "per foot se" },
    { category: "Kitchen", item: "Kitchen Cabinets (Solid Wood)", price: "35,000", unit: "per foot se" },
    { category: "Kitchen", item: "Poora Kitchen Set (avg. 15-20 ft)", price: "3,00,000", unit: "shuru se" },

    // Darwaze
    { category: "Darwaze", item: "Standard Interior Door", price: "12,000", unit: "shuru se" },
    { category: "Darwaze", item: "Solid Wood Main Door", price: "45,000", unit: "shuru se" },
    { category: "Darwaze", item: "Double Door (Main Entrance)", price: "90,000", unit: "shuru se" },

    // Bed
    { category: "Bed", item: "Single Bed", price: "20,000", unit: "shuru se" },
    { category: "Bed", item: "Double Bed (Simple)", price: "35,000", unit: "shuru se" },
    { category: "Bed", item: "Double Bed with Storage", price: "55,000", unit: "shuru se" },

    // Dressing Table
    { category: "Dressing Table", item: "Simple Dressing Table", price: "18,000", unit: "shuru se" },
    { category: "Dressing Table", item: "Mirror + Drawers wali Dressing Table", price: "28,000", unit: "shuru se" },

    // Sofa
    { category: "Sofa", item: "Wooden Frame Sofa", price: "15,000", unit: "per seat se" },

    // TV Console
    { category: "TV Console", item: "Simple TV Console", price: "20,000", unit: "shuru se" },
    { category: "TV Console", item: "Wall-Mounted TV Unit", price: "35,000", unit: "shuru se" },

    // Tables
    { category: "Tables", item: "Study Table", price: "15,000", unit: "shuru se" },
    { category: "Tables", item: "Dining Table (6-Seater)", price: "45,000", unit: "shuru se" },

    // Rack
    { category: "Rack", item: "Bookshelf / Rack", price: "12,000", unit: "shuru se" },
  ],

  // ---- Gallery: categorized placeholders ----
  galleryCategories: ["Sab", "Almariyan", "Kitchen", "Darwaze", "Bed", "Dressing Table", "Sofa", "TV Console"],

  gallery: [
    { label: "2-Door Wardrobe", category: "Almariyan", src: "" },
    { label: "Sliding Wardrobe", category: "Almariyan", src: "" },
    { label: "Sheesham Almari", category: "Almariyan", src: "" },
    { label: "Modern Kitchen Cabinets", category: "Kitchen", src: "" },
    { label: "Kitchen Counter", category: "Kitchen", src: "" },
    { label: "Solid Wood Main Door", category: "Darwaze", src: "" },
    { label: "Interior Panel Door", category: "Darwaze", src: "" },
    { label: "Double Bed with Storage", category: "Bed", src: "" },
    { label: "Single Bed", category: "Bed", src: "" },
    { label: "Dressing Table with Mirror", category: "Dressing Table", src: "" },
    { label: "Wooden Sofa Frame", category: "Sofa", src: "" },
    { label: "Wall-Mounted TV Unit", category: "TV Console", src: "" },
  ],

  // ---- Service areas ----
  areas: ["Gulshan-e-Iqbal", "Nazimabad", "North Karachi", "Korangi", "Malir", "Federal B Area", "Gulistan-e-Johar", "And across Karachi"],

  // ---- Materials catalog page: sheets, boards, hardware used in woodwork ----
  // Prices researched from Karachi's timber/hardware markets — these move
  // with the market daily, so treat them as an approximate guide.
  materialsNote:
    "Sheet, board, and hardware prices change often with the market — these are researched approximate rates to help you budget. Sikandar Ali confirms exact material cost at the time of purchase, after your quote is approved.",

  materialSources: [
    { name: "Timber Market (Old Haji Camp)", detail: "Siddiq Wahab Road — solid wood, plywood, MDF, block board" },
    { name: "Marriott Road & Jodia Bazar", detail: "Board and decorative laminate (sunmica) suppliers" },
    { name: "Saddar Hardware Markets", detail: "Hinges, channels, handles, locks, and fittings" },
  ],

  materialCategories: ["Sab", "Timber", "Plywood & Boards", "Laminate Sheets", "Veneer", "PVC & Acrylic", "Hardware", "Adhesives & Polish"],

  materialCatalog: [
    // Timber
    {
      category: "Timber",
      name: "Sheesham (Sheesham Wood)",
      desc: "The strongest and longest-lasting solid wood — used for premium wardrobes, doors, and furniture that needs to last decades.",
      price: "2,200 – 3,500",
      unit: "per cubic ft",
      where: "Timber Market (Old Haji Camp)",
      swatch: "wood-sheesham",
    },
    {
      category: "Timber",
      name: "Deodar (Diyar)",
      desc: "Naturally oily and termite-resistant — Pakistan's most trusted wood for doors, window frames, and outdoor-facing furniture.",
      price: "1,800 – 2,800",
      unit: "per cubic ft",
      where: "Timber Market (Old Haji Camp)",
      swatch: "wood-deodar",
    },
    {
      category: "Timber",
      name: "Partal / Kail (Pine)",
      desc: "A mid-range softwood — good strength for the price, commonly used inside cabinets and for shelving.",
      price: "900 – 1,500",
      unit: "per cubic ft",
      where: "Timber Market (Old Haji Camp)",
      swatch: "wood-pine",
    },

    // Plywood & Boards
    {
      category: "Plywood & Boards",
      name: "Commercial Plywood (8x4 ft)",
      desc: "Standard plywood for cabinet bodies and general carpentry. 12–18mm thickness covers most furniture work.",
      price: "4,000 – 5,500",
      unit: "per sheet",
      where: "Timber Market / Marriott Road",
      swatch: "board-ply",
    },
    {
      category: "Plywood & Boards",
      name: "Marine / BWR Plywood (8x4 ft)",
      desc: "Water-resistant grade — used for kitchens, bathroom cabinets, and anywhere moisture is a concern.",
      price: "6,000 – 8,000",
      unit: "per sheet",
      where: "Timber Market / Marriott Road",
      swatch: "board-marine",
    },
    {
      category: "Plywood & Boards",
      name: "MDF Board / Lasani (8x4 ft)",
      desc: "Smooth, budget-friendly board — the most common choice for wardrobe shutters and painted or laminated surfaces.",
      price: "2,500 – 3,500",
      unit: "per sheet",
      where: "Marriott Road / Jodia Bazar",
      swatch: "board-mdf",
    },
    {
      category: "Plywood & Boards",
      name: "Block Board (8x4 ft)",
      desc: "A solid-core board built from wood strips — strong enough for long wardrobe shelves and tabletops without warping.",
      price: "4,500 – 6,000",
      unit: "per sheet",
      where: "Timber Market / Marriott Road",
      swatch: "board-block",
    },
    {
      category: "Plywood & Boards",
      name: "Particle Board / Chipboard (8x4 ft)",
      desc: "The most economical board — suited to low-budget furniture and parts that won't carry heavy weight.",
      price: "2,000 – 3,000",
      unit: "per sheet",
      where: "Marriott Road / Jodia Bazar",
      swatch: "board-particle",
    },

    // Laminate Sheets
    {
      category: "Laminate Sheets",
      name: "Decorative Laminate / Sunmica (8x4 ft)",
      desc: "The outer finish layer glued onto boards — gives wardrobes, kitchens, and doors their final look and colour.",
      price: "1,200 – 3,000",
      unit: "per sheet",
      where: "Marriott Road / Jodia Bazar",
      swatch: "laminate-swatches",
    },

    // Veneer
    {
      category: "Veneer",
      name: "Natural Wood Veneer Sheet",
      desc: "A thin real-wood layer for a premium, natural wood-grain look — used on feature panels and high-end furniture fronts.",
      price: "150 – 400",
      unit: "per sq ft",
      where: "Timber Market (specialised dealers)",
      swatch: "veneer",
    },

    // PVC & Acrylic
    {
      category: "PVC & Acrylic",
      name: "High-Gloss Acrylic / PVC Sheet",
      desc: "A modern, glossy finish popular for kitchen shutters — wipes clean easily and reflects light well in small kitchens.",
      price: "200 – 450",
      unit: "per sq ft",
      where: "Marriott Road / Jodia Bazar",
      swatch: "acrylic",
    },

    // Hardware
    {
      category: "Hardware",
      name: "Hinges (Soft-Close)",
      desc: "Cabinet and wardrobe door hinges — soft-close types shut quietly and last longer under daily use.",
      price: "150 – 400",
      unit: "per piece",
      where: "Saddar Hardware Markets",
      swatch: "hardware-hinge",
    },
    {
      category: "Hardware",
      name: "Drawer Channels (Telescopic)",
      desc: "Sliding rails for kitchen and wardrobe drawers — smoother pull with less sag over time.",
      price: "350 – 900",
      unit: "per pair",
      where: "Saddar Hardware Markets",
      swatch: "hardware-channel",
    },
    {
      category: "Hardware",
      name: "Handles & Knobs",
      desc: "Final touch on any wardrobe, drawer, or cabinet door — available in many finishes to match the interior.",
      price: "100 – 500",
      unit: "per piece",
      where: "Saddar Hardware Markets",
      swatch: "hardware-handle",
    },
    {
      category: "Hardware",
      name: "Locks (Cabinet / Almari)",
      desc: "Standard locking hardware for wardrobes and cabinets.",
      price: "300 – 1,200",
      unit: "per piece",
      where: "Saddar Hardware Markets",
      swatch: "hardware-lock",
    },

    // Adhesives & Polish
    {
      category: "Adhesives & Polish",
      name: "Wood Adhesive (Fevicol-type)",
      desc: "Bonds laminate sheets to boards and joins wood pieces — the glue behind every strong joint.",
      price: "400 – 700",
      unit: "per kg",
      where: "Timber Market / hardware stores",
      swatch: "adhesive",
    },
    {
      category: "Adhesives & Polish",
      name: "Melamine Polish / Wood Varnish",
      desc: "The protective top coat that gives furniture its shine and protects the wood underneath.",
      price: "900 – 1,600",
      unit: "per litre",
      where: "Timber Market / hardware stores",
      swatch: "polish",
    },
  ],

  // ---- Sheet colour book: laminate/sunmica colours, click-to-view detail ----
  sheetColorFamilies: ["Sab", "White & Light", "Wood Grain", "Black & Grey", "Solid Colours", "Marble & Metallic"],

  sheetColors: [
    // White & Light
    { code: "SNM-01", name: "Pearl White", family: "White & Light", finish: "Glossy", swatch: "solid", hex: "#f7f4ee", price: "1,800 – 2,400", bestFor: "Kitchen shutters and wardrobes — bright and easy to match with any interior." },
    { code: "SNM-02", name: "Ivory White", family: "White & Light", finish: "Matte", swatch: "solid", hex: "#f2ead9", price: "1,200 – 1,600", bestFor: "Wardrobe interiors and ceilings — soft, warm white without the glare." },
    { code: "SNM-03", name: "Cream", family: "White & Light", finish: "Matte", swatch: "solid", hex: "#ecdfc0", price: "1,200 – 1,600", bestFor: "Bedroom wardrobes — a warm neutral that hides daily marks well." },
    { code: "SNM-04", name: "Beige", family: "White & Light", finish: "Matte", swatch: "solid", hex: "#ddc9a3", price: "1,200 – 1,700", bestFor: "Living room units — pairs easily with most furniture colours." },

    // Wood Grain
    { code: "SNM-05", name: "Oak Wood", family: "Wood Grain", finish: "Textured", swatch: "wood", tones: ["#c9a06a", "#dab883", "#b78c54"], price: "1,600 – 2,200", bestFor: "Wardrobes and doors — a light, natural wood look." },
    { code: "SNM-06", name: "Walnut Wood", family: "Wood Grain", finish: "Matte", swatch: "wood", tones: ["#5a3a24", "#6f4a30", "#432c1c"], price: "1,700 – 2,400", bestFor: "TV units and bedroom furniture — a classic, warm dark wood look." },
    { code: "SNM-07", name: "Teak Wood", family: "Wood Grain", finish: "Textured", swatch: "wood", tones: ["#8a5a34", "#a06a37", "#6f4526"], price: "1,700 – 2,300", bestFor: "Doors and wardrobe fronts — rich mid-brown, very popular in Karachi homes." },
    { code: "SNM-08", name: "Wenge", family: "Wood Grain", finish: "Matte", swatch: "wood", tones: ["#2e211a", "#3c2b21", "#211712"], price: "1,800 – 2,500", bestFor: "Modern kitchens and TV units — a deep, almost-black wood finish." },
    { code: "SNM-09", name: "Rosewood", family: "Wood Grain", finish: "Glossy", swatch: "wood", tones: ["#5c2a24", "#7a3a30", "#431e1a"], price: "1,900 – 2,600", bestFor: "Dining tables and feature panels — a rich reddish-brown with shine." },
    { code: "SNM-10", name: "Cherry Wood", family: "Wood Grain", finish: "Glossy", swatch: "wood", tones: ["#7a2e22", "#96402c", "#5c2018"], price: "1,900 – 2,600", bestFor: "Dressing tables and cabinets — warm reddish tone with a glossy finish." },
    { code: "SNM-11", name: "Chocolate Brown", family: "Wood Grain", finish: "Matte", swatch: "solid", hex: "#4a2e1e", price: "1,300 – 1,800", bestFor: "Kitchen base cabinets — flat brown, hides scuffs well." },

    // Black & Grey
    { code: "SNM-12", name: "Charcoal Black", family: "Black & Grey", finish: "Matte", swatch: "solid", hex: "#211a14", price: "1,500 – 2,000", bestFor: "Modern kitchen shutters and feature panels." },
    { code: "SNM-13", name: "Matte Black", family: "Black & Grey", finish: "Matte", swatch: "solid", hex: "#1a1a1a", price: "1,600 – 2,100", bestFor: "TV units and study tables — bold, contemporary look." },
    { code: "SNM-14", name: "Steel Grey", family: "Black & Grey", finish: "Glossy", swatch: "solid", hex: "#7d7d7a", price: "1,700 – 2,200", bestFor: "Kitchen cabinets — pairs well with steel appliances and fittings." },
    { code: "SNM-15", name: "Ash Grey", family: "Black & Grey", finish: "Matte", swatch: "solid", hex: "#a9a6a0", price: "1,300 – 1,800", bestFor: "Wardrobes and doors — a soft neutral that suits most rooms." },

    // Solid Colours
    { code: "SNM-16", name: "Sky Blue", family: "Solid Colours", finish: "Glossy", swatch: "solid", hex: "#5b83a6", price: "1,400 – 1,900", bestFor: "Children's room wardrobes and study units." },
    { code: "SNM-17", name: "Bottle Green", family: "Solid Colours", finish: "Matte", swatch: "solid", hex: "#2f4a34", price: "1,400 – 1,900", bestFor: "Feature panels and accent cabinet doors." },
    { code: "SNM-18", name: "Maroon", family: "Solid Colours", finish: "Glossy", swatch: "solid", hex: "#6b1f2a", price: "1,400 – 1,900", bestFor: "Bedroom wardrobes — a warm, rich accent colour." },
    { code: "SNM-19", name: "Mustard Yellow", family: "Solid Colours", finish: "Matte", swatch: "solid", hex: "#c9962e", price: "1,400 – 1,900", bestFor: "Kids' furniture and accent shelving." },

    // Marble & Metallic
    { code: "SNM-20", name: "White Marble", family: "Marble & Metallic", finish: "Glossy", swatch: "marble-light", price: "2,200 – 3,000", bestFor: "Kitchen counters and TV unit backdrops — a stone look without the weight." },
    { code: "SNM-21", name: "Grey Marble", family: "Marble & Metallic", finish: "Glossy", swatch: "marble-dark", price: "2,200 – 3,000", bestFor: "Modern kitchen islands and bathroom cabinet fronts." },
    { code: "SNM-22", name: "Metallic Silver", family: "Marble & Metallic", finish: "Glossy", swatch: "metallic", price: "2,000 – 2,800", bestFor: "Modern TV units and accent panels — a sleek metallic shine." },
  ],
};

export default content;