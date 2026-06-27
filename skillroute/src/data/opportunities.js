const opportunities = [
  {
    id: 1,

    name: "Oyster Mushroom Farming",

    category: "Agriculture",

    tags: [
      "Low Investment",
      "Beginner Friendly",
      "Part Time",
      "Agriculture",
      "Northeast"
    ],

    scoreFactors: {
      skills: [
        "Basic Farming",
        "Gardening"
      ],

      assets: [
        "Land",
        "Small Room",
        "Water Supply"
      ],

      states: [
        "Assam",
        "Meghalaya",
        "Nagaland",
        "Tripura",
        "Mizoram",
        "Arunachal Pradesh",
        "Manipur",
        "Sikkim"
      ],

      startupCost: 1,   // 1 = Low, 2 = Medium, 3 = High
      time: 4,          // Hours/day required
      risk: 1,          // 1 = Low, 2 = Medium, 3 = High
      difficulty: 1     // 1 = Easy, 2 = Medium, 3 = Hard
    },

    details: {
      description:
        "Grow oyster mushrooms using agricultural waste with low investment.",

      estimatedIncome: {
        month1: "₹3,000 - ₹6,000",
        month3: "₹10,000 - ₹20,000",
        month6: "₹20,000 - ₹40,000"
      },

      first100Challenge: [
        "Buy mushroom spawn",
        "Prepare growing bags",
        "Sell your first batch locally"
      ],

      roadmap: {
        week1: "Learn mushroom cultivation and purchase materials.",
        week2: "Prepare growing bags and inoculate mushroom spawn.",
        week3: "Maintain humidity and monitor growth.",
        week4: "Harvest and sell to local buyers."
      }
    }
  },

  {
  id: 2,

  name: "Fish Farming",

  category: "Agriculture",

  tags: [
    "Medium Investment",
    "Agriculture",
    "Northeast",
    "Rural Business"
  ],

  scoreFactors: {
    skills: [
      "Basic Farming",
      "Aquaculture"
    ],

    assets: [
      "Pond",
      "Water Source"
    ],

    states: [
      "Assam",
      "Tripura",
      "Meghalaya",
      "Manipur",
      "Nagaland",
      "Arunachal Pradesh",
      "Mizoram",
      "Sikkim"
    ],

    startupCost: 2,
    time: 4,
    risk: 2,
    difficulty: 2
  },

  details: {
    description:
      "Rear freshwater fish in ponds and sell to local markets and wholesalers.",

    estimatedIncome: {
      month1: "₹0 - ₹2,000",
      month3: "₹10,000 - ₹20,000",
      month6: "₹30,000 - ₹60,000"
    },

    first100Challenge: [
      "Identify a suitable pond",
      "Contact a local fish seed supplier",
      "Prepare a basic farming budget"
    ],

    roadmap: {
      week1: "Prepare pond and arrange fish seed.",
      week2: "Stock fingerlings and begin feeding.",
      week3: "Monitor water quality and fish growth.",
      week4: "Plan marketing and future harvest."
    }
  }
},

{
  id: 3,

  name: "Organic Vegetable Farming",

  category: "Agriculture",

  tags: [
    "Low Investment",
    "Beginner Friendly",
    "Organic",
    "Agriculture"
  ],

  scoreFactors: {
    skills: [
      "Basic Farming",
      "Gardening"
    ],

    assets: [
      "Land",
      "Water Supply"
    ],

    states: [
      "Assam",
      "Meghalaya",
      "Tripura",
      "Nagaland",
      "Arunachal Pradesh",
      "Manipur",
      "Mizoram",
      "Sikkim"
    ],

    startupCost: 1,
    time: 4,
    risk: 1,
    difficulty: 1
  },

  details: {
    description:
      "Grow chemical-free vegetables and sell directly to consumers and local markets.",

    estimatedIncome: {
      month1: "₹2,000 - ₹5,000",
      month3: "₹8,000 - ₹15,000",
      month6: "₹15,000 - ₹30,000"
    },

    first100Challenge: [
      "Prepare a small vegetable bed",
      "Purchase organic seeds",
      "Sell vegetables to one local customer"
    ],

    roadmap: {
      week1: "Prepare land and purchase seeds.",
      week2: "Plant vegetables.",
      week3: "Maintain crops using organic methods.",
      week4: "Harvest and sell locally."
    }
  }
},

{
  id: 4,

  name: "Poultry Farming",

  category: "Agriculture",

  tags: [
    "Medium Investment",
    "Agriculture",
    "Livestock",
    "Rural Business"
  ],

  scoreFactors: {
    skills: [
      "Animal Care",
      "Basic Farming"
    ],

    assets: [
      "Small Shed",
      "Open Space",
      "Water Supply"
    ],

    states: [
      "Assam",
      "Meghalaya",
      "Nagaland",
      "Tripura",
      "Manipur",
      "Mizoram",
      "Arunachal Pradesh",
      "Sikkim"
    ],

    startupCost: 2,
    time: 5,
    risk: 2,
    difficulty: 2
  },

  details: {
    description:
      "Raise chickens for eggs and meat to supply local markets.",

    estimatedIncome: {
      month1: "₹0 - ₹2,000",
      month3: "₹8,000 - ₹15,000",
      month6: "₹20,000 - ₹40,000"
    },

    first100Challenge: [
      "Prepare poultry shed",
      "Purchase chicks",
      "Arrange feed supplier"
    ],

    roadmap: {
      week1: "Prepare shelter and equipment.",
      week2: "Purchase chicks and begin feeding.",
      week3: "Maintain hygiene and health.",
      week4: "Start local marketing."
    }
  }
},

{
  id: 5,

  name: "Goat Farming",

  category: "Agriculture",

  tags: [
    "Medium Investment",
    "Livestock",
    "Rural Business"
  ],

  scoreFactors: {
    skills: [
      "Animal Care"
    ],

    assets: [
      "Land",
      "Shelter"
    ],

    states: [
      "Assam",
      "Meghalaya",
      "Nagaland",
      "Tripura",
      "Manipur",
      "Mizoram",
      "Arunachal Pradesh",
      "Sikkim"
    ],

    startupCost: 2,
    time: 3,
    risk: 2,
    difficulty: 2
  },

  details: {
    description:
      "Raise goats for meat and breeding with moderate investment.",

    estimatedIncome: {
      month1: "₹0 - ₹2,000",
      month3: "₹5,000 - ₹12,000",
      month6: "₹20,000 - ₹45,000"
    },

    first100Challenge: [
      "Build a small shelter",
      "Buy healthy goats",
      "Identify local buyers"
    ],

    roadmap: {
      week1: "Prepare shelter.",
      week2: "Purchase goats.",
      week3: "Maintain feeding schedule.",
      week4: "Network with livestock buyers."
    }
  }
},

{
  id: 6,

  name: "Dairy Farming",

  category: "Agriculture",

  tags: [
    "Livestock",
    "Daily Income",
    "Agriculture"
  ],

  scoreFactors: {
    skills: [
      "Animal Care"
    ],

    assets: [
      "Cattle Shed",
      "Water Supply"
    ],

    states: [
      "Assam",
      "Meghalaya",
      "Tripura",
      "Nagaland",
      "Manipur",
      "Mizoram",
      "Arunachal Pradesh",
      "Sikkim"
    ],

    startupCost: 3,
    time: 6,
    risk: 2,
    difficulty: 2
  },

  details: {
    description:
      "Produce and sell fresh milk and dairy products.",

    estimatedIncome: {
      month1: "₹5,000 - ₹10,000",
      month3: "₹15,000 - ₹30,000",
      month6: "₹30,000 - ₹60,000"
    },

    first100Challenge: [
      "Identify milk collection centers",
      "Purchase dairy cattle",
      "Arrange daily feed"
    ],

    roadmap: {
      week1: "Prepare cattle shed.",
      week2: "Purchase cattle.",
      week3: "Start milk production.",
      week4: "Supply milk locally."
    }
  }
},

{
  id: 7,

  name: "Beekeeping",

  category: "Agriculture",

  tags: [
    "Low Investment",
    "Honey Production",
    "Agriculture"
  ],

  scoreFactors: {
    skills: [
      "Basic Farming"
    ],

    assets: [
      "Open Space"
    ],

    states: [
      "Assam",
      "Meghalaya",
      "Nagaland",
      "Tripura",
      "Manipur",
      "Mizoram",
      "Arunachal Pradesh",
      "Sikkim"
    ],

    startupCost: 1,
    time: 2,
    risk: 1,
    difficulty: 2
  },

  details: {
    description:
      "Produce natural honey and beeswax products.",

    estimatedIncome: {
      month1: "₹1,000 - ₹3,000",
      month3: "₹8,000 - ₹15,000",
      month6: "₹20,000 - ₹35,000"
    },

    first100Challenge: [
      "Purchase one bee box",
      "Learn bee handling",
      "Sell first honey bottles"
    ],

    roadmap: {
      week1: "Learn beekeeping basics.",
      week2: "Set up bee boxes.",
      week3: "Maintain colonies.",
      week4: "Package and sell honey."
    }
  }
},

{
  id: 8,

  name: "Areca Nut Processing",

  category: "Agriculture",

  tags: [
    "Northeast",
    "Processing",
    "Agriculture"
  ],

  scoreFactors: {
    skills: [
      "Basic Farming"
    ],

    assets: [
      "Drying Space",
      "Storage Area"
    ],

    states: [
      "Assam",
      "Tripura",
      "Meghalaya"
    ],

    startupCost: 2,
    time: 4,
    risk: 2,
    difficulty: 2
  },

  details: {
    description:
      "Process and package areca nuts for wholesale and retail markets.",

    estimatedIncome: {
      month1: "₹3,000 - ₹8,000",
      month3: "₹15,000 - ₹30,000",
      month6: "₹30,000 - ₹70,000"
    },

    first100Challenge: [
      "Source raw areca nuts",
      "Prepare drying area",
      "Contact one local buyer"
    ],

    roadmap: {
      week1: "Collect raw materials.",
      week2: "Dry and process nuts.",
      week3: "Package products.",
      week4: "Sell to traders."
    }
  }
},

{
  id: 9,

  name: "Bamboo Crafts",

  category: "Artisan & Handicrafts",

  tags: [
    "Northeast",
    "Handmade",
    "Eco-Friendly",
    "Beginner Friendly"
  ],

  scoreFactors: {
    skills: [
      "Craft Making",
      "Woodworking"
    ],

    assets: [
      "Bamboo",
      "Basic Tools",
      "Workspace"
    ],

    states: [
      "Assam",
      "Meghalaya",
      "Nagaland",
      "Tripura",
      "Mizoram",
      "Arunachal Pradesh",
      "Manipur",
      "Sikkim"
    ],

    startupCost: 1,
    time: 4,
    risk: 1,
    difficulty: 2
  },

  details: {
    description:
      "Create bamboo products such as baskets, lamps, furniture, and decorative items.",

    estimatedIncome: {
      month1: "₹2,000 - ₹5,000",
      month3: "₹10,000 - ₹20,000",
      month6: "₹20,000 - ₹40,000"
    },

    first100Challenge: [
      "Create one bamboo product",
      "Photograph it",
      "List it online or sell locally"
    ],

    roadmap: {
      week1: "Collect bamboo and tools.",
      week2: "Learn basic designs.",
      week3: "Make sample products.",
      week4: "Sell through local markets and social media."
    }
  }
},

{
  id: 10,

  name: "Cane Furniture",

  category: "Artisan & Handicrafts",

  tags: [
    "Furniture",
    "Handmade",
    "Northeast"
  ],

  scoreFactors: {
    skills: [
      "Furniture Making",
      "Craft Making"
    ],

    assets: [
      "Cane",
      "Workshop",
      "Hand Tools"
    ],

    states: [
      "Assam",
      "Meghalaya",
      "Nagaland",
      "Tripura",
      "Mizoram",
      "Arunachal Pradesh",
      "Manipur"
    ],

    startupCost: 2,
    time: 6,
    risk: 2,
    difficulty: 3
  },

  details: {
    description:
      "Build handcrafted cane furniture for homes, cafés, and resorts.",

    estimatedIncome: {
      month1: "₹5,000 - ₹10,000",
      month3: "₹20,000 - ₹40,000",
      month6: "₹40,000 - ₹80,000"
    },

    first100Challenge: [
      "Build one stool",
      "Photograph your work",
      "Contact one local furniture shop"
    ],

    roadmap: {
      week1: "Learn furniture designs.",
      week2: "Create sample furniture.",
      week3: "Improve finishing.",
      week4: "Sell locally."
    }
  }
},

{
  id: 11,

  name: "Eri Silk Products",

  category: "Artisan & Handicrafts",

  tags: [
    "Traditional",
    "Northeast",
    "Handmade",
    "Textile"
  ],

  scoreFactors: {
    skills: [
      "Weaving",
      "Craft Making"
    ],

    assets: [
      "Loom",
      "Silk Material"
    ],

    states: [
      "Assam",
      "Meghalaya"
    ],

    startupCost: 2,
    time: 5,
    risk: 1,
    difficulty: 2
  },

  details: {
    description:
      "Produce scarves, shawls, and garments using traditional Eri silk.",

    estimatedIncome: {
      month1: "₹3,000 - ₹8,000",
      month3: "₹15,000 - ₹30,000",
      month6: "₹30,000 - ₹60,000"
    },

    first100Challenge: [
      "Create one silk product",
      "Photograph it",
      "Sell through local exhibitions"
    ],

    roadmap: {
      week1: "Collect raw materials.",
      week2: "Begin weaving.",
      week3: "Finish products.",
      week4: "Sell online and offline."
    }
  }
},

{
  id: 12,

  name: "Handmade Jewellery",

  category: "Artisan & Handicrafts",

  tags: [
    "Creative",
    "Handmade",
    "Online Business",
    "Low Investment"
  ],

  scoreFactors: {
    skills: [
      "Craft Making",
      "Jewellery Design"
    ],

    assets: [
      "Jewellery Tools",
      "Workspace"
    ],

    states: [
      "All"
    ],

    startupCost: 1,
    time: 3,
    risk: 1,
    difficulty: 1
  },

  details: {
    description:
      "Design handmade jewellery using beads, resin, clay, and metal.",

    estimatedIncome: {
      month1: "₹2,000 - ₹6,000",
      month3: "₹10,000 - ₹20,000",
      month6: "₹20,000 - ₹40,000"
    },

    first100Challenge: [
      "Create one jewellery set",
      "Photograph it",
      "Sell through Instagram or local shops"
    ],

    roadmap: {
      week1: "Purchase materials.",
      week2: "Create samples.",
      week3: "Build catalogue.",
      week4: "Begin selling."
    }
  }
},

{
  id: 13,

  name: "Pottery & Clay Products",

  category: "Artisan & Handicrafts",

  tags: [
    "Traditional",
    "Handmade",
    "Eco-Friendly"
  ],

  scoreFactors: {
    skills: [
      "Pottery",
      "Craft Making"
    ],

    assets: [
      "Clay",
      "Pottery Wheel",
      "Workspace"
    ],

    states: [
      "All"
    ],

    startupCost: 2,
    time: 5,
    risk: 2,
    difficulty: 2
  },

  details: {
    description:
      "Create clay pots, planters, cups, and decorative products.",

    estimatedIncome: {
      month1: "₹2,000 - ₹5,000",
      month3: "₹10,000 - ₹20,000",
      month6: "₹20,000 - ₹45,000"
    },

    first100Challenge: [
      "Create three clay products",
      "Photograph them",
      "Sell locally"
    ],

    roadmap: {
      week1: "Arrange materials.",
      week2: "Create sample products.",
      week3: "Improve designs.",
      week4: "Sell through local exhibitions."
    }
  }
},

{
  id: 14,

  name: "Tiffin Service",

  category: "Food & Home Business",

  tags: [
    "Low Investment",
    "Women Friendly",
    "Student Friendly",
    "Part Time"
  ],

  scoreFactors: {
    skills: [
      "Cooking"
    ],

    assets: [
      "Kitchen"
    ],

    states: [
      "All"
    ],

    startupCost: 1,
    time: 4,
    risk: 1,
    difficulty: 1
  },

  details: {
    description:
      "Prepare homemade meals and deliver them to students, offices, and working professionals.",

    estimatedIncome: {
      month1: "₹3,000 - ₹8,000",
      month3: "₹10,000 - ₹25,000",
      month6: "₹20,000 - ₹50,000"
    },

    first100Challenge: [
      "Cook one meal",
      "Offer it to a neighbour",
      "Get your first paying customer"
    ],

    roadmap: {
      week1: "Plan menu and calculate cost.",
      week2: "Cook sample meals.",
      week3: "Promote through WhatsApp.",
      week4: "Start daily deliveries."
    }
  }
},

{
  id: 15,

  name: "Homemade Pickles",

  category: "Food & Home Business",

  tags: [
    "Low Investment",
    "Homemade",
    "Women Friendly"
  ],

  scoreFactors: {
    skills: [
      "Cooking",
      "Food Processing"
    ],

    assets: [
      "Kitchen",
      "Storage Area"
    ],

    states: [
      "All"
    ],

    startupCost: 1,
    time: 2,
    risk: 1,
    difficulty: 1
  },

  details: {
    description:
      "Prepare homemade pickles and sell locally or online.",

    estimatedIncome: {
      month1: "₹2,000 - ₹5,000",
      month3: "₹8,000 - ₹15,000",
      month6: "₹20,000 - ₹35,000"
    },

    first100Challenge: [
      "Prepare one pickle batch",
      "Package it",
      "Sell your first bottle"
    ],

    roadmap: {
      week1: "Buy ingredients.",
      week2: "Prepare pickles.",
      week3: "Package products.",
      week4: "Sell locally."
    }
  }
},

{
  id: 16,

  name: "Bakery",

  category: "Food & Home Business",

  tags: [
    "Creative",
    "Food Business"
  ],

  scoreFactors: {
    skills: [
      "Baking"
    ],

    assets: [
      "Kitchen"
    ],

    states: [
      "All"
    ],

    startupCost: 2,
    time: 5,
    risk: 2,
    difficulty: 2
  },

  details: {
    description:
      "Bake cakes, cookies, and breads for local customers.",

    estimatedIncome: {
      month1: "₹5,000 - ₹10,000",
      month3: "₹15,000 - ₹30,000",
      month6: "₹30,000 - ₹60,000"
    },

    first100Challenge: [
      "Bake one cake",
      "Photograph it",
      "Sell your first order"
    ],

    roadmap: {
      week1: "Practice recipes.",
      week2: "Create sample products.",
      week3: "Promote online.",
      week4: "Accept customer orders."
    }
  }
},

{
  id: 17,

  name: "Tea Stall / Café",

  category: "Food & Home Business",

  tags: [
    "Daily Income",
    "Food Business"
  ],

  scoreFactors: {
    skills: [
      "Cooking"
    ],

    assets: [
      "Shop"
    ],

    states: [
      "All"
    ],

    startupCost: 2,
    time: 8,
    risk: 2,
    difficulty: 2
  },

  details: {
    description:
      "Run a tea stall or small café serving beverages and snacks.",

    estimatedIncome: {
      month1: "₹8,000 - ₹15,000",
      month3: "₹20,000 - ₹40,000",
      month6: "₹40,000 - ₹70,000"
    },

    first100Challenge: [
      "Serve your first customer",
      "Collect feedback",
      "Improve menu"
    ],

    roadmap: {
      week1: "Arrange stall and equipment.",
      week2: "Finalize menu.",
      week3: "Launch business.",
      week4: "Build regular customers."
    }
  }
},

{
  id: 18,

  name: "Spice Powder Business",

  category: "Food & Home Business",

  tags: [
    "Low Investment",
    "Homemade"
  ],

  scoreFactors: {
    skills: [
      "Food Processing"
    ],

    assets: [
      "Kitchen",
      "Storage Area"
    ],

    states: [
      "All"
    ],

    startupCost: 1,
    time: 3,
    risk: 1,
    difficulty: 1
  },

  details: {
    description:
      "Prepare and package fresh spice powders for retail sale.",

    estimatedIncome: {
      month1: "₹2,000 - ₹5,000",
      month3: "₹10,000 - ₹20,000",
      month6: "₹20,000 - ₹40,000"
    },

    first100Challenge: [
      "Prepare one spice packet",
      "Package it",
      "Sell locally"
    ],

    roadmap: {
      week1: "Purchase raw spices.",
      week2: "Grind and package.",
      week3: "Design labels.",
      week4: "Start selling."
    }
  }
},

{
  id: 19,

  name: "Homemade Snacks",

  category: "Food & Home Business",

  tags: [
    "Low Investment",
    "Women Friendly",
    "Part Time"
  ],

  scoreFactors: {
    skills: [
      "Cooking"
    ],

    assets: [
      "Kitchen"
    ],

    states: [
      "All"
    ],

    startupCost: 1,
    time: 3,
    risk: 1,
    difficulty: 1
  },

  details: {
    description:
      "Prepare snacks such as chips, namkeen, and sweets for local markets.",

    estimatedIncome: {
      month1: "₹2,000 - ₹5,000",
      month3: "₹10,000 - ₹20,000",
      month6: "₹20,000 - ₹40,000"
    },

    first100Challenge: [
      "Prepare one snack item",
      "Package it",
      "Sell to five customers"
    ],

    roadmap: {
      week1: "Select products.",
      week2: "Prepare samples.",
      week3: "Package attractively.",
      week4: "Sell locally."
    }
  }
},

{
  id: 20,

  name: "Tutoring Services",

  category: "Services",

  tags: [
    "Student Friendly",
    "Part Time",
    "Low Investment"
  ],

  scoreFactors: {
    skills: [
      "Teaching"
    ],

    assets: [
      "Laptop",
      "Internet Connection"
    ],

    states: [
      "All"
    ],

    startupCost: 1,
    time: 3,
    risk: 1,
    difficulty: 1
  },

  details: {
    description:
      "Teach school subjects, coding, languages, or competitive exam preparation online or offline.",

    estimatedIncome: {
      month1: "₹3,000 - ₹8,000",
      month3: "₹10,000 - ₹20,000",
      month6: "₹20,000 - ₹50,000"
    },

    first100Challenge: [
      "Teach one demo class",
      "Get your first student",
      "Earn your first tuition fee"
    ],

    roadmap: {
      week1: "Choose subjects and prepare notes.",
      week2: "Advertise locally and online.",
      week3: "Conduct demo classes.",
      week4: "Convert demos into paid students."
    }
  }
},

{
  id: 21,

  name: "Repair Services",

  category: "Services",

  tags: [
    "Technical",
    "Local Business"
  ],

  scoreFactors: {
    skills: [
      "Repairing"
    ],

    assets: [
      "Basic Tools",
      "Workspace"
    ],

    states: [
      "All"
    ],

    startupCost: 2,
    time: 5,
    risk: 2,
    difficulty: 2
  },

  details: {
    description:
      "Repair mobile phones, laptops, and small electronic appliances.",

    estimatedIncome: {
      month1: "₹5,000 - ₹10,000",
      month3: "₹15,000 - ₹30,000",
      month6: "₹30,000 - ₹60,000"
    },

    first100Challenge: [
      "Repair one device",
      "Ask for a review",
      "Get one referral"
    ],

    roadmap: {
      week1: "Arrange tools.",
      week2: "Practice repairs.",
      week3: "Advertise locally.",
      week4: "Build repeat customers."
    }
  }
},

{
  id: 22,

  name: "Tailoring & Alterations",

  category: "Services",

  tags: [
    "Women Friendly",
    "Creative",
    "Local Business"
  ],

  scoreFactors: {
    skills: [
      "Tailoring"
    ],

    assets: [
      "Sewing Machine",
      "Workspace"
    ],

    states: [
      "All"
    ],

    startupCost: 2,
    time: 5,
    risk: 1,
    difficulty: 2
  },

  details: {
    description:
      "Offer tailoring, stitching, and clothing alteration services.",

    estimatedIncome: {
      month1: "₹4,000 - ₹8,000",
      month3: "₹15,000 - ₹25,000",
      month6: "₹25,000 - ₹50,000"
    },

    first100Challenge: [
      "Complete one stitching order",
      "Collect customer feedback",
      "Get a referral"
    ],

    roadmap: {
      week1: "Set up workspace.",
      week2: "Take first orders.",
      week3: "Promote locally.",
      week4: "Expand customer base."
    }
  }
},

{
  id: 23,

  name: "Photography & Videography",

  category: "Services",

  tags: [
    "Creative",
    "Freelance"
  ],

  scoreFactors: {
    skills: [
      "Photography"
    ],

    assets: [
      "Camera",
      "Laptop"
    ],

    states: [
      "All"
    ],

    startupCost: 3,
    time: 5,
    risk: 2,
    difficulty: 2
  },

  details: {
    description:
      "Capture photos and videos for events, businesses, and social media.",

    estimatedIncome: {
      month1: "₹5,000 - ₹10,000",
      month3: "₹20,000 - ₹40,000",
      month6: "₹40,000 - ₹80,000"
    },

    first100Challenge: [
      "Shoot one portfolio project",
      "Post it online",
      "Get your first client"
    ],

    roadmap: {
      week1: "Build portfolio.",
      week2: "Offer free sample shoots.",
      week3: "Market on social media.",
      week4: "Book paid projects."
    }
  }
},

{
  id: 24,

  name: "Event Planning & Decoration",

  category: "Services",

  tags: [
    "Creative",
    "Team Based"
  ],

  scoreFactors: {
    skills: [
      "Event Management"
    ],

    assets: [
      "Vehicle",
      "Basic Tools"
    ],

    states: [
      "All"
    ],

    startupCost: 2,
    time: 6,
    risk: 2,
    difficulty: 2
  },

  details: {
    description:
      "Plan and decorate birthday parties, weddings, and local events.",

    estimatedIncome: {
      month1: "₹5,000 - ₹12,000",
      month3: "₹20,000 - ₹40,000",
      month6: "₹50,000 - ₹1,00,000"
    },

    first100Challenge: [
      "Decorate one small event",
      "Take photos",
      "Get your first referral"
    ],

    roadmap: {
      week1: "Create decoration samples.",
      week2: "Build a portfolio.",
      week3: "Market locally.",
      week4: "Book your first event."
    }
  }
},

{
  id: 25,

  name: "Graphic Design",

  category: "Digital",

  tags: [
    "Online",
    "Creative",
    "Student Friendly",
    "Freelance"
  ],

  scoreFactors: {
    skills: [
      "Graphic Design"
    ],

    assets: [
      "Laptop",
      "Internet Connection"
    ],

    states: [
      "All"
    ],

    startupCost: 1,
    time: 4,
    risk: 1,
    difficulty: 2
  },

  details: {
    description:
      "Create logos, posters, social media creatives, and branding materials for clients.",

    estimatedIncome: {
      month1: "₹3,000 - ₹8,000",
      month3: "₹15,000 - ₹30,000",
      month6: "₹30,000 - ₹70,000"
    },

    first100Challenge: [
      "Design one poster",
      "Upload your portfolio",
      "Get your first freelance client"
    ],

    roadmap: {
      week1: "Learn Canva/Figma.",
      week2: "Build portfolio.",
      week3: "Join freelance platforms.",
      week4: "Get first client."
    }
  }
},

{
  id: 26,

  name: "Video Editing",

  category: "Digital",

  tags: [
    "Online",
    "Creative",
    "Freelance"
  ],

  scoreFactors: {
    skills: [
      "Video Editing"
    ],

    assets: [
      "Laptop",
      "Internet Connection"
    ],

    states: [
      "All"
    ],

    startupCost: 1,
    time: 5,
    risk: 1,
    difficulty: 2
  },

  details: {
    description:
      "Edit YouTube videos, reels, advertisements, and promotional content.",

    estimatedIncome: {
      month1: "₹3,000 - ₹10,000",
      month3: "₹15,000 - ₹35,000",
      month6: "₹30,000 - ₹80,000"
    },

    first100Challenge: [
      "Edit one sample video",
      "Create portfolio",
      "Get one paid project"
    ],

    roadmap: {
      week1: "Learn editing software.",
      week2: "Create demo videos.",
      week3: "Upload portfolio.",
      week4: "Find clients."
    }
  }
},

{
  id: 27,

  name: "Web Development",

  category: "Digital",

  tags: [
    "Online",
    "Freelance",
    "Student Friendly"
  ],

  scoreFactors: {
    skills: [
      "Web Development"
    ],

    assets: [
      "Laptop",
      "Internet Connection"
    ],

    states: [
      "All"
    ],

    startupCost: 1,
    time: 5,
    risk: 1,
    difficulty: 3
  },

  details: {
    description:
      "Build websites and web applications for businesses and startups.",

    estimatedIncome: {
      month1: "₹5,000 - ₹15,000",
      month3: "₹20,000 - ₹50,000",
      month6: "₹50,000 - ₹1,00,000"
    },

    first100Challenge: [
      "Build one website",
      "Host it online",
      "Get one client"
    ],

    roadmap: {
      week1: "Build portfolio.",
      week2: "Deploy projects.",
      week3: "Create freelancer profile.",
      week4: "Start client outreach."
    }
  }
},

{
  id: 28,

  name: "App Development",

  category: "Digital",

  tags: [
    "Online",
    "Freelance"
  ],

  scoreFactors: {
    skills: [
      "App Development"
    ],

    assets: [
      "Laptop",
      "Internet Connection"
    ],

    states: [
      "All"
    ],

    startupCost: 1,
    time: 5,
    risk: 1,
    difficulty: 3
  },

  details: {
    description:
      "Develop Android and iOS applications for businesses and startups.",

    estimatedIncome: {
      month1: "₹5,000 - ₹15,000",
      month3: "₹20,000 - ₹60,000",
      month6: "₹50,000 - ₹1,20,000"
    },

    first100Challenge: [
      "Build one mobile app",
      "Publish demo",
      "Get first client"
    ],

    roadmap: {
      week1: "Learn framework.",
      week2: "Build MVP.",
      week3: "Publish demo.",
      week4: "Acquire clients."
    }
  }
},

{
  id: 29,

  name: "AI Engineering",

  category: "Digital",

  tags: [
    "AI",
    "Online",
    "High Income"
  ],

  scoreFactors: {
    skills: [
      "AI Engineering"
    ],

    assets: [
      "Laptop",
      "Internet Connection"
    ],

    states: [
      "All"
    ],

    startupCost: 1,
    time: 6,
    risk: 2,
    difficulty: 3
  },

  details: {
    description:
      "Build AI applications, chatbots, automation systems, and intelligent tools for businesses.",

    estimatedIncome: {
      month1: "₹5,000 - ₹20,000",
      month3: "₹30,000 - ₹80,000",
      month6: "₹80,000 - ₹2,00,000"
    },

    first100Challenge: [
      "Build one AI project",
      "Deploy it",
      "Get one paying client"
    ],

    roadmap: {
      week1: "Choose AI stack.",
      week2: "Build project.",
      week3: "Deploy online.",
      week4: "Client outreach."
    }
  }
},

{
  id: 30,

  name: "Machine Learning Engineering",

  category: "Digital",

  tags: [
    "AI",
    "Online"
  ],

  scoreFactors: {
    skills: [
      "Machine Learning"
    ],

    assets: [
      "Laptop",
      "Internet Connection"
    ],

    states: [
      "All"
    ],

    startupCost: 1,
    time: 6,
    risk: 2,
    difficulty: 3
  },

  details: {
    description:
      "Develop predictive models and machine learning solutions for companies.",

    estimatedIncome: {
      month1: "₹5,000 - ₹20,000",
      month3: "₹30,000 - ₹80,000",
      month6: "₹80,000 - ₹2,00,000"
    },

    first100Challenge: [
      "Build one ML model",
      "Publish on GitHub",
      "Get first freelance task"
    ],

    roadmap: {
      week1: "Collect dataset.",
      week2: "Train model.",
      week3: "Deploy project.",
      week4: "Market skills."
    }
  }
},

{
  id: 31,

  name: "Freelancing",

  category: "Digital",

  tags: [
    "Online",
    "Student Friendly",
    "Remote Work",
    "Flexible"
  ],

  scoreFactors: {
    skills: [
      "Freelancing"
    ],

    assets: [
      "Laptop",
      "Internet Connection"
    ],

    states: [
      "All"
    ],

    startupCost: 1,
    time: 4,
    risk: 2,
    difficulty: 2
  },

  details: {
    description:
      "Offer professional services such as writing, programming, designing, consulting, or virtual assistance to clients worldwide.",

    estimatedIncome: {
      month1: "₹3,000 - ₹10,000",
      month3: "₹20,000 - ₹50,000",
      month6: "₹50,000 - ₹1,00,000"
    },

    first100Challenge: [
      "Create a portfolio",
      "Register on a freelancing platform",
      "Send your first five proposals"
    ],

    roadmap: {
      week1: "Identify your service and build a portfolio.",
      week2: "Create freelancing profiles.",
      week3: "Apply to projects daily.",
      week4: "Complete your first paid project."
    }
  }
},

{
  id: 32,

  name: "Content Creation",

  category: "Digital",

  tags: [
    "Creative",
    "Online",
    "Personal Brand"
  ],

  scoreFactors: {
    skills: [
      "Content Creation"
    ],

    assets: [
      "Smartphone",
      "Internet Connection"
    ],

    states: [
      "All"
    ],

    startupCost: 1,
    time: 4,
    risk: 2,
    difficulty: 2
  },

  details: {
    description:
      "Create educational, entertainment, or informative content for YouTube, Instagram, LinkedIn, or blogs.",

    estimatedIncome: {
      month1: "₹0 - ₹5,000",
      month3: "₹10,000 - ₹40,000",
      month6: "₹30,000 - ₹1,00,000"
    },

    first100Challenge: [
      "Publish your first content",
      "Reach 100 views",
      "Create consistently for one week"
    ],

    roadmap: {
      week1: "Choose your niche.",
      week2: "Create and publish content.",
      week3: "Improve quality using feedback.",
      week4: "Monetize through collaborations."
    }
  }
},

{
  id: 33,

  name: "UI/UX Design",

  category: "Digital",

  tags: [
    "Creative",
    "Online",
    "Freelance",
    "High Demand"
  ],

  scoreFactors: {
    skills: [
      "UI/UX Design"
    ],

    assets: [
      "Laptop",
      "Internet Connection"
    ],

    states: [
      "All"
    ],

    startupCost: 1,
    time: 5,
    risk: 1,
    difficulty: 2
  },

  details: {
    description:
      "Design intuitive websites and mobile app interfaces for startups and businesses.",

    estimatedIncome: {
      month1: "₹5,000 - ₹15,000",
      month3: "₹20,000 - ₹60,000",
      month6: "₹50,000 - ₹1,20,000"
    },

    first100Challenge: [
      "Design one mobile app screen",
      "Publish it on Behance",
      "Share your portfolio"
    ],

    roadmap: {
      week1: "Learn Figma fundamentals.",
      week2: "Design sample projects.",
      week3: "Build an online portfolio.",
      week4: "Apply for freelance gigs."
    }
  }
},

{
  id: 34,

  name: "Prompt Engineering",

  category: "Digital",

  tags: [
    "AI",
    "Online",
    "Future Ready",
    "High Demand"
  ],

  scoreFactors: {
    skills: [
      "Prompt Engineering"
    ],

    assets: [
      "Laptop",
      "Internet Connection"
    ],

    states: [
      "All"
    ],

    startupCost: 1,
    time: 4,
    risk: 1,
    difficulty: 2
  },

  details: {
    description:
      "Design effective prompts and AI workflows for businesses, creators, and AI-powered applications.",

    estimatedIncome: {
      month1: "₹5,000 - ₹15,000",
      month3: "₹25,000 - ₹70,000",
      month6: "₹60,000 - ₹1,50,000"
    },

    first100Challenge: [
      "Create five high-quality prompts",
      "Publish a prompt portfolio",
      "Get your first AI consulting task"
    ],

    roadmap: {
      week1: "Learn prompting techniques.",
      week2: "Build prompt libraries.",
      week3: "Create AI workflow demos.",
      week4: "Offer prompt engineering services."
    }
  }
}




];

export default opportunities;