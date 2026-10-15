type IconProps = { className?: string };

export function IconAcademic({ className = "" }: IconProps) {
  return (
    <svg className={className} width="28" height="28" viewBox="0 0 28 28" aria-hidden>
      <path
        d="M14 4 3 9.5 14 15l11-5.5L14 4Zm0 13.2L5.2 13 14 17.8 22.8 13 14 17.2Zm0 4.8L3 17.5V20l11 5.5 11-5.5v-2.5L14 22Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function IconClinical({ className = "" }: IconProps) {
  return (
    <svg className={className} width="28" height="28" viewBox="0 0 28 28" aria-hidden>
      <path
        d="M12 4h4v7h7v4h-7v7h-4v-7H5v-4h7V4Z"
        fill="currentColor"
      />
      <circle cx="22" cy="6" r="3" fill="currentColor" opacity="0.35" />
    </svg>
  );
}

export function IconCampus({ className = "" }: IconProps) {
  return (
    <svg className={className} width="28" height="28" viewBox="0 0 28 28" aria-hidden>
      <path
        d="M4 24V11l10-6 10 6v13H4Zm2-2h6v-6h8v6h2v-9.6l-8-4.8-8 4.8V22Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function IconDisclosure({ className = "" }: IconProps) {
  return (
    <svg className={className} width="28" height="28" viewBox="0 0 28 28" aria-hidden>
      <path
        d="M7 3h10l7 7v15a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1Zm9 2.4V10h6.6L16 5.4ZM9 14h10v2H9v-2Zm0 5h10v2H9v-2Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function IconMedicalMark({ className = "" }: IconProps) {
  return (
    <svg className={className} width="36" height="36" viewBox="0 0 36 36" aria-hidden>
      <rect x="2" y="2" width="32" height="32" rx="8" fill="currentColor" opacity="0.12" />
      <path
        d="M16 10h4v6h6v4h-6v6h-4v-6h-6v-4h6v-6Z"
        fill="currentColor"
      />
    </svg>
  );
}
