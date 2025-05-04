const elementsdata = {
  1: { 
    name: "Hydrogen", 
    symbol: "H", 
    atomicNumber: 1, 
    massNumber: 1, 
    uses: "Fuel, weather balloons", 
    importance: "Most abundant element in the universe", 
    image: "./images/hydrogen.webp"
  },
  2: { 
    name: "Helium", 
    symbol: "He", 
    atomicNumber: 2, 
    massNumber: 4, 
    uses: "Coolant, balloons", 
    importance: "Second most abundant element in the universe", 
    image: "./images/helium.jpeg"
  },
  3: { 
    name: "Lithium", 
    symbol: "Li", 
    atomicNumber: 3, 
    massNumber: 7, 
    uses: "Batteries, ceramics", 
    importance: "Lightest metal", 
    image: "./images/lithium.jpeg"
  },
  4: { 
    name: "Beryllium", 
    symbol: "Be", 
    atomicNumber: 4, 
    massNumber: 9, 
    uses: "X-ray windows, alloys", 
    importance: "Rare and valuable", 
    image: "./images/beryllium.jpeg"
  },
  5: { 
    name: "Boron", 
    symbol: "B", 
    atomicNumber: 5, 
    massNumber: 11, 
    uses: "Glass, detergents", 
    importance: "Essential for plant growth", 
    image: "./images/Boron.jpeg"
  },
  6: { 
    name: "Carbon", 
    symbol: "C", 
    atomicNumber: 6, 
    massNumber: 12, 
    uses: "Fuel, life structures", 
    importance: "Basis of life", 
    image: "./images/carbon.jpeg"
  },
  7: { 
    name: "Nitrogen", 
    symbol: "N", 
    atomicNumber: 7, 
    massNumber: 14, 
    uses: "Fertilizers, explosives", 
    importance: "78% of Earth's atmosphere", 
    image: "./images/nitrogen.jpeg"
  },
  8: { 
    name: "Oxygen", 
    symbol: "O", 
    atomicNumber: 8, 
    massNumber: 16, 
    uses: "Breathing, combustion", 
    importance: "Essential for life", 
    image: "./images/oxygen.jpeg"
  },
  9: { 
    name: "Fluorine", 
    symbol: "F", 
    atomicNumber: 9, 
    massNumber: 19, 
    uses: "Toothpaste, Teflon", 
    importance: "Most reactive element", 
    image: "./images/fluorine.jpeg"
  },
  10: { 
    name: "Neon", 
    symbol: "Ne",
    atomicNumber: 10,
    massNumber: 20,
    uses: "Neon signs, cryogenics",
    importance: "Vital for nerve functions",
    image: "./images/neon.jpeg"
  },
  11: { 
    name: "Sodium", 
    symbol: "Na",
    atomicNumber: 11,
    massNumber: 23,
    uses: "Table salt, streetlights",
    importance: "Vital for nerve functions", 
    image: "./images2/sodium.jpeg"
  },
  12: { 
    name: "Magnesium", 
    symbol: "Mg",  
    atomicNumber: 12 , 
    massNumber: 24 , 
    uses: "Aerospace, fireworks",  
    importance: "Strengthens bones ", 
    image: "./images/magnesium.jpeg"
  },
  13: {
    name: "Aluminum",
    symbol: "Al",
    atomicNumber: 13,
    massNumber: 27,
    uses: "Foils, cans",
    importance: "Lightweight and corrosion-resistant",
    image:"./images/aluminium.jpeg"
  },
  14: {
    name: "Silicon",
    symbol: "Si",
    atomicNumber: 14,
    massNumber: 28,
    uses: "Semiconductors, glass",
    importance: "Backbone of electronics",
    image:"./images/silicon.jpeg"
  },
  15: {
    name: "Phosphorus",
    symbol: "P",
    atomicNumber: 15,
    massNumber: 31,
    uses: "Fertilizers, matches",
    importance: "Essential for DNA",
    image:"./images/phosphorus.jpeg"
  },
  16: {
    name: "Sulfur",
    symbol: "S",
    atomicNumber: 16,
    massNumber: 32,
    uses: "Sulfuric acid, rubber vulcanization",
    importance: "Found in proteins",
    image:"./images2/sulfur.jpeg"
  },
  17: {
    name: "Chlorine",
    symbol: "Cl",
    atomicNumber: 17,
    massNumber: 35,
    uses: "Water purification, PVC production",
    importance: "Disinfectant",
    image:"./images/chlorine.jpeg"
  },
  18: {
    name: "Argon",
    symbol: "Ar",
    atomicNumber: 18,
    massNumber: 40,
    uses: "Lighting, welding",
    importance: "Inert atmosphere provider",
    image:"./images/argon.jpeg"
  },
  19: {
    name: "Potassium",
    symbol: "K",
    atomicNumber: 19,
    massNumber: 39,
    uses: "Fertilizers, fireworks",
    importance: "Critical for plant growth",
    image:"./images/potassium.jpeg"
  },
  20: {
    name: "Calcium",
    symbol: "Ca",
    atomicNumber: 20,
    massNumber: 40,
    uses: "Cement, bones",
    importance: "Essential for teeth and bones",
    image:"./images/calcium.jpeg"
  },
  21: {
    name: "Scandium",
    symbol: "Sc",
    atomicNumber: 21,
    massNumber: 45,
    uses: "Aerospace, alloys",
    importance: "Lightweight metal",
    image:"./images/scandium.jpeg"
  },
  22: {
    name: "Titanium",
    symbol: "Ti",
    atomicNumber: 22,
    massNumber: 48,
    uses: "Implants, aircraft",
    importance: "Strong and corrosion-resistant",
    image:"./images2/titanium.jpeg"
  },
  23: {
    name: "Vanadium",
    symbol: "V",
    atomicNumber: 23,
    massNumber: 51,
    uses: "Steel alloys, tools",
    importance: "Strengthens metals",
    image:"./images2/vanadium.jpeg"
  },
  24: {
    name: "Chromium",
    symbol: "Cr",
    atomicNumber: 24,
    massNumber: 52,
    uses: "Stainless steel, plating",
    importance: "Corrosion resistance",
    image:"./images/chromium.jpeg"
  },
  25: {
    name: "Manganese",
    symbol: "Mn",
    atomicNumber: 25,
    massNumber: 55,
    uses: "Steel manufacturing",
    importance: "Strengthens steel",
    image:"./images/manganese.jpeg"
  },
  26: {
    name: "Iron",
    symbol: "Fe",
    atomicNumber: 26,
    massNumber: 56,
    uses: "Tools, construction",
    importance: "Key for oxygen transport in blood",
    image:"./images/iron.jpeg"
  },
  27: {
    name: "Cobalt",
    symbol: "Co",
    atomicNumber: 27,
    massNumber: 59,
    uses: "Batteries, magnets",
    importance: "High-temperature alloys",
    image:"./images/cobalt.jpeg"
  },
  28: {
    name: "Nickel",
    symbol: "Ni",
    atomicNumber: 28,
    massNumber: 59,
    uses: "Coins, plating",
    importance: "Corrosion resistance",
    image:"./images/nickel.jpeg"
  },
  29: {
    name: "Copper",
    symbol: "Cu",
    atomicNumber: 29,
    massNumber: 64,
    uses: "Wiring, coins",
    importance: "Excellent conductor",
    image:"./images/copper.jpeg"
  },
  30: {
    name: "Zinc",
    symbol: "Zn",
    atomicNumber: 30,
    massNumber: 65,
    uses: "Galvanization, alloys",
    importance: "Prevents rusting",
    image:"./images2/zinc.jpeg"
  },
  31: {
    name: "Gallium",
    symbol: "Ga",
    atomicNumber: 31,
    massNumber: 70,
    uses: "Semiconductors, LEDs",
    importance: "Melts at low temperatures",
    image:"./images/gallium.jpeg"
  },
  32: {
    name: "Germanium",
    symbol: "Ge",
    atomicNumber: 32,
    massNumber: 73,
    uses: "Fiber optics, transistors",
    importance: "Found in electronics",
    image:"./images/germanium.jpeg"
  },
  33: {
    name: "Arsenic",
    symbol: "As",
    atomicNumber: 33,
    massNumber: 75,
    uses: "Pesticides, semiconductors",
    importance: "Toxic, but useful",
    image:"./images/arsenic.jpeg"
  },
  34: {
    name: "Selenium",
    symbol: "Se",
    atomicNumber: 34,
    massNumber: 79,
    uses: "Photocells, glass production",
    importance: "Antioxidant in small amounts",
    image:"./images/selenium.jpeg"
  },
  35: {
    name: "Bromine",
    symbol: "Br",
    atomicNumber: 35,
    massNumber: 80,
    uses: "Disinfectants, dyes",
    importance: "Water purification",
    image:"./images/bromine.jpeg"
  },
  36: {
    name: "Krypton",
    symbol: "Kr",
    atomicNumber: 36,
    massNumber: 84,
    uses: "Lighting, photography",
    importance: "Inert gas",
    image:"./images/krypton.jpeg"
  },
  37: {
    name: "Rubidium",
    symbol: "Rb",
    atomicNumber: 37,
    massNumber: 85,
    uses: "Atomic clocks",
    importance: "Highly reactive",
    image:"./images/rubidium.jpeg"
  },
  38: {
    name: "Strontium",
    symbol: "Sr",
    atomicNumber: 38,
    massNumber: 88,
    uses: "Fireworks, medical imaging",
    importance: "Bright red color in flames",
    image:"./images2/strontium.jpeg"
  },
  39: {
    name: "Yttrium",
    symbol: "Y",
    atomicNumber: 39,
    massNumber: 89,
    uses: "Lasers, ceramics",
    importance: "Strengthens materials",
    image:"./images2/yttrium.jpeg"
  },
  40: {
    name: "Zirconium",
    symbol: "Zr",
    atomicNumber: 40,
    massNumber: 91,
    uses: "Nuclear reactors, jewelry",
    importance: "Corrosion-resistant",
    image:"./images2/zirconium.jpeg"
  },
  41: {
    name: "Niobium",
    symbol: "Nb",
    atomicNumber: 41,
    massNumber: 93,
    uses: "Alloys, superconductors",
    importance: "Improves material strength",
    image:"./images/niobium.jpeg"
  },
  42: {
    name: "Molybdenum",
    symbol: "Mo",
    atomicNumber: 42,
    massNumber: 96,
    uses: "Tools, steel alloys",
    importance: "Increases toughness",
    image:"./images/molybdenum.jpeg"
  },
  43: {
    name: "Technetium",
    symbol: "Tc",
    atomicNumber: 43,
    massNumber: 98,
    uses: "Medical imaging",
    importance: "First artificially produced element",
    image:"./images2/technitium.jpeg"
  },
  44: {
    name: "Ruthenium",
    symbol: "Ru",
    atomicNumber: 44,
    massNumber: 101,
    uses: "Catalysts, electronics",
    importance: "Rare and valuable metal",
    image:"./images/ruthenium.jpeg"
  },
  45: {
    name: "Rhodium",
    symbol: "Rh",
    atomicNumber: 45,
    massNumber: 103,
    uses: "Jewelry, mirrors",
    importance: "Highly reflective",
    image:"./images/rhodium.jpeg"
  },
  46: {
    name: "Palladium",
    symbol: "Pd",
    atomicNumber: 46,
    massNumber: 106,
    uses: "Catalytic converters",
    importance: "Reduces vehicle emissions",
    image:"./images/palladium.jpeg"
  },
  47: {
    name: "Silver",
    symbol: "Ag",
    atomicNumber: 47,
    massNumber: 108,
    uses: "Jewelry, electronics",
    importance: "Excellent conductor",
    image:"./images2/silver.jpeg"
  },
  48: {
    name: "Cadmium",
    symbol: "Cd",
    atomicNumber: 48,
    massNumber: 112,
    uses: "Batteries, pigments",
    importance: "Used in rechargeable cells",
    image:"./images/cadmium.jpeg"
  },
  49: {
    name: "Indium",
    symbol: "In",
    atomicNumber: 49,
    massNumber: 115,
    uses: "Solder, electronics",
    importance: "Soft and malleable",
    image:"./images/indium.jpeg"
  },
  50: {
    name: "Tin",
    symbol: "Sn",
    atomicNumber: 50,
    massNumber: 119,
    uses: "Solder, plating",
    importance: "Prevents corrosion",
    image:"./images2/tin.jpeg"
  },
  51: {
    name: "Antimony",
    symbol: "Sb",
    atomicNumber: 51,
    massNumber: 122,
    uses: "Flame retardants, alloys",
    importance: "Improves mechanical strength in alloys",
    image:"./images/antimony.jpeg"
  },
  52: {
    name: "Tellurium",
    symbol: "Te",
    atomicNumber: 52,
    massNumber: 128,
    uses: "Thermoelectric devices, alloys",
    importance: "Used in semiconductors and solar panels",
    image:"./images2/tellurium.jpeg"
  },
  53: {
    name: "Iodine",
    symbol: "I",
    atomicNumber: 53,
    massNumber: 127,
    uses: "Disinfectants, dietary supplements",
    importance: "Essential for thyroid hormone production",
    image:"./images/iodine.jpeg"
  },
  54: {
    name: "Xenon",
    symbol: "Xe",
    atomicNumber: 54,
    massNumber: 131,
    uses: "Lighting, anesthetics",
    importance: "Inert gas used in high-efficiency lamps",
    image:"./images2/xenon.jpeg"
  },
  55: {
    name: "Cesium",
    symbol: "Cs",
    atomicNumber: 55,
    massNumber: 133,
    uses: "Atomic clocks, drilling fluids",
    importance: "Provides highly accurate timekeeping",
    image:"./images/caesium.jpeg"
  },
  56: {
    name: "Barium",
    symbol: "Ba",
    atomicNumber: 56,
    massNumber: 137,
    uses: "Medical imaging, fireworks",
    importance: "Produces green color in fireworks and aids X-ray diagnostics",
    image:"./images/barium.jpeg"
  },
  72: {
    name: "Hafnium",
    symbol: "Hf",
    atomicNumber: 72,
    massNumber: 178,
    uses: "Nuclear reactors, high-temperature alloys",
    importance: "Corrosion-resistant and high melting point",
    image:"./images/hafnium.jpeg"
  },
  73: {
    name: "Tantalum",
    symbol: "Ta",
    atomicNumber: 73,
    massNumber: 181,
    uses: "Electronics, medical implants",
    importance: "High resistance to corrosion",
    image:"./images2/tantalum.jpeg"
  },
  74: {
    name: "Tungsten",
    symbol: "W",
    atomicNumber: 74,
    massNumber: 184,
    uses: "Lightbulb filaments, cutting tools",
    importance: "Highest melting point of any element",
    image:"./images2/tungsten.jpeg"
  },
  75: {
    name: "Rhenium",
    symbol: "Re",
    atomicNumber: 75,
    massNumber: 186,
    uses: "Jet engines, catalysts",
    importance: "Very rare and heat-resistant",
    image:"./images/rhenium.jpeg"
  },
  76: {
    name: "Osmium",
    symbol: "Os",
    atomicNumber: 76,
    massNumber: 190,
    uses: "Pen tips, electrical contacts",
    importance: "Densest naturally occurring element",
    image:"./images/osmium.jpeg"
  },
  77: {
    name: "Iridium",
    symbol: "Ir",
    atomicNumber: 77,
    massNumber: 192,
    uses: "Spark plugs, jewelry",
    importance: "Highly corrosion-resistant",
    image:"./images/iridium.jpeg"
  },
  78: {
    name: "Platinum",
    symbol: "Pt",
    atomicNumber: 78,
    massNumber: 195,
    uses: "Catalytic converters, jewelry",
    importance: "Highly valuable and inert",
    image:"./images/platinum.jpeg"
  },
  79: {
    name: "Gold",
    symbol: "Au",
    atomicNumber: 79,
    massNumber: 197,
    uses: "Jewelry, electronics",
    importance: "Does not tarnish and highly conductive",
    image:"./images/gold.jpeg"
  },
  80: {
    name: "Mercury",
    symbol: "Hg",
    atomicNumber: 80,
    massNumber: 201,
    uses: "Thermometers, barometers",
    importance: "The only metal that is liquid at room temperature",
    image:"./images/mercury.jpeg"
  },
  81: {
    name: "Thallium",
    symbol: "Tl",
    atomicNumber: 81,
    massNumber: 204,
    uses: "Optical lenses, electronics",
    importance: "Toxic but useful in small amounts",
    image:"./images2/thallium.jpeg"
  },
  82: {
    name: "Lead",
    symbol: "Pb",
    atomicNumber: 82,
    massNumber: 207,
    uses: "Batteries, radiation shielding",
    importance: "Soft and malleable heavy metal",
    image:"./images/lead.jpeg"
  },
  83: {
    name: "Bismuth",
    symbol: "Bi",
    atomicNumber: 83,
    massNumber: 209,
    uses: "Medications, cosmetics",
    importance: "Non-toxic and low melting point",
    image:"./images/bismuth.jpeg"
  },
  84: {
    name: "Polonium",
    symbol: "Po",
    atomicNumber: 84,
    massNumber: 209,
    uses: "Nuclear batteries, anti-static devices",
    importance: "Highly radioactive",
    image:"./images/polonium.jpeg"
  },
  85: {
    name: "Astatine",
    symbol: "At",
    atomicNumber: 85,
    massNumber: 210,
    uses: "Cancer treatment (radioactive tracers)",
    importance: "Extremely rare and radioactive",
    image:"./images/astatine.jpeg"
  },
  86: {
    name: "Radon",
    symbol: "Rn",
    atomicNumber: 86,
    massNumber: 222,
    uses: "Cancer treatment, radiation research",
    importance: "Radioactive noble gas",
    image:"./images/radon.jpeg"
  },
  87: {
    name: "Francium",
    symbol: "Fr",
    atomicNumber: 87,
    massNumber: 223,
    uses: "Scientific research",
    importance: "Extremely rare and highly radioactive",
    image:"./images/francium.jpeg"
  },
  88: {
    name: "Radium",
    symbol: "Ra",
    atomicNumber: 88,
    massNumber: 226,
    uses: "Cancer treatment (historically)",
    importance: "Highly radioactive and luminescent",
    image:"./images/radium.jpeg"
  },
  104: {
    name: "Rutherfordium",
    symbol: "Rf",
    atomicNumber: 104,
    massNumber: 267,
    uses: "Research purposes",
    importance: "No practical applications yet due to instability",
    image:"./images/rutherfordium.jpeg"
  },
  105: {
    name: "Dubnium",
    symbol: "Db",
    atomicNumber: 105,
    massNumber: 270,
    uses: "Research purposes",
    importance: "Studied for its properties in nuclear science",
    image:"./images/dubnium.jpeg"
  },
  106: {
    name: "Seaborgium",
    symbol: "Sg",
    atomicNumber: 106,
    massNumber: 271,
    uses: "Research purposes",
    importance: "Helps in understanding heavy elements",
    image:"./images/seaborgium.jpeg"
  },
  107: {
    name: "Bohrium",
    symbol: "Bh",
    atomicNumber: 107,
    massNumber: 270,
    uses: "Research purposes",
    importance: "No practical uses yet",
    image:"./images/bohrium.jpeg"
  },
  108: {
    name: "Hassium",
    symbol: "Hs",
    atomicNumber: 108,
    massNumber: 277,
    uses: "Research purposes",
    importance: "Provides insights into superheavy elements",
    image:"./images/hassium.jpeg"
  },
  109: {
    name: "Meitnerium",
    symbol: "Mt",
    atomicNumber: 109,
    massNumber: 278,
    uses: "Research purposes",
    importance: "Named in honor of Lise Meitner",
    image:"./images/Meitnerium.jpeg"
  },
  110: {
    name: "Darmstadtium",
    symbol: "Ds",
    atomicNumber: 110,
    massNumber: 281,
    uses: "Research purposes",
    importance: "No known applications due to short half-life",
    image:"./images/darmstadtium.jpeg"
  },
  111: {
    name: "Roentgenium",
    symbol: "Rg",
    atomicNumber: 111,
    massNumber: 282,
    uses: "Research purposes",
    importance: " To create heavier elements.",
    image:"./images/roentgenium.jpeg"
  },
  112: {
    name: "Copernicium",
    symbol: "Cn",
    atomicNumber: 112,
    massNumber: 285,
    uses: "Research purposes",
    importance: "Extends knowledge of heavy elements",
    image:"./images/copernicium.jpeg"
  },
  113: {
    name: "Nihonium",
    symbol: "Nh",
    atomicNumber: 113,
    massNumber: 286,
    uses: "Research purposes",
    importance: "First element discovered in Japan",
    image:"./images/nihonium.jpeg"
  },
  114: {
    name: "Flerovium",
    symbol: "Fl",
    atomicNumber: 114,
    massNumber: 289,
    uses: "Research purposes",
    importance: "To study the properties of superheavy elements",
    image:"./images/Flerovium.jpeg"
  },
  115: {
    name: "Moscovium",
    symbol: "Mc",
    atomicNumber: 115,
    massNumber: 290,
    uses: "Research purposes",
    importance: "Named after Moscow, Russia",
    image:"./images/moscovium.jpeg"
  },
  116: {
    name: "Livermorium",
    symbol: "Lv",
    atomicNumber: 116,
    massNumber: 293,
    uses: "Research purposes",
    importance: "Yielding valuable insights into the behavior of superheavy atoms.",
    image:"./images/livermorium.jpeg"
  },
  117: {
    name: "Tennessine",
    symbol: "Ts",
    atomicNumber: 117,
    massNumber: 294,
    uses: "Research purposes",
    importance: "Provide insights into the nature of heavy atoms, atomic stability",
    image:"./images/tennessine.jpeg"
  },
  118: {
    name: "Oganesson",
    symbol: "Og",
    atomicNumber: 118,
    massNumber: 294,
    uses: "Research purposes",
    importance: "Heaviest element ever created and the only superheavy noble gas",
    image:"./images/oganesson.jpeg"
  },
  57: {
    name: "Lanthanum",
    symbol: "La",
    atomicNumber: 57,
    massNumber: 138,
    uses: "Petroleum refining, catalysts",
    importance: "Used in lighting and optical glass",
    image:"./images/lanthanum.jpeg"
  },
  58: {
    name: "Cerium",
    symbol: "Ce",
    atomicNumber: 58,
    massNumber: 140,
    uses: "Polishing powders, catalysts",
    importance: "Used in catalytic converters and glass polishing",
    image:"./images/cerium.jpeg"
  },
  59: {
    name: "Praseodymium",
    symbol: "Pr",
    atomicNumber: 59,
    massNumber: 141,
    uses: "Magnets, glass coloring",
    importance: "Used in magnets and high-performance alloys",
    image:"./images/praseodymium.jpeg"
  },
  60: {
    name: "Neodymium",
    symbol: "Nd",
    atomicNumber: 60,
    massNumber: 144,
    uses: "Powerful magnets, lasers",
    importance: "Used in high-strength magnets and lasers",
    image:"./images/neodymium.jpeg"
  },
  61: {
    name: "Promethium",
    symbol: "Pm",
    atomicNumber: 61,
    massNumber: 145,
    uses: "Radioactive power sources",
    importance: "Used in atomic batteries and energy production",
    image:"./images/promethium.jpeg"
  },
  62: {
    name: "Samarium",
    symbol: "Sm",
    atomicNumber: 62,
    massNumber: 150,
    uses: "Magnets, cancer treatment",
    importance: "Used in permanent magnets and cancer therapy",
    image:"./images/samarium.jpeg"
  },
  63: {
    name: "Europium",
    symbol: "Eu",
    atomicNumber: 63,
    massNumber: 152,
    uses: "Fluorescent lamps, phosphorescent paints",
    importance: "Used in phosphors for color TVs and fluorescent lamps",
    image:"./images/europium.jpeg"
  },
  64: {
    name: "Gadolinium",
    symbol: "Gd",
    atomicNumber: 64,
    massNumber: 157,
    uses: "MRI contrast agents, neutron radiography",
    importance: "Used in medical imaging and nuclear reactors",
    image:"./images/gadolinium.jpeg"
  },
  65: {
    name: "Terbium",
    symbol: "Tb",
    atomicNumber: 65,
    massNumber: 159,
    uses: "Green phosphors, fuel cells",
    importance: "Used in phosphors and in some green lighting",
    image:"./images/terbium.jpeg"
  },
  66: {
    name: "Dysprosium",
    symbol: "Dy",
    atomicNumber: 66,
    massNumber: 162,
    uses: "Permanent magnets, nuclear reactors",
    importance: "Used in high-performance magnets and nuclear control rods",
    image:"./images/dysprosium.jpeg"
  },
  67: {
    name: "Holmium",
    symbol: "Ho",
    atomicNumber: 67,
    massNumber: 164,
    uses: "Lasers, magnetic materials",
    importance: "Used in medical lasers and as a magnetic material",
    image:"./images/holmium.jpeg"
  },
  68: {
    name: "Erbium",
    symbol: "Er",
    atomicNumber: 68,
    massNumber: 167,
    uses: "Fiber optic technology, lasers",
    importance: "Used in fiber optic amplifiers and lasers",
    image:"./images/erbium.jpeg"
  },
  69: {
    name: "Thulium",
    symbol: "Tm",
    atomicNumber: 69,
    massNumber: 169,
    uses: "X-ray machines, lasers",
    importance: "Used in medical imaging and lasers",
    image:"./images2/thulium.jpeg"
  },
  70: {
    name: "Ytterbium",
    symbol: "Yb",
    atomicNumber: 70,
    massNumber: 173,
    uses: "Fiber lasers, nuclear reactors",
    importance: "Used in fiber lasers and in some types of nuclear reactors",
    image:"./images2/ytterbium.jpeg"
  },
  71: {
    name: "Lutetium",
    symbol: "Lu",
    atomicNumber: 71,
    massNumber: 175,
    uses: "Cancer treatment, catalysts",
    importance: "Used in cancer treatment and in catalytic processes",
    image:"./images/lutetium.jpeg"
  },
  89: {
    name: "Actinium",
    symbol: "Ac",
    atomicNumber: 89,
    massNumber: 227,
    uses: "Radiation therapy",
    importance: "Used in cancer treatment",
    image:"./images/actinium.jpeg"
  },
  90: {
    name: "Thorium",
    symbol: "Th",
    atomicNumber: 90,
    massNumber: 232,
    uses: "Nuclear fuel",
    importance: "Potential alternative to uranium in nuclear reactors",
    image:"./images2/thorium.jpeg"
  },
  91: {
    name: "Protactinium",
    symbol: "Pa",
    atomicNumber: 91,
    massNumber: 231,
    uses: "Nuclear reactors",
    importance: "Important in nuclear science",
    image:"./images/protactinium.jpeg"
  },
  92: {
    name: "Uranium",
    symbol: "U",
    atomicNumber: 92,
    massNumber: 238,
    uses: "Nuclear fuel, atomic bombs",
    importance: "Used in nuclear power generation",
    image:"./images/uranium.jpeg"
  },
  93: {
    name: "Neptunium",
    symbol: "Np",
    atomicNumber: 93,
    massNumber: 239,
    uses: "Nuclear reactors",
    importance: "First transuranic element",
    image:"./images/neptunium.jpeg"
  },
  94: {
    name: "Plutonium",
    symbol: "Pu",
    atomicNumber: 94,
    massNumber: 244,
    uses: "Nuclear weapons, power generation",
    importance: "Used in nuclear reactors and bombs",
    image:"./images/plutonium.jpeg"
  },
  95: {
    name: "Americium",
    symbol: "Am",
    atomicNumber: 95,
    massNumber: 243,
    uses: "Smoke detectors, ionization",
    importance: "Used in household smoke detectors",
    image:"./images/americium.jpeg"
  },
  96: {
    name: "Curium",
    symbol: "Cm",
    atomicNumber: 96,
    massNumber: 247,
    uses: "Nuclear research",
    importance: "Used in scientific research",
    image:"./images/curium.jpeg"
  },
  97: {
    name: "Berkelium",
    symbol: "Bk",
    atomicNumber: 97,
    massNumber: 247,
    uses: "Nuclear research",
    importance: "Used in creating other transuranic elements",
    image:"./images/berkelium.jpeg"
  },
  98: {
    name: "Californium",
    symbol: "Cf",
    atomicNumber: 98,
    massNumber: 251,
    uses: "Neutron sources, medical treatments",
    importance: "Used in neutron radiography and cancer treatment",
    image:"./images/californium.jpeg"
  },
  99: {
    name: "Einsteinium",
    symbol: "Es",
    atomicNumber: 99,
    massNumber: 252,
    uses: "Nuclear research",
    importance: "Named after Albert Einstein, used in scientific studies",
    image:"./images/Einsteinium.jpeg"
  },
  100: {
    name: "Fermium",
    symbol: "Fm",
    atomicNumber: 100,
    massNumber: 257,
    uses: "Nuclear research",
    importance: "Used in high-energy research",
    image:"./images/Fermium.jpeg"
  },
  101: {
    name: "Mendelevium",
    symbol: "Md",
    atomicNumber: 101,
    massNumber: 258,
    uses: "Nuclear research",
    importance: "Named after Dmitri Mendeleev, used in scientific experiments",
    image:"./images/Mendelevium.jpeg"
  },
  102: {
    name: "Nobelium",
    symbol: "No",
    atomicNumber: 102,
    massNumber: 259,
    uses: "Nuclear research",
    importance: "Used in experimental nuclear research",
    image:"./images/Nobelium.jpeg"
  },
  103: {
    name: "Lawrencium",
    symbol: "Lr",
    atomicNumber: 103,
    massNumber: 262,
    uses: "Nuclear research",
    importance: "Named after Ernest O. Lawrence, used in advanced nuclear studies",
    image:"./images/Lawrencium.jpeg"
  },
};
// Reference elements
const modal = document.getElementById("modal");
const closeModal = document.getElementById("close");
const elementName = document.getElementById("element-name");
const elementSymbol = document.getElementById("element-symbol");
const atomicNumber = document.getElementById("atomic-number");
const massNumber = document.getElementById("mass-number");
const uses = document.getElementById("uses");
const importance = document.getElementById("importance");
const elementImage = document.getElementById("element-image");
const searchInput = document.getElementById("search");
const elements= document.querySelectorAll("td[data-index]");

elements.forEach((element) => {
  element.addEventListener("click", (event) => {
      const elementId = element.getAttribute("data-index");
      const data = elementsdata[elementId];

      if (data) {
          elementName.textContent = data.name;
          elementSymbol.textContent = data.symbol;
          atomicNumber.textContent = data.atomicNumber;
          massNumber.textContent = data.massNumber;
          uses.textContent = data.uses;
          importance.textContent = data.importance;
          elementImage.src = data.image;
          elementImage.alt = data.name;

          // Center the modal
          modal.style.display = "block";
      }
  });
});

closeModal.addEventListener("click", () => {
  modal.style.display = "none";
});

window.addEventListener("click", (e) => {
  if (e.target === modal) {
      modal.style.display = "none";
  }
});
document.querySelectorAll("td").forEach(cell => {
  if (!cell.classList.contains("blank") && !cell.classList.contains("empty-placeholder")) {
    cell.style.backgroundColor = "desiredColor"; // Change only actual elements
  }
});


searchInput.addEventListener("input", (event) => {
  const query = event.target.value.toLowerCase();
  elements.forEach((element) => {
    const symbol = element.querySelector("div").textContent.toLowerCase();
    const atomicNumber = element.querySelector("small").textContent.toLowerCase();
    
    const elementId = element.getAttribute("data-index");
    const elementData = elementsdata[elementId];
    const name = elementData ? elementData.name.toLowerCase() : "";

    if (symbol.includes(query) || name.includes(query) || atomicNumber.includes(query)) {
      element.style.display = ""; // Show the element
    } else {
      element.style.display = "none"; // Hide the element
    }
  });
})
