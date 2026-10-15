export const site = {
  institutionShort: "R.I.T.",
  projectName: "R.I.T. Medical College & Teaching Hospital",
  trustName: "Resurgent India Trust",
  heroIntro:
    "A charitable medical education and healthcare project proposed by Resurgent India Trust at Koorachundu, Kozhikode District, Kerala.",
  location: "Koorachundu, Kozhikode, Kerala",
  projectLocationFull:
    "Koorachundu Village, Koyilandy Taluk, Kozhikode District, Kerala",
  landArea: "Approximately 41.34 acres",
  projectStatus: "Proposed; statutory permissions to be obtained",
  registeredOffice:
    "Door No. 7/530D, Carino Inc., Pooladikunnu, Eranhikkal P.O., Elathur, Kozhikode – 673303, Kerala.",
  email: "mail.ritk@gmail.com",
  phone: "+91 9846567888",
  phoneTel: "+919846567888",
  chairmanName: "Dr. K. M. Mehboob",
  chairmanDesignation: "Chairman & Managing Trustee, Resurgent India Trust",
  nav: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],
} as const;

export const homeCopy = {
  overview: {
    headline: "An Integrated Medical College & Teaching Hospital",
    description:
      "Resurgent India Trust proposes to establish an Allopathic Medical College and associated Teaching Hospital on approximately 41.34 acres at Koorachundu, Kozhikode District.",
  },
  infrastructure: {
    headline: "Medical Education & Healthcare Infrastructure",
    college:
      "The proposed medical college is planned to include lecture halls, laboratories, demonstration facilities, a library and supporting academic infrastructure for undergraduate medical education.",
    hospital:
      "The associated teaching hospital is envisaged with outpatient and inpatient facilities, emergency and critical care, diagnostic services, clinical departments and operation theatres.",
  },
  campus: {
    headline: "A Proposed 41.34-Acre Institutional Campus",
    description:
      "The proposed site at Koorachundu adjoins the Hill Highway (State Highway 59), as described in the project application. The campus is planned to accommodate academic and hospital buildings, laboratories, student and staff facilities, parking, internal access roads and supporting infrastructure.",
  },
  purpose: {
    headline: "Strengthening Healthcare Access & Medical Education",
    description:
      "The proposed institution aims to improve access to healthcare for communities in and around Koorachundu while supporting medical education, clinical training and community-oriented healthcare.",
    regulatoryTitle: "Regulatory Process",
    regulatoryBody:
      "Resurgent India Trust has prepared an application seeking the Government of Kerala's NOC / Essentiality Certificate for the proposed institution. Further development and academic operations remain subject to applicable statutory approvals.",
    documentsEmpty:
      "Verified project documents and application materials will be listed here when approved for public release. No approval outcomes or milestones are stated on this site.",
  },
} as const;

export const aboutCopy = {
  trust:
    "Resurgent India Trust is a charitable trust constituted under a Trust Deed dated 20 August 2015. Its stated objectives include healthcare, education and social welfare, with provisions for establishing and supporting hospitals, medical education institutions and charitable healthcare services.",
  leadershipIntro:
    "Dr. K. M. Mehboob is a practising neurologist with experience in medical education and institutional administration. The project application identifies him as an alumnus and former faculty member of Kasturba Medical College, Manipal, and Managing Trustee of KMCT, Kozhikode.",
  leadershipSupport:
    "His professional and institutional experience forms part of the foundation for the Trust's proposed medical college and teaching hospital.",
  objectives:
    "The Trust's charitable objectives include supporting medical education, improving access to healthcare and extending medical assistance to economically disadvantaged communities.",
} as const;

/** Add rows only when a verified PDF exists in /public/documents/ */
export const projectDocuments: {
  title: string;
  href: string;
}[] = [];
