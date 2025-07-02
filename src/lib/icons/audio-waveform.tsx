import { useEffect, useRef } from "react";
import type { IconProps } from "./icon.types";

export const AudioWaveform: React.FC<IconProps> = ({ "data-hovered": hovered, ...props }) => {
  const pathRef = useRef<SVGPathElement>(null);

  useEffect(() => {
    if (!hovered) return;
    pathRef.current?.animate(
      [
        { strokeDasharray: "0,100" },
        { strokeDasharray: "100,0" },
      ],
      {
        duration: 600,
        iterations: 1,
        fill: "forwards",
        easing: "ease-in-out",
      }
    );
  }, [hovered]);

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M2 13a2 2 0 0 0 2-2V7a2 2 0 0 1 4 0v13a2 2 0 0 0 4 0V4a2 2 0 0 1 4 0v13a2 2 0 0 0 4 0v-4a2 2 0 0 1 2-2" ref={pathRef} />
    </svg>
  );
};
