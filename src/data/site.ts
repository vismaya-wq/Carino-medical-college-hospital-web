export const site = {
  institutionName: "Resurgent India Trust",
  trustName: "Resurgent India Trust",
  collegeName: "Resurgent India Medical College",
  descriptor: "Medical College & Teaching Hospital",
  taglineLead: "Medical Education.",
  taglineAccent: "Community Healthcare.",
  heroIntro:
    "A proposed integrated campus in Kozhikode for training physicians and delivering teaching-hospital care.",
  location: "Kozhikode, Kerala",
  address: "Kozhikode, Kerala",
  phone: "+91 9846567888",
  phoneTel: "+919846567888",
  email: "mail.ritk@gmail.com",
  projectStatus: "Planning stage",
  nav: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],
} as const;

export const heroFeatures = [
  { title: "Academic focus", icon: "academic" as const },
  { title: "Clinical training", icon: "clinical" as const },
  { title: "Kozhikode campus", icon: "campus" as const },
] as const;

export const projectPillars = [
  {
    id: "academics",
    icon: "academic" as const,
    title: "Medical college",
    text: "Undergraduate medical programmes.",
  },
  {
    id: "training",
    icon: "clinical" as const,
    title: "Clinical training",
    text: "Supervised hospital learning.",
  },
  {
    id: "hospital",
    icon: "clinical" as const,
    title: "Teaching hospital",
    text: "Patient care and training together.",
  },
  {
    id: "campus",
    icon: "campus" as const,
    title: "Campus plan",
    text: "One site for college and hospital.",
  },
] as const;

export const serviceCards = [
  {
    title: "Location",
    text: "Proposed campus in Kozhikode, Kerala.",
    accent: "border-t-primary",
    icon: "pin" as const,
    href: "/contact",
  },
  {
    title: "Project status",
    text: "Institution in planning stage. Updates when announced.",
    accent: "border-t-teal",
    icon: "info" as const,
    href: "/about",
  },
  {
    title: "Enquiries",
    text: "Call or email the project team.",
    accent: "border-t-[#e76f51]",
    icon: "phone" as const,
    href: `tel:${site.phoneTel}`,
  },
] as const;

export const stats = [
  { value: "Kozhikode", label: "Proposed location" },
  { value: "1", label: "Integrated campus" },
  { value: site.projectStatus, label: "Current status" },
  { value: "24/7", label: "Enquiry line" },
] as const;
