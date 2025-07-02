import { useEffect, useRef } from "react";
import type { IconProps } from "./icon.types";

export const AppWindowMac: React.FC<IconProps> = ({ "data-hovered": hovered, ...props }) => {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (!hovered) return;
    svgRef.current?.animate(
      [
        { transform: "translateY(-2px)" },
        { transform: "translateY(0)" },
      ],
      {
        duration: 400,
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
      ref={svgRef}
      {...props}
    >
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="M6 8h.01" />
      <path d="M10 8h.01" />
      <path d="M14 8h.01" />
    </svg>
  );
};
