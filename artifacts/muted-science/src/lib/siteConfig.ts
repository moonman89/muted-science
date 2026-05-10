export const siteConfig = {
  name: "Muted Science",
  tagline: "AN INDEPENDENT RESEARCH HOUSE FOR GARMENTS, OBJECTS, IMAGES, AND INTERNAL SYSTEMS.",
  currentTransmission: "01",
  currentLocation: "Online",
  contactEmail: "mutedscience@icloud.com",

  nav: {
    links: [
      { label: "RELEASES", href: "#current" },
      { label: "OBJECTS", href: "#archive" },
      { label: "STUDIES", href: "#releases" },
      { label: "ARCHIVE", href: "/system" },
      { label: "ABOUT", href: "/system" },
      { label: "ACQUIRE", href: "/checkout/ms-001" },
    ],
  },

  hero: {
    issueCode: "MS-001",
    lines: ["PRONOUNCED", "LOVE", "STUDY."],
    cta: "Acquire PDF",
  },

  categories: [
    { name: "Who This Is For", img: "/images/garments.png", href: "/releases/ms-001-pronounced-love" },
    { name: "How It Works", img: "/images/objects.png", href: "/releases/ms-001-pronounced-love" },
    { name: "What’s Inside", img: "/images/fieldnotes.png", href: "/releases/ms-001-pronounced-love" },
    { name: "Delivery", img: "/images/people.png", href: "/releases/ms-001-pronounced-love#delivery" },
  ],

  labels: {
    featuredProject: "Featured Release",
    latestNotes: "Current Release",
    recentSignals: "Release Studies",
    viewAllNotes: "View Study",
    viewAllSignals: "Open Release",
    viewProject: "View Release",
    viewFullIndex: "View Full Index",
  },

  releaseProducts: {
    ms001: {
      code: "MS-001",
      slug: "ms-001-pronounced-love",
      href: "/releases/ms-001-pronounced-love",
      title: "Pronounced Love",
      displayTitle: "MS-001 — PRONOUNCED LOVE",
      format: "Digital Study / PDF Edition",
      price: "$38",
      availability: "Digital PDF available now.",
      checkoutUrl: "/checkout/ms-001",
      acquireLabel: "Acquire PDF",
      previewImages: [
        "/images/fieldnotes.png",
        "/images/objects.png",
        "/images/recent-4.png",
      ],
      copy: [
        "Muted Science is an independent research house translating internal patterns into numbered releases across printed matter, garment studies, object editions, and image work.",
        "MS-001 — Pronounced Love is the first release: a private system issued as a daily PDF workbook.",
        "A study on repetition, guilt, action, emotional regulation, and clean integration.",
        "62 days.",
        "Reflect. Write. Act. Integrate.",
      ],
      metadata: [
        { label: "Release", value: "MS-001" },
        { label: "Medium", value: "Digital Study / PDF Edition" },
        { label: "Duration", value: "62 days" },
        { label: "Condition", value: "Repetition / Guilt / Integration" },
      ],
    },
  },

  recentSignals: [
    { label: "MS-001 — PRONOUNCED LOVE", sub: "Digital Study / PDF Edition", img: "/images/recent-1.png", date: "LIVE", href: "/releases/ms-001-pronounced-love" },
    { label: "MS-002 — THE FIRST SIGNAL", sub: "Garment Study / In Development", img: "/images/recent-2.png", date: "DEV", href: "#releases" },
    { label: "MS-003 — PRIVATE ARMOR", sub: "Object / Garment Study", img: "/images/recent-3.png", date: "DEV", href: "#releases" },
    { label: "TRUTH", sub: "Breaking point / pattern mapping", img: "/images/recent-4.png", date: "01", href: "/releases/ms-001-pronounced-love" },
    { label: "REGULATION", sub: "Breath / body awareness / safety", img: "/images/fieldnotes.png", date: "02", href: "/releases/ms-001-pronounced-love" },
    { label: "RELEASE", sub: "Closure / forgiveness / clean movement", img: "/images/garments.png", date: "08", href: "/releases/ms-001-pronounced-love" },
  ],

  contentNotes: [
    {
      date: "MS-001",
      title: "Pronounced Love — Digital Study / PDF Edition",
      href: "/releases/ms-001-pronounced-love",
    },
  ],

  footer: {
    description: "An independent research house creating garments, objects, images, and systems from private studies.",
    copyright: "© Muted Science",
    system: [
      { label: "Releases", href: "#current" },
      { label: "Objects", href: "#archive" },
      { label: "Studies", href: "#releases" },
      { label: "Archive", href: "/system" },
      { label: "Contact", href: "mailto:mutedscience@icloud.com" },
    ],
    connect: [
      { label: "Instagram", href: "https://instagram.com/" },
      { label: "Email", href: "mailto:mutedscience@icloud.com" },
      { label: "Newsletter", href: "mailto:mutedscience@icloud.com?subject=Muted%20Science%20Newsletter" },
      { label: "MS-001", href: "/releases/ms-001-pronounced-love" },
    ],
  },
};
