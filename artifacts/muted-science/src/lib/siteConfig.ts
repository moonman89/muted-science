export const siteConfig = {
  name: "Muted Science",
  tagline: "A CREATIVE RESEARCH PLATFORM FOR OBJECTS, IMAGES, GARMENTS, AND INTERNAL SYSTEMS.",
  currentTransmission: "01",
  currentLocation: "Online",
  contactEmail: "mutedscience@icloud.com",

  nav: {
    links: [
      { label: "RELEASE", href: "#current" },
      { label: "SYSTEM", href: "#archive" },
      { label: "INSIDE", href: "#releases" },
      { label: "DELIVERY", href: "/releases/ms-001-pronounced-love#delivery" },
      { label: "ACQUIRE", href: "/checkout/ms-001" },
    ],
  },

  hero: {
    issueCode: "MS-001",
    lines: ["PRONOUNCED", "LOVE", "WORKBOOK."],
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
    latestNotes: "Current Story",
    recentSignals: "Inside The System",
    viewAllNotes: "Open Project",
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
      format: "Digital PDF Workbook",
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
        "A private system released as a daily PDF workbook.",
        "A study on truth, regulation, emotional awareness, repetition, guilt, action, and integration.",
        "62 days.",
        "Reflect. Write. Act. Integrate.",
        "Digital PDF available now.",
      ],
      metadata: [
        { label: "Release", value: "MS-001" },
        { label: "System", value: "Pronounced Love" },
        { label: "Duration", value: "62 days" },
        { label: "Format", value: "Private PDF Workbook" },
      ],
    },
  },

  recentSignals: [
    { label: "TRUTH", sub: "Breaking point / pattern mapping", img: "/images/recent-1.png", date: "01", href: "/releases/ms-001-pronounced-love" },
    { label: "REGULATION", sub: "Breath / body awareness / safety", img: "/images/recent-2.png", date: "02", href: "/releases/ms-001-pronounced-love" },
    { label: "RESPONSIBILITY", sub: "Repair over punishment", img: "/images/recent-3.png", date: "03", href: "/releases/ms-001-pronounced-love" },
    { label: "IDENTITY", sub: "Discipline / boundaries / honesty", img: "/images/recent-4.png", date: "04", href: "/releases/ms-001-pronounced-love" },
    { label: "RELATIONSHIP", sub: "Trust / temptation / image", img: "/images/fieldnotes.png", date: "05", href: "/releases/ms-001-pronounced-love" },
    { label: "RELEASE", sub: "Closure / forgiveness / clean movement", img: "/images/garments.png", date: "08", href: "/releases/ms-001-pronounced-love" },
  ],

  contentNotes: [
    {
      date: "MS-001",
      title: "Pronounced Love — 62-day digital PDF workbook",
      href: "/releases/ms-001-pronounced-love",
    },
  ],

  footer: {
    description: "A release system for private work, emotional pattern recognition, and clean integration.",
    copyright: "© Muted Science",
    system: [
      { label: "Release", href: "#current" },
      { label: "System", href: "#archive" },
      { label: "Inside", href: "#releases" },
      { label: "Acquire", href: "/checkout/ms-001" },
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
