export type ImageAsset = {
  src: string;
  alt: string;
  caption: string;
  illustrative?: boolean;
};

export const images = {
  heroConcept: {
    src: "/images/campus-entrance.jpg",
    alt: "Conceptual architectural visualization of the proposed institution",
    caption: "Conceptual Architectural Visualization",
    illustrative: true,
  },
  college: {
    src: "/images/campus-aerial.jpg",
    alt: "Illustrative view of proposed academic campus context",
    caption: "Illustrative visualization — proposed medical college",
    illustrative: true,
  },
  hospital: {
    src: "/images/hospital-opd.jpg",
    alt: "Illustrative view of proposed hospital frontage",
    caption: "Illustrative visualization — proposed teaching hospital",
    illustrative: true,
  },
  galleryExterior: {
    src: "/images/campus-entrance.jpg",
    alt: "Conceptual exterior visualization of the proposed building",
    caption: "Conceptual Exterior Visualization",
    illustrative: true,
  },
  galleryGroundFloor: {
    src: "/images/campus-masterplan.jpg",
    alt: "Proposed ground floor zoning plan",
    caption: "Proposed Ground Floor Zoning",
    illustrative: true,
  },
  galleryTypicalFloor: {
    src: "/images/campus-aerial.jpg",
    alt: "Typical floor architectural plan",
    caption: "Typical Floor Architectural Plan",
    illustrative: true,
  },
} as const;
