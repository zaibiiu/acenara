import { Camera } from "lucide-react";
const scenes = {
  collaboration: {
    alt: "Representative generated scene of a diverse group of software professionals collaborating around laptops",
    label: "Collaboration, with a shared direction",
  },
  strategy: {
    alt: "Representative generated scene of professionals discussing product strategy in a modern meeting room",
    label: "A thoughtful conversation about what comes next",
  },
  design: {
    alt: "Representative generated scene of product designers reviewing a software interface and wireframes",
    label: "Design decisions made together",
  },
  architecture: {
    alt: "Representative generated scene of software engineers discussing a system architecture diagram",
    label: "Making the complex understandable",
  },
};
export function CollaborationPhoto({
  kind = "collaboration",
  className = "",
}: {
  kind?: keyof typeof scenes;
  className?: string;
}) {
  const scene = scenes[kind];
  return (
    <figure className={`collaboration-photo ${className}`}>
      <div className="collaboration-photo-image">
        <img
          src={`/images/people-${kind}.webp`}
          width="1536"
          height="1024"
          alt={scene.alt}
          loading="lazy"
        />
      </div>
      <figcaption>
        <span>
          <Camera size={13} />
          {scene.label}
        </span>
        <small>Representative generated imagery</small>
      </figcaption>
    </figure>
  );
}
