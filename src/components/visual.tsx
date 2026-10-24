import { Cpu, Layers3, Cloud, ShieldCheck, Check } from "lucide-react";
const visuals = {
  ai: {
    src: "ai",
    title: "Intelligence, connected.",
    detail: "Knowledge · Workflows · Human review",
    icon: Cpu,
  },
  cloud: {
    src: "cloud",
    title: "Built on clear foundations.",
    detail: "Architecture · Data · Delivery",
    icon: Cloud,
  },
  security: {
    src: "security",
    title: "Confidence in every layer.",
    detail: "Access · Visibility · Continuity",
    icon: ShieldCheck,
  },
  desktop: {
    src: "product",
    title: "One product. Every touchpoint.",
    detail: "Web · Mobile · Connected systems",
    icon: Layers3,
  },
  product: {
    src: "product",
    title: "One product. Every touchpoint.",
    detail: "Web · Mobile · Connected systems",
    icon: Layers3,
  },
};
export function Visual({
  kind = "ai",
  className = "",
  compact = false,
}: {
  kind?: string;
  className?: string;
  compact?: boolean;
}) {
  const v = visuals[kind as keyof typeof visuals] || visuals.product;
  const Icon = v.icon;
  return (
    <div
      className={`premium-visual ${compact ? "visual-compact" : ""} ${className}`}
    >
      <img
        src={`/images/${v.src}-studio.webp`}
        alt={`Original Acenara conceptual artwork: ${v.title}`}
        width="1536"
        height="1024"
        loading="lazy"
      />
      <span className="visual-corner">
        <Icon size={17} />
        ACENARA / STUDIO SERIES
      </span>
      {!compact && (
        <div className="visual-caption">
          <span className="visual-caption-icon">
            <Icon size={22} />
          </span>
          <div>
            <strong>{v.title}</strong>
            <small>{v.detail}</small>
          </div>
          <Check size={17} />
        </div>
      )}
    </div>
  );
}
