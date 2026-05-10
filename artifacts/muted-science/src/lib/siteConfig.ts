export const siteConfig = {
  name: "Muted Science",
  tagline: "A CREATIVE RESEARCH PLATFORM FOR OBJECTS, IMAGES, GARMENTS, AND INTERNAL SYSTEMS.",
  currentTransmission: "01",
  currentLocation: "Online",
  contactEmail: "mutedscience@icloud.com",

  nav: {
    links: [
      { label: "CURRENT", href: "#current" },
      { label: "ARCHIVE", href: "#archive" },
      { label: "RELEASES", href: "#releases" },
      { label: "OBJECTS", href: "#objects" },
      { label: "PROCESS", href: "#process" },
      { label: "COLLABORATORS", href: "#collaborators" },
      { label: "INDEX", href: "#index" },
    ],
  },

  hero: {
    issueCode: "MS-001",
    lines: ["PRONOUNCED", "LOVE", "WORKBOOK."],
    cta: "Open MS-001 Project",
  },

  categories: [
    { name: "Garments", img: "/images/garments.png", href: "#objects" },
    { name: "Objects", img: "/images/objects.png", href: "#objects" },
    { name: "Process", img: "/images/fieldnotes.png", href: "#process" },
    { name: "Collaborators", img: "/images/people.png", href: "#collaborators" },
  ],

  labels: {
    featuredProject: "Featured Release",
    latestNotes: "Current Story",
    recentSignals: "Recent Signals",
    viewAllNotes: "Open Project",
    viewAllSignals: "View All Releases",
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
    { label: "MS-001 — PRONOUNCED LOVE", sub: "Digital PDF Workbook / Available Now", img: "/images/fieldnotes.png", date: "RELEASE", href: "/releases/ms-001-pronounced-love" },
    { label: "Transmission 03", sub: "", img: "/images/recent-1.png", date: "09.05.24", href: "#releases" },
    { label: "OBJECT 001", sub: "Field Shirt", img: "/images/recent-2.png", date: "08.05.24", href: "#objects" },
    { label: "Field Note", sub: "Kharkiv, Fragment", img: "/images/recent-3.png", date: "07.05.24", href: "#archive" },
    { label: "VISUAL STUDY 018", sub: "Video Still", img: "/images/recent-4.png", date: "05.05.24", href: "#archive" },
    { label: "VISUAL STUDY 019", sub: "WW-Helmet", img: "/images/fieldnotes.png", date: "05.05.24", href: "#archive" },
  ],

  contentNotes: [
    {
      date: "MS-001",
      title: "Pronounced Love — 62-day digital PDF workbook",
      href: "/releases/ms-001-pronounced-love",
    },
  ],

  footer: {
    description: "An ongoing research system exploring the space between culture, memory, objects, and the future.",
    copyright: "© Muted Science",
    system: [
      { label: "About", href: "#current" },
      { label: "Contact", href: "mailto:mutedscience@icloud.com" },
      { label: "Submissions", href: "mailto:mutedscience@icloud.com?subject=Muted%20Science%20Submission" },
      { label: "Archive Access", href: "#archive" },
      { label: "Legal", href: "#index" },
    ],
    connect: [
      { label: "Instagram", href: "https://instagram.com/" },
      { label: "Email", href: "mailto:mutedscience@icloud.com" },
      { label: "Newsletter", href: "mailto:mutedscience@icloud.com?subject=Muted%20Science%20Newsletter" },
      { label: "Sound System", href: "#releases" },
    ],
  },
};
