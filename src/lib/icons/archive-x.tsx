import { useEffect, useRef } from "react";

import type { IconProps } from "./icon.types";

export const ArchiveX: React.FC<IconProps> = ({
  "data-hovered": hovered,
  ...props
}) => {
  const baseRef = useRef<SVGSVGElement>(null);
  const itemRef = useRef<SVGPathElement>(null);
  const elementRef = useRef<SVGPathElement>(null);

  useEffect(() => {
    if (!hovered) return;

    baseRef.current?.animate(
      [{ strokeDasharray: "0, 100" }, { strokeDasharray: "100, 0" }],
      {
        duration: 600,
        iterations: 1,
        fill: "forwards",
        easing: "ease-in-out",
      }
    );

    itemRef.current?.animate(
      [{ transform: "translateY(-50%)" }, { transform: "translateY(0)" }],
      {
        duration: 600,
        iterations: 1,
        fill: "forwards",
        easing: "ease-in-out",
      }
    );

    elementRef.current?.animate(
      [{ transform: "translateY(10%)" }, { transform: "translateY(0)" }],
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
      ref={baseRef}
      {...props}
    >
      <rect width="20" height="5" x="2" y="3" rx="1" />
      <path d="M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8" ref={itemRef} />
      <g ref={elementRef}>
        <path d="m9.5 12 5 5" />
        <path d="m9.5 17 5-5" />
      </g>
    </svg>
  );
};