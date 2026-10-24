import { Layers3 } from "lucide-react";
import { platformNames } from "@/content/studio";
export function PlatformExperience({ compact = false }: { compact?: boolean }) {
  return (
    <div className={`platform-experience ${compact ? "platform-compact" : ""}`}>
      <div className="platform-context">
        <span>
          <Layers3 size={18} />
          Selected prior platform experience
        </span>
        <p>
          Includes work carried out through previous teams and engagements.
          Platform names identify experience; they do not imply ownership,
          endorsement, or an Acenara client contract.
        </p>
      </div>
      <div className="platform-wordmarks">
        {platformNames.map((name, i) => (
          <div className="platform-tile" key={name}>
            <span className="platform-monogram" aria-hidden="true">
              {name
                .split(" ")
                .map((w) => w[0])
                .slice(0, 2)
                .join("")}
            </span>
            <strong>{name}</strong>
            <span className="platform-tile-index">
              {String(i + 1).padStart(2, "0")}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
