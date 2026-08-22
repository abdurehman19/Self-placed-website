// A dovetail joint is the classic mark of hand-cut carpentry —
// interlocking wedge "pins" that hold two boards together without nails.
// We use that literal joinery shape as the section divider throughout
// the site instead of a generic straight line.

export default function JointDivider({ flip = false, tone = "cream" }) {
  const bg = tone === "walnut" ? "var(--walnut)" : "var(--cream)";
  const tooth = tone === "walnut" ? "var(--cream)" : "var(--walnut)";

  return (
    <div
      aria-hidden="true"
      style={{
        width: "100%",
        lineHeight: 0,
        transform: flip ? "scaleY(-1)" : "none",
        background: bg,
      }}
    >
      <svg
        viewBox="0 0 240 24"
        preserveAspectRatio="none"
        style={{ width: "100%", height: "22px", display: "block" }}
      >
        <defs>
          <pattern id={`joint-${tone}-${flip}`} width="40" height="24" patternUnits="userSpaceOnUse">
            <polygon points="0,0 16,0 24,24 8,24" fill={tooth} opacity="0.9" />
          </pattern>
        </defs>
        <rect width="240" height="24" fill={`url(#joint-${tone}-${flip})`} />
      </svg>
    </div>
  );
}
