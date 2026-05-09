export const siteConfig = {
  name: "Muted Science",
  tagline: "A CREATIVE RESEARCH PLATFORM FOR OBJECTS, IMAGES, GARMENTS, AND INTERNAL SYSTEMS.",
  currentTransmission: "04",
  currentLocation: "Kyiv / Lviv / Online",
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
    issueCode: "MS-004",
    lines: ["THE BODY", "BECOMES", "SIGNAL."],
    cta: "Enter Archive",
  },

  categories: [
    { name: "Garments", img: "/images/garments.png", href: "#objects" },
    { name: "Objects", img: "/images/objects.png", href: "#objects" },
    { name: "Process", img: "/images/fieldnotes.png", href: "#process" },
    { name: "Collaborators", img: "/images/people.png", href: "#collaborators" },
  ],

  labels: {
    featuredProject: "Featured Study",
    latestNotes: "Latest Notes",
    recentSignals: "Recent Signals",
    viewAllNotes: "View All Notes",
    viewAllSignals: "View All Signals",
    viewProject: "View Project",
    viewFullIndex: "View Full Index",
  },

  recentSignals: [
    { label: "Transmission 03", sub: "", img: "/images/recent-1.png", date: "09.05.24" },
    { label: "OBJECT 001", sub: "Field Shirt", img: "/images/recent-2.png", date: "08.05.24" },
    { label: "Field Note", sub: "Kharkiv, Fragment", img: "/images/recent-3.png", date: "07.05.24" },
    { label: "VISUAL STUDY 018", sub: "Video Still", img: "/images/recent-4.png", date: "05.05.24" },
    { label: "VISUAL STUDY 019", sub: "WW-Helmet", img: "/images/fieldnotes.png", date: "05.05.24" },
    { label: "Transmission 02", sub: "", img: "/images/garments.png", date: "02.05.24" },
  ],

  contentNotes: [
    { date: "12.05.24", title: "Field Note: Kyiv Studio Visit by MS" },
    { date: "11.05.24", title: "Object 019: Found Synthesizer in Lviv by WA" },
    { date: "10.05.24", title: "Object 002: Field Jacket Update by MS" },
    { date: "09.05.24", title: "Interview: Photographer A. Fragment by MS" },
    { date: "08.05.24", title: "Signal interference in underground spaces" },
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
