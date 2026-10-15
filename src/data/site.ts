export const site = {
  institutionName: "Resurgent India Trust",
  trustName: "Resurgent India Trust",
  collegeName: "Resurgent India Medical College",
  descriptor: "Proposed Medical College & Teaching Hospital",
  tagline: "Advancing Medical Education. Envisioning Better Healthcare.",
  heroIntro:
    "Resurgent India Trust presents a proposed integrated medical college and teaching hospital—planned for academic rigour, supervised clinical training, and transparent institutional governance.",
  heroSubline:
    "Structured for medical education, clinical learning, and public disclosure requirements relevant to NMC-oriented institutional presentation.",
  description:
    "A thoughtfully envisioned institution bringing together academic excellence, clinical learning, and patient-centered healthcare.",
  location: "[Proposed Location]",
  address: "[Street Address], [City], [State] — [PIN]",
  phone: "[Phone Number]",
  email: "[Email Address]",
  projectType: "Integrated medical college with associated teaching hospital",
  projectStatus: "Proposal and institutional planning (pre-operational)",
  /** Site pages: Home, About, Contact only */
  nav: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],
  utilityLinks: [
    { label: "Important updates", href: "/#important-updates" },
    { label: "Project enquiry", href: "/contact" },
  ],
} as const;

export type Announcement = {
  date: string;
  category: string;
  title: string;
  href?: string;
};

/** Add verified announcements only. Empty = public empty state on site. */
export const announcements: Announcement[] = [];

export const heroFeatures = [
  {
    title: "Academic Excellence",
    description: "Structured undergraduate medical education and faculty-led learning.",
    icon: "academic" as const,
    href: "/#academics",
  },
  {
    title: "Clinical Training",
    description: "Teaching hospital environments for supervised clinical exposure.",
    icon: "clinical" as const,
    href: "/#hospital",
  },
  {
    title: "Campus & Infrastructure",
    description: "Planned academic, laboratory, and hospital facilities.",
    icon: "campus" as const,
    href: "/#campus",
  },
  {
    title: "Regulatory Disclosures",
    description: "NMC-oriented public information published when verified.",
    icon: "disclosure" as const,
    href: "/#nmc-disclosures",
  },
] as const;

export const institutionalStrip = [
  {
    title: "Medical Education",
    description:
      "Structured undergraduate medical learning within a dedicated academic environment.",
  },
  {
    title: "Teaching Hospital",
    description:
      "Clinical exposure aligned with curriculum through an associated hospital partner.",
  },
  {
    title: "Institutional Development",
    description:
      "Campus planning, governance, and phased development of academic and clinical facilities.",
  },
  {
    title: "Community Healthcare Vision",
    description:
      "Long-term intent to contribute to accessible, dignified care in the region served.",
  },
] as const;

export const projectGlance = [
  { label: "Medical college", value: site.collegeName },
  { label: "Sponsoring trust", value: site.trustName },
  { label: "Proposed location", value: site.location },
  { label: "Project type", value: site.projectType },
  { label: "Status", value: site.projectStatus },
] as const;

export const pillars = {
  college: {
    index: "01",
    label: "The Medical College",
    title: "An academic foundation for future physicians",
    body:
      "The proposed college is envisioned to deliver structured medical education—combining classroom learning, faculty mentorship, and progressive clinical immersion within the same institutional framework.",
  },
  hospital: {
    index: "02",
    label: "The Teaching Hospital",
    title: "Clinical learning connected to patient care",
    body:
      "The associated teaching hospital is planned as the clinical arm of the institution—supporting supervised training, healthcare delivery, and the practical application of medical knowledge.",
  },
} as const;

/** Placeholder rows — replace only with verified NMC disclosure data */
export const nmcDisclosureRows = [
  { label: "Establishment / recognition status", value: "To be published when formally applicable" },
  { label: "Course intake & seat matrix", value: "Not announced (pre-operational)" },
  { label: "Faculty strength", value: "To be published when verified" },
  { label: "Hospital bed strength", value: "To be published when verified" },
  { label: "Annual compliance reports", value: "No reports published yet" },
] as const;

export const educationFlow = [
  {
    step: "Medical Education",
    text: "Foundational sciences, professional ethics, and structured academic progression.",
  },
  {
    step: "Clinical Learning",
    text: "Supervised exposure in hospital settings aligned with curricular milestones.",
  },
  {
    step: "Healthcare Service",
    text: "Patient-centered care as the context for training and community responsibility.",
  },
] as const;

export const values = [
  {
    title: "Academic integrity",
    text: "Rigorous standards in teaching, assessment, and professional conduct.",
  },
  {
    title: "Clinical responsibility",
    text: "Learning environments that respect patients, safety, and ethical practice.",
  },
  {
    title: "Institutional accountability",
    text: "Transparent governance and measured, verifiable public communication.",
  },
  {
    title: "Public health perspective",
    text: "Education oriented toward community need and long-term service.",
  },
] as const;
