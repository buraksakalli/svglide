import { useEffect, useRef } from "react";

import type { IconProps } from "./icon.types";

export const MailSearch: React.FC<IconProps> = ({
  "data-hovered": hovered,
  ...props
}) => {
  const baseRef = useRef<SVGSVGElement>(null);
  const itemRef = useRef<SVGPathElement>(null);

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
      [
        { opacity: 0, strokeDasharray: "0, 100", transform: "scale(0.5)" },
        { opacity: 1, strokeDasharray: "100, 0", transform: "scale(1)" },
      ],
      {
        duration: 600,
        iterations: 1,
        fill: "forwards",
        easing: "ease-in-out",
        delay: 0,
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
      <path d="M22 12.5V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h7.5" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
      <g ref={itemRef}>
        <path d="M18 21a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
        <circle cx="18" cy="18" r="3" />
        <path d="m22 22-1.5-1.5" />
      </g>
    </svg>
  );
};
