import { useEffect, useRef } from "react";
import type { IconProps } from "./icon.types";

export const AppWindow: React.FC<IconProps> = ({ "data-hovered": hovered, ...props }) => {
  const rectRef = useRef<SVGRectElement>(null);

  useEffect(() => {
    if (!hovered) return;
    rectRef.current?.animate(
      [
        { transform: "scale(1)" },
        { transform: "scale(1.05)" },
        { transform: "scale(1)" },
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
      <rect x="2" y="4" width="20" height="16" rx="2" ref={rectRef} />
      <path d="M10 4v4" />
      <path d="M2 8h20" />
      <path d="M6 4v4" />
    </svg>
  );
};
