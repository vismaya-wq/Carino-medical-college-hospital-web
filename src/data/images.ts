/**
 * Project imagery — local files in /public/images.
 * Replace filenames here when new renders or photographs are available.
 */
export type ImageAsset = {
  src: string;
  alt: string;
  caption?: string;
};

export const images = {
  heroPrimary: {
    src: "/images/campus-entrance.jpg",
    alt: "Proposed medical college and hospital — main campus entrance",
  },
  heroSecondary: {
    src: "/images/campus-aerial.jpg",
    alt: "Aerial view of the proposed integrated campus",
  },
  college: {
    src: "/images/medical-students.jpg",
    alt: "Medical students on the proposed college campus",
  },
  hospital: {
    src: "/images/hospital-opd.jpg",
    alt: "Proposed teaching hospital — outpatient and emergency frontage",
  },
  campus: {
    src: "/images/campus-masterplan.jpg",
    alt: "Aerial masterplan of the proposed medical college and hospital campus",
    caption:
      "Campus visualisation for institutional presentation. Final as-built imagery will follow construction.",
  },
  clinicalLearning: {
    src: "/images/hospital-opd.jpg",
    alt: "Clinical and hospital care environment",
  },
  aboutEditorial: {
    src: "/images/medical-students.jpg",
    alt: "Academic community on the medical college campus",
  },
  aboutCampus: {
    src: "/images/campus-aerial.jpg",
    alt: "Campus overview — Resurgent India Trust medical college project",
  },
  governance: {
    src: "/images/campus-entrance.jpg",
    alt: "Institutional campus — Resurgent India Trust",
  },
} satisfies Record<string, ImageAsset>;
