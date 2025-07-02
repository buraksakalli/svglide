import { useEffect, useRef } from "react";
import type { IconProps } from "./icon.types";

export const Pizza: React.FC<IconProps> = ({
  "data-hovered": hovered,
  ...props
}) => {
  const baseRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (!hovered) return;

    baseRef.current?.animate(
      [
        { transform: "rotate(-5deg)" },
        { transform: "rotate(0deg)" },
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
      ref={baseRef}
      {...props}
    >
      <path d="m12 14-1 1" />
      <path d="m13.75 18.25-1.25 1.42" />
      <path d="M17.775 5.654a15.68 15.68 0 0 0-12.121 12.12" />
      <path d="M18.8 9.3a1 1 0 0 0 2.1 7.7" />
      <path d="M21.964 20.732a1 1 0 0 1-1.232 1.232l-18-5a1 1 0 0 1-.695-1.232A19.68 19.68 0 0 1 15.732 2.037a1 1 0 0 1 1.232.695z" />
    </svg>
  );
};
