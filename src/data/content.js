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
};

export default content;