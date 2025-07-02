import { useEffect, useRef } from "react";
import type { IconProps } from "./icon.types";

export const DiamondMinus: React.FC<IconProps> = ({
  "data-hovered": hovered,
  ...props
}) => {
  const pathRef = useRef<SVGPathElement>(null);
  const minusRef = useRef<SVGPathElement>(null);

  useEffect(() => {
    if (!hovered) return;

    [pathRef, minusRef].forEach((ref) => {
      ref.current?.animate(
        [{ strokeDasharray: "0, 100" }, { strokeDasharray: "100, 0" }],
        {
          duration: 600,
          iterations: 1,
          fill: "forwards",
          easing: "ease-in-out",
        }
      );
    });
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
      <path
        d="M2.7 10.3a2.41 2.41 0 0 0 0 3.41l7.59 7.59a2.41 2.41 0 0 0 3.41 0l7.59-7.59a2.41 2.41 0 0 0 0-3.41L13.7 2.71a2.41 2.41 0 0 0-3.41 0z"
        ref={pathRef}
      />
      <path d="M8 12h8" ref={minusRef} />
    </svg>
  );
};
