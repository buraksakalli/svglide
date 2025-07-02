import { useEffect, useRef } from "react";
import type { IconProps } from "./icon.types";

export const Armchair: React.FC<IconProps> = ({ "data-hovered": hovered, ...props }) => {
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
      <path d="M19 9V6a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v3" />
      <path d="M3 16a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-5a2 2 0 0 0-4 0v1.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V11a2 2 0 0 0-4 0z" ref={pathRef} />
      <path d="M5 18v2" />
      <path d="M19 18v2" />
    </svg>
  );
};
