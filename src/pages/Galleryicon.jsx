// Distinct line-art icon per gallery category — used as a placeholder until
// real project photos are added. Keeps each empty tile meaningful instead of
// a generic box, without using any scraped/third-party photography.

const icons = {
  Almariyan: (
    <svg viewBox="0 0 48 48" width="34" height="34" fill="none">
      <rect x="8" y="6" width="32" height="36" rx="1.5" stroke="currentColor" strokeWidth="2" />
      <line x1="24" y1="6" x2="24" y2="42" stroke="currentColor" strokeWidth="2" />
      <circle cx="20" cy="24" r="1.6" fill="currentColor" />
      <circle cx="28" cy="24" r="1.6" fill="currentColor" />
    </svg>
  ),
  Kitchen: (
    <svg viewBox="0 0 48 48" width="34" height="34" fill="none">
      <rect x="6" y="20" width="36" height="18" rx="1.5" stroke="currentColor" strokeWidth="2" />
      <line x1="6" y1="29" x2="42" y2="29" stroke="currentColor" strokeWidth="1.4" opacity="0.6" />
      <rect x="11" y="24" width="8" height="1.6" fill="currentColor" />
      <rect x="29" y="24" width="8" height="1.6" fill="currentColor" />
      <path d="M10 20V13a4 4 0 0 1 4-4h20a4 4 0 0 1 4 4v7" stroke="currentColor" strokeWidth="2" />
    </svg>
  ),
  Darwaze: (
    <svg viewBox="0 0 48 48" width="34" height="34" fill="none">
      <rect x="12" y="5" width="24" height="38" rx="1.5" stroke="currentColor" strokeWidth="2" />
      <rect x="16" y="10" width="16" height="12" stroke="currentColor" strokeWidth="1.4" opacity="0.6" />
      <rect x="16" y="25" width="16" height="12" stroke="currentColor" strokeWidth="1.4" opacity="0.6" />
      <circle cx="31" cy="24" r="1.4" fill="currentColor" />
    </svg>
  ),
  Bed: (
    <svg viewBox="0 0 48 48" width="34" height="34" fill="none">
      <path d="M6 36V17a2 2 0 0 1 2-2h32a2 2 0 0 1 2 2v19" stroke="currentColor" strokeWidth="2" />
      <path d="M6 28h36" stroke="currentColor" strokeWidth="2" />
      <rect x="9" y="20" width="10" height="6" rx="1.2" stroke="currentColor" strokeWidth="1.4" opacity="0.7" />
      <line x1="6" y1="36" x2="6" y2="41" stroke="currentColor" strokeWidth="2" />
      <line x1="42" y1="36" x2="42" y2="41" stroke="currentColor" strokeWidth="2" />
    </svg>
  ),
  "Dressing Table": (
    <svg viewBox="0 0 48 48" width="34" height="34" fill="none">
      <rect x="14" y="4" width="20" height="24" rx="10" stroke="currentColor" strokeWidth="2" />
      <path d="M10 44l4-13M38 44l-4-13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <rect x="8" y="31" width="32" height="10" rx="1.5" stroke="currentColor" strokeWidth="2" />
      <line x1="24" y1="31" x2="24" y2="41" stroke="currentColor" strokeWidth="1.4" opacity="0.6" />
    </svg>
  ),
  Sofa: (
    <svg viewBox="0 0 48 48" width="34" height="34" fill="none">
      <rect x="8" y="18" width="32" height="14" rx="2" stroke="currentColor" strokeWidth="2" />
      <path d="M10 18v-5a2 2 0 0 1 2-2h4v7M38 18v-5a2 2 0 0 1-2-2h-4v7" stroke="currentColor" strokeWidth="2" />
      <path d="M6 24v10M42 24v10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <line x1="24" y1="11" x2="24" y2="18" stroke="currentColor" strokeWidth="1.4" opacity="0.6" />
    </svg>
  ),
  "TV Console": (
    <svg viewBox="0 0 48 48" width="34" height="34" fill="none">
      <rect x="6" y="26" width="36" height="12" rx="1.5" stroke="currentColor" strokeWidth="2" />
      <line x1="16" y1="32" x2="16" y2="32" stroke="currentColor" strokeWidth="2" />
      <circle cx="14" cy="32" r="1.4" fill="currentColor" />
      <circle cx="34" cy="32" r="1.4" fill="currentColor" />
      <rect x="14" y="7" width="20" height="13" rx="1.2" stroke="currentColor" strokeWidth="1.6" opacity="0.7" />
    </svg>
  ),
};

export default function GalleryIcon({ category }) {
  return icons[category] || icons.Almariyan;
}