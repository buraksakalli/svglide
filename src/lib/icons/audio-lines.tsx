import { useEffect, useRef } from "react";
import type { IconProps } from "./icon.types";

export const AudioLines: React.FC<IconProps> = ({ "data-hovered": hovered, ...props }) => {
  const lineRef = useRef<SVGPathElement>(null);

  useEffect(() => {
    if (!hovered) return;
    lineRef.current?.animate(
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
      {...props}
    >
      <path d="M2 10v3" ref={lineRef} />
      <path d="M6 6v11" />
      <path d="M10 3v18" />
      <path d="M14 8v7" />
      <path d="M18 5v13" />
      <path d="M22 10v3" />
    </svg>
  );
};
